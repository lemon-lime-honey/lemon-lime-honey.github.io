---
layout: post
title: '[Recipe: Remake] 레시피'
author: bs
date: '2023-09-22 21:56:00 +0900'
category: recipe-table
tags: [Django, project]
render_with_liquid: false
---

## models.py

| 이름 | 설명 |
| --- | --- |
| Ingredient | 재료 |
| Recipe | 레시피 |
| RecipeStep | 레시피 단계 |
| RecipeIngredient | 레시피에 들어가는 재료와 양 |

## serializers.py
DRF 시리얼라이저 문서의 [Dealing with nested objects 섹션](https://www.django-rest-framework.org/api-guide/serializers/#dealing-with-nested-objects), [Writable nested representations 섹션](https://www.django-rest-framework.org/api-guide/serializers/#writable-nested-representations)과 [스택오버플로우 질문](https://stackoverflow.com/questions/51214630/how-to-set-up-double-nested-serializer-in-django-rest-framework)을 참조했다.

```python
class RecipeIngredientSerializer(ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = ('ingredient', 'quantity',)


class RecipeStepSerializer(ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ('detail',)


class RecipeSerializer(ModelSerializer):
    # 중첩된 시리얼라이저
    ingredients = RecipeIngredientSerializer(many=True, source='recipeingredient')
    steps = RecipeStepSerializer(many=True, source='step')


    class Meta:
        model = Recipe
        fields = (
            'title',
            'content',
            'category',
            'time',
            'difficulty',
            'ingredients',
            'steps'
        )

    '''
    중첩된 생성, 갱신의 동작이 모호해질 수 있으며
    관련된 모델 사이의 복잡한 의존성을 필요로 할 수 있기 때문에
    `ModelSerializer`의 `.create()`, `.update()` 메서드는
    중첩된 시리얼라이저에 관한 생성/갱신 동작을 지원하지 않는다.
    따라서 `.create()`와 `.update()` 메서드를 직접 작성한다.
    '''

    # 생성
    def create(self, validated_data):
        steps = validated_data.pop('step')
        ingredients = validated_data.pop('recipeingredient')
        recipe = Recipe.objects.create(**validated_data)

        # 입력 받은 단계를 순회하며 `RecipeStep` 객체를 생성한다.
        for step in steps:
            RecipeStep.objects.create(recipe=recipe, detail=step['detail'])

        # 입력 받은 재료 정보를 순회하며 `RecipeIngredient` 객체를 생성한다.
        for ingredient in ingredients:
            RecipeIngredient.objects.create(
                recipe=recipe,
                ingredient=ingredient['ingredient'],
                quantity=ingredient['quantity']
            )

        return recipe


    # 갱신
    def update(self, instance, validated_data):
        steps = validated_data.pop('step')
        ingredients = validated_data.pop('recipeingredient')
        original_steps = RecipeStep.objects.filter(recipe=instance)
        original_ingredients = RecipeIngredient.objects.filter(recipe=instance)

        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.category = validated_data.get('category', instance.category)
        instance.time = validated_data.get('time', instance.time)
        instance.difficulty = validated_data.get('difficulty', instance.difficulty)
        instance.save()

        # 레시피 단계
        index = 0

        for st in original_steps:
            # 단계 수정
            if index < len(steps):
                st.detail = steps[index]['detail']
                st.save()
            # 단계 삭제
            else:
                st.delete()
            index += 1

        # 단계 추가
        if index < len(steps):
            for i in range(index, len(steps)):
                RecipeStep.objects.create(
                    recipe=instance,
                    detail=steps[i]['detail']
                )

        # 레시피 재료
        index = 0

        for ri in original_ingredients:
            # 재료 수정
            if index < len(ingredients):
                ri.ingredient = ingredients[index]['ingredient']
                ri.quantity = ingredients[index]['quantity']
                ri.save()
            # 재료 삭제
            else:
                ri.delete()
            index += 1

        # 재료 추가
        if index < len(ingredients):
            for i in range(index, len(ingredients)):
                RecipeIngredient.objects.create(
                    recipe=instance,
                    ingredient=ingredients[i]['ingredient'],
                    quantity=ingredients[i]['quantity']
                )

        return instance
```

`.update()` 메서드에서 간략하게 단계/재료 수정, 삭제, 추가라고 설명했지만 엄밀히 말하자면

1. 이미 존재하는 단계, 재료를 입력받은 데이터로 덮어쓴다.
2. 입력받은 데이터가 더 적은 경우 덮어 씌워지지 않고 남은 객체를 제거한다.
3. 입력받은 데이터가 더 많은 경우 남은 데이터로 객체를 새로 생성한다.

## views.py
`ModelViewSet`을 상속받아 작성했다.

```python
class RecipeViewSet(ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
```

## urls.py
`DefaultRouter`를 사용했다.

```python
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'', RecipeViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
```