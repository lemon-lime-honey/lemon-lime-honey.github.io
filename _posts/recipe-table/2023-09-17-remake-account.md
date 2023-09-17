---
layout: post
title: '[Recipe: Remake] 회원가입, 로그인, 로그아웃'
author: bs
date: '2023-09-17 23:24:00 +0900'
category: recipe-table
tags: [Django, project]
render_with_liquid: false
---

## `models.py`
우선 `BaseUserManager`를 상속받는 `UserManager`를 작성한다.<br>
`django.contrib.auth.models`의 `UserManager`처럼 `create_user`, `create_superuser` 메서드도 작성한다.

[Django 공식문서](https://docs.djangoproject.com/en/dev/ref/contrib/auth/)를 참고하면 좋다.

```python
class UserManager(BaseUserManager):
    # 일반 사용자 계정 생성
    def create_user(self, email, nickname, birthdate, password, **extra_fields):
        # 입력되지 않은 필드를 기록하기 위한 리스트
        fields = list()

        # 이메일, 닉네임, 생일을 필수로 입력해야 한다.
        if not email:
            fields.append('email')
        if not nickname:
            fields.append('nickname')
        if not birthdate:
            fields.append('birthdate')

        # 입력되지 않은 필드가 하나라도 있는 경우 `ValueError`가 발생한다.
        if fields:
            field_required = ''

            for i in range(len(fields)):
                field_required += fields[i]
                if i != len(fields) - 1:
                    field_required += ', '

            raise ValueError(_(f'The following fields must be set: {field_required}'))

        # `BaseUserManager`의 클래스 메서드인 `normalize_email`은
        # 이메일의 도메인 부분을 모두 소문자로 바꾼다.
        email = self.normalize_email(email)

        # 이메일 중복 확인
        if get_user_model().objects.filter(email=email):
            raise ValueError(_('User with this Email already exists.'))

        # 닉네임 중복 확인
        if get_user_model().objects.filter(nickname=nickname):
            raise ValueError(_('User with this nickname already exists.'))

        # 계정 생성
        user = self.model(email=email, nickname=nickname, birthdate=birthdate, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    

    # 관리자 계정 생성
    def create_superuser(self, email, nickname, birthdate, password, **extra_fields):
        # `is_staff`, `is_superuser`, `is_active`가 모두 `True`
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        # `is_staff`와 `is_superuser`가 `extra_fields`에 없으면
        # `ValueError`가 발생한다.
        if not extra_fields.get('is_staff'):
            raise ValueError(_('Superuser must have is_staff=True.'))
        if not extra_fields.get('is_superuser'):
            raise ValueError(_('Superuser must have is_superuser=True'))

        # 관리자 계정 생성
        # 계정 생성 자체는 `create_user`를 이용한다.
        return self.create_user(
            email=email,
            nickname=nickname,
            birthdate=birthdate,
            password=password,
            **extra_fields
        )
```

그 다음은 모델 `User`를 작성한다.<br>
[Model Manager에 관한 Django 공식문서](https://docs.djangoproject.com/en/dev/topics/db/managers/)에서 언급된 것처럼 `objects = UserManager`로 manager를 바꿔준다.

```python
class User(AbstractUser):
    # 중복을 허용하지 않는 필드에는 `unique=True`를 추가해준다.
    email = models.EmailField(unique=True)
    nickname = models.CharField(max_length=8, unique=True)
    birthdate = models.DateField()
    objects = UserManager()
    REQUIRED_FIELDS = ['email', 'nickname', 'birthdate']


    def __str__(self):
        return self.nickname
```

## `serializer.py`
시리얼라이저를 작성한다.

```python
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username', 'email', 'nickname', 'birthdate', 'password')
```

## `views.py`
지금은 DRF가 제공하는 로그인/로그아웃 기능을 사용할 것이므로 회원가입 뷰만 작성한다.

```python
class SignupAPIView(APIView):
    # 회원가입이므로 'POST' 메서드만 허용한다.
    http_method_names = ['post']
    permission_classes = (permissions.AllowAny,)


    def post(self, *args, **kwargs):
        serializer = UserSerializer(data=self.request.data)

        # 입력받은 데이터가 유효하면 계정을 생성하고 201 응답을 반환한다.
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            return Response(status=status.HTTP_201_CREATED)
        # 입력받은 데이터가 유효하지 않다면 400 응답과 함께 오류 메시지를 반환한다.
        return Response(
            status=status.HTTP_400_BAD_REQUEST,
            data={'errors': serializer.errors}
        )
```

## `urls.py`
```python
urlpatterns = [
    path('', SignupAPIView.as_view()),
    path('', include('rest_framework.urls'))
]
```