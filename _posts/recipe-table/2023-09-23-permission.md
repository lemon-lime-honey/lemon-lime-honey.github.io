---
layout: post
title: '[Recipe: Remake] Permission'
author: bs
date: '2023-09-23 18:56:00 +0900'
category: recipe-table
tags: [Django, project]
render_with_liquid: false
---

## CustomPermission
`settings.py`가 속한 폴더에 `permissions.py`를 생성한다.<br>
레시피 뿐만 아니라 이후에 추가할 레시피 리뷰, 게시판 글/댓글 또한 `POST`일 때에는 인증된 회원만, 수정/삭제는 작성자 또는 관리자만 가능하게 구현할 것이므로 다음과 같이 작성했다.<br>
[DRF의 권한 문서](https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions)를 참조했다.

```python
from rest_framework.permissions import BasePermission, SAFE_METHODS


class CustomPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return request.user.is_authenticated
        return True


    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user or request.user.is_staff
```

## settings.py
`settings.py`에 다음 설정을 추가했다.

```python
REST_FRAMEWORK = {
    ...
    'DEFAULT_PERMISSION_CLASSES': ('cfg.permissions.CustomPermission',),
}
```

## serializers.py (recipes)
`RecipeSerializer`의 `.create()` 메서드를 다음과 같이 수정했다.<br>
여기서 `self`는 `RecipeSerializer`의 인스턴스이므로 `self.request.user`로 사용자를 확인할 수는 없다.

```python
# before
recipe = Recipe.objects.create(**validated_data)

# after
recipe = Recipe.objects.create(
    **validated_data,
    user=self.context.get('request').user
)
```