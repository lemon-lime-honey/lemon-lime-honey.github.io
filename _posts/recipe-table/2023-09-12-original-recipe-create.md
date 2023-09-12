---
layout: post
title: [Recipe: Original] 레시피 생성
author: bs
date: '2023-09-12 23:17:00 +0900'
last_modified_at: '2023-09-12 23:24:00 +0900'
category: recipe-table
tags: [Django, project]
---

## 모델


| 이름 | 설명 |
| -- | -- |
| Ingredient | 재료 |
| Recipe | 레시피 |
| RecipeStep | 레시피 과정(단계) |
| RecipeIngredient | 레시피에 들어가는 재료와 양 |


## 폼


| 이름 | 설명 |
| --- | --- |
| RecipeForm | 레시피 등록 폼 |
| RecipeIngredientFormSet | 레시피 재료 등록용 formset |
| RecipeStepFormSet | 레시피 단계 등록용 formset |


#### RecipeIngredientFormSet
```python
RecipeIngredientFormSet = forms.inlineformset_factory(
    Recipe,
    RecipeIngredient,
    fields=(
        "ingredient",
        "quantity",
    ),
    extra=1,
    can_delete=False,
    labels={"ingredient": "", "quantity": ""},
)
```

#### RecipeStepFormSet
```python
RecipeStepFormSet = forms.inlineformset_factory(
    Recipe,
    RecipeStep,
    fields=("detail",),
    extra=1,
    can_delete=False,
    labels={"detail": ""},
    widgets={
        "detail": forms.Textarea(
            attrs={
                "rows": 1,
            }
        )
    }
)
```

## 뷰
`LoginRequiredMixin`과 `TemplateView`를 상속받는 `RecipeCreateView`를 생성했다.<br>
속성 `template_name`은 레시피 생성 페이지 템플릿으로 설정한다.

#### GET
```python
def get(self, *args, **kwargs):
    ingredients = Ingredient.objects.all()
    options = [ingredient for ingredient in ingredients]
    ingredientformset = RecipeIngredientFormSet(
        queryset=RecipeIngredient.objects.none()
    )
    stepformset = RecipeSteipFormSet(
        queryset=RecipeStep.objects.none()
    )
    form = RecipeForm()

    return self.render_to_response({
        "form": form,
        "ingredientformset": ingredientformset,
        "stepformset": stepformset,
        "options": options,
    })
```

- `options`: 레시피를 등록할 때 추가할 재료의 종류를 선택하기 위한 재료 리스트
- `ingredientformset`: 재료 등록용 폼
- `stepformset`: 레시피 단계 등록용 폼
- `form`: 레시피 등록용 폼

#### POST
```python
def post(self, *args, **kwargs):
    form = RecipeForm(self.request.POST, self.request.FILES)
    stepforms = RecipeStepFormSet(self.request.POST)
    ingredientforms = RecipeIngredientFormSet(self.request.POST)
    ingredient_num = int(self.request.POST.get("recipeingredient_set-TOTAL_FORMS"))

    if form.is_valid():
        recipe = form.save(commit=False)
        recipe.user = self.request.user # 레시피 작성자 정보 추가
        recipe.save()

        # 단계 폼을 순회한다.
        for subform in stepforms:
            if subform.is_valid():
                step = subform.save(commit=False)
                # 단계 폼에 내용이 없으면 저장하지 않는다.
                if step.detail != "":
                    step.recipe = recipe
                    step.save()

        # 아래는 입력받은 재료를 저장하기 위한 코드이다.
        # `recipeingredient_set-{i}-ingredient`: i번째 폼의 재료 이름
        # `recipeingredient_set-{i}-quantity`: i번째 폼의 재료 양
        # request.POST에서 재료 인라인 폼에서 받은 재료와 그 양을 `raw_ingredient`에 저장한다.
        # `raw_ingredient`를 순회하며 `RecipeIngredient`의 인스턴스를 생성한다.
        # 이때 재료 이름이 숫자라면 이미 저장된 재료의 `pk`로 간주한다.
        # 문자라면 재료를 새로 등록하고 `RecipeIngredient`의 인스턴스를 생성한다.
        raw_ingredient = list()

        for i in range(1, ingredient_num):
            raw_ingredient.append((
                self.request.POST.get(f"recipeingredient_set-{i}-ingredient"),
                self.request.POST.get(f"recipeingredient_set-{i}-quantity"),
            ))

        for ingredient, quantity in raw_ingredient:
            if ingredient.isdigit():
                RecipeIngredient.objects.create(
                    recipe=recipe,
                    ingredient=Ingredient.objects.get(pk=int(ingredient)),
                    quantity=quantity,
                )
            else:
                temp = Ingredient.objects.create(name=ingredient)
                RecipeIngredient.objects.create(
                    recipe=recipe, ingredient=temp, quantity=quantity
                )

        return redirect("recipes:recipe_detail", recipe_pk=recipe_pk)

    # 레시피 폼이 유효하지 않은 경우 다시 폼을 렌더링해준다.
    return self.render_to_response({
        "form": form,
        "ingredientforms": ingredientforms,
        "stepforms": stepforms,
    })
```

## 템플릿
### 단계 등록
추가 버튼을 누르면 폼이 늘어난다.

```html
<div id="steps-section">
    {{ stepformset.management_form }}

    {% for stepform in stepformset %}
    <div class="step-form">
        {{ stepform }}
    </div>
    {% endfor %}
</div>
```

```javascript
let addStep = document.querySelector('#add-step')
let stepForm = document.querySelectorAll('.step-form')

addStep.addEventListener('click', addDetail)

function addDetail(e) {
    e.preventDefault()

    let newForm = stepForm[0].cloneNode(true)
    let formRegex = RegExp(`recipestep_set-(\\d){1}-`, 'g')

    stepNum++
    newForm.innerHTML = newForm.innerHTML.replace(formregex, `recipestep_set-${stepNum}-`)
    newForm.innerHTML = newForm.innerHTML.replace()
    stepSection.insertBefore(newForm, line)
    totalSteps.setAttribute('value', `${stepNum + 1}`)
}
```

### 재료 등록
단계 등록과 마찬가지로 추가 버튼을 누르면 폼이 늘어난다.<br>
재료 입력 시 자동완성(검색)을 지원하기 위해 `Select2` 플러그인을 사용하였다.

```html
<div id="ingredients-section">
    {{ ingredientformset.management_form }}

    {% for ingredientform in ingredientformset %}
    <div class="ingredient-form hidden">
        {{ ingredientform.ingredient }}
        {{ ingredientform.quantity }}
    </div>
    {% endfor %}
</div>
```

```javascript
let addIngredient = document.querySelector('#add-ingredient')
let ingredientForm = document.querySelector('.ingredient-form')

addIngredient.addEventListener('click', addForm)

function addForm(e) {
    e.preventDefault()

    let newForm = ingredientForm[0].cloneNode(true)
    let formRegex = RegExp(`recipeingredient_set-(\\d){1}-`, 'g')

    formNum++
    newForm.innerHTML = newForm.innerHTML.replace(formRegex, `recipeingredient_set-${formNum}-`)
    newForm.innerHTML = newForm.innerHTML.replace()
    quantityInput = newForm.querySelector('input')
    quantityInput.setAttribute('placeholder', '수량을 입력하세요')
    ingredientSection.insertBefore(newForm, line)
    totalForms.setAttribute('value', `${formNum + 1}`)

    $(function() {
        $(newForm.querySelector('select')).select2({
            tags: true
        })
    })

    newForm.classList.remove('hidden')
}
```