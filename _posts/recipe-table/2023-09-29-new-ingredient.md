---
layout: post
title: '[Recipe: Remake] 레시피 등록/수정할 때 새로운 재료 등록'
author: bs
date: '2023-09-29 07:35:00 +0900'
category: recipe-table
tags: [Django, project]
render_with_liquid: false
---

# 동작 설명
레시피를 등록하거나 수정할 때 데이터베이스에 없는 재료를 입력한 경우 새로운 재료를 등록하고 레시피를 저장한다.

# RecipeViewSet
```python
class RecipeViewSet(ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()


    def new_ingredient(self, request):
        # 입력된 재료가 있는 경우 재료를 검사한다.
        if request.data.get('ingredients'):
            for i in range(len(request.data['ingredients'])):
                ingredient = request.data['ingredients'][i]['ingredient']
                # 입력받은 재료가 기본키가 아니라 문자열인 경우
                if isinstance(ingredient, str):
                    # 해당 문자열을 `name`으로 가지는 재료가 있는지 확인한다.
                    try:
                        ig = Ingredient.objects.get(name=ingredient).pk
                    # 없으면 생성한다.
                    except:
                        ig = Ingredient.objects.get(name=ingredient).pk
                    # 문자열로 받은 재료를 기본키로 바꿔준다.
                    request.data['ingredients'][i]['ingredient'] = ig
        
        return request


    def create(self, request, *args, **kwargs):
        request = self.new_ingredient(request)
        return super().create(request, *args, **kwargs)


    def update(self, request, *args, **kwargs):
        request = self.new_ingredient(request)
        return super().update(request, *args, **kwargs)
```