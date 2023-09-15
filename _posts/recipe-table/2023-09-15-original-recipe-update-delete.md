---
layout: post
title: '[Recipe: Original] 레시피 수정, 삭제'
author: bs
date: '2023-09-15 11:09:00 +0900'
category: recipe-table
tags: [Django, project]
render_with_liquid: false
---

# 레시피 수정

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
| RecipeUpdateForm | 레시피 수정 폼 |
| RecipeIngredientUpdateFormSet | 레시피 재료 수정용 formset |
| RecipeIngredientFormSet | 레시피 재료 추가용 formset |
| RecipeStepUpdateFormSet | 레시피 단계 수정용 formset |
| RecipeStepFormSet | 레시피 단계 추가용 formset |


#### RecipeIngredientUpdateFormSet
```python
RecipeIngredientUpdateFormSet = forms.inlineformset_factory(
    Recipe,
    RecipeIngredient,
    fields=(
        "ingredient",
        "quantity",
    ),
    extra=0,
    can_delete=True,
    labels={"ingredient": "", "quantity": ""},
)
```

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

#### RecipeStepUpdateFormSet
```python
RecipeStepUpdateFormSet = forms.inlineformset_factory(
    Recipe,
    RecipeStep,
    fields=("detail",),
    extra=0,
    can_delete=True,
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
`UserPassesTestMixin`과 `UpdateView`를 상속받는 `RecipeUptateView`를 생성했다.<br>
속성 `template_name`은 레시피 수정 페이지 템플릿으로 설정한다.<br>
속성 `pk_url_kwarg`는 `recipe_pk`로 설정했다.

#### `test_func`
작성자 또는 관리자만이 레시피를 수정할 수 있게 하기 위해 `test_func`을 재정의한다.

```python
def test_func(self):
    keys = self.request.path.split("/")
    recipe = Recipe.objects.get(pk=int(keys[2]))
    isAuthor = self.request.user == recipeuser
    isAdmin = self.request.user.is_superuser or self.request.user.is_staff
    return isAuthor or isAdmin
```

#### GET
```python
def get(self, *args, **kwargs):
    recipe = Recipe.objects.get(pk=kwargs["recipe_pk"])

    # 재료를 추가할 때 이미 있는 재료를 선택지에서 제외하기 위해
    # 이미 있는 재료를 `temp`로 저장하고
    # `ingredient`를 `temp`를 제외한 `Ingredient`로 지정했다.
    temp = RecipeIngredient.objects.filter(recipe=recipe)
    ingredients = Ingredient.objects.exclude(recipeingredient__in=temp)
    options = [ingredient for ingredient in ingredients]

    # 재료 수정용 폼
    # `prefix`를 따로 설정하지 않으면
    # 재료 추가용 폼의 데이터와 수정 데이터를 구분해서 받기 어렵다.
    ingredientupdateformset = RecipeIngredientUpdateFormSet(
        instance=recipe, prefix="ingredient-update"
    )
    ingredientformset = RecipeIngredientFormSet()

    # 단계 수정용 폼
    # 재료 수정용 폼의 경우와 같은 이유로 `prefix`를 설정했다.
    stepupdateformset = RecipeStepUpdateFormSet(
        instance=recipe, prefix="step-update"
    )
    stepformset = RecipeStepFormSet()

    # 레시피 수정용 폼
    form = RecipeUpdateForm(instance=recipe)

    return self.render_to_response({
        "form": form,
        "ingredientupdateformset": ingredientupdateformset,
        "ingredientformset": ingredientformset,
        "stepupdateformset": stepupdateformset,
        "stepformset": stepformset,
        "options": options,
        "recipe": recipe,
    })
```

#### POST
```python
def post(self, *args, **kwargs):
    recipe = Recipe.objects.get(pk=kwargs["recipe_pk"])
    ingredients = RecipeIngredient.objects.filter(recipe=recipe).order_by("pk")
    form = RecipeForm(self.request.POST, self.request.FILES, instance=recipe)

    # 레시피 단계 폼
    stepforms = RecipeStepFormSet(self.request.POST)
    stepupdateforms = RecipeStepUpdateFormSet(
        self.request.POST, prefix="step-update"
    )

    # 레시피 재료 폼
    ingredientforms = RecipeIngredientFormSet(self.request.POST)
    ingredientupdateforms = RecipeIngredientUpdateFormSet(
        self.request.POST, prefix="ingredient-update"
    )

    # 재료 수정 폼의 개수
    update_ingredient_num = int(
        self.request.POST.get("ingredient-update-TOTAL_FORMS")
    )
    # 재료 추가 폼의 개수
    ingredient_num = int(self.request.POST.get("recipeingredient_set-TOTAL_FORMS"))
    # 단계 수정 폼의 개수
    step_num = int(self.request.POST.get("step-update-TOTAL_FORMS"))

    if form.is_valid():
        recipe = form.save(commit=False)
        recipe.user = self.request.user
        recipe.save()

        # 단계 수정 폼
        for subform in stepupdateforms:
            if subform.is_valid():
                step = subform.save(commit=False)
                # 폼에 내용이 있으면 수정된 내용을 저장한다.
                # 폼에 내용이 없으면 해당 단계를 제거한다.
                if step.detail != "":
                    step.save()
                else:
                    step.remove()

        # 단계 추가 폼
        for subform in stepforms:
            if subform.is_valid():
                step = subform.save(commit=False)
                # 폼에 내용이 있는 경우에만 저장한다.
                if step.detail != "":
                    step.recipe = recipe
                    step.save()

        # 삭제할 재료를 위한 리스트
        targets = list()

        # 재료 수정 폼
        for i in range(update_ingredient_num):
            ingredient_pk = self.request.POST.get(
                f"ingredient-update-{i}-ingredient"
            )
            # 재료를 삭제하지 않는 경우
            if ingredient_pk:
                ingredient = Ingredient.objects.get(pk=ingredient_pk)
                quantity = self.request.POST.get(f"ingredient-update-{i}-quantity")
                RecipeIngredient(
                    pk=ingredients[i].pk,
                    recipe=recipe,
                    ingredient=ingredient,
                    quantity=quantity,
                ).save()
            # 재료를 삭제하는 경우
            else:
                targets.append(ingredients[i].pk)

        # 재료 삭제
        for target in targets:
            RecipeIngredient.objects.get(pk=target).delete()

        # 재료, 수량 정보 저장용 리스트
        raw_ingredient = list()

        for i in range(1, ingredient_num):
            raw_ingredient.append((
                self.request.POST.get(f"recipeingredient_set-{i}-ingredient"),
                self.request.POST.get(f"recipeingredient_set-{i}-quantity"),
            ))

        # 재료 추가
        for ingredient, quantity in raw_ingredient:
            # 기존에 있던 재료인 경우
            if ingredient.isdigit():
                RecipeIngredient.objects.create(
                    recipe=recipe,
                    ingredient=Ingredient.objects.get(pk=int(ingredient)),
                    quantity=quantity,
                )
            # 새로운 재료인 경우
            else:
                temp = Ingredient.objects.create(name=ingredient)
                RecipeIngredient.objects.create(
                    recipe=recipe, ingredient=temp, quantity=quantity
                )

        # 단계를 삭제하는 경우
        for i in range(step_num):
            if self.request.POST.get(f"step-update-{i}-DELETE") == "on":
                target = RecipeStep.objects.get(
                    pk=self.request.POST.get(f"step-update-{i}-id")
                )
                target.delete()

        return redirect("recipes:recipe_detail", recipe.pk)

    # 레시피 폼이 유효하지 않은 경우 다시 폼을 렌더링해준다.
    return self.render_to_response({
        "form": form,
        "ingredientupdateforms": ingredientupdateforms,
        "stepupdateforms": stepupdateforms,
        "ingredientforms": ingredientforms,
        "stepforms": stepforms,
    })
```

## 템플릿
### 단계 수정 및 추가
추가 버튼을 누르면 단계 추가 폼이 늘어난다.

```html
<div id="steps-section">
    {# 레시피 단계 수정 #}
    {{ stepupdateformset.management_form}}

    {% for stepform in stepupdateformset %}
    <div class="step-update-form">
        {{ stepform }}
    </div>
    {% endfor %}

    {# 레시피 단계 추가 #}
    {{ stepformset.management_form }}

    {% for stepform in stepformset %}
    <div class="step-form hidden">
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

### 재료 수정 및 추가
단계 추가와 마찬가지로 추가 버튼을 누르면 재료 추가 폼이 늘어난다.<br>
재료 입력 시 자동완성(검색)을 지원하기 위해 `Select2` 플러그인을 사용하였다.

```html
<div id="ingredients-section">
    {# 레시피 재료 수정 #}
    {{ ingredientupdateformset.management_form }}

    {% for ingredientform in ingredientupdateformset %}
    <div class="ingredient-update-form">
        {{ ingredientform.ingredient }}
        {{ ingredientform.quantity }}
    </div>
    {% endfor %}

    {# 레시피 재료 추가 #}
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
// 재료 수정
let updateForms = document.querySelectorAll('.ingredient-update-form')

updateForms.forEach(form => {
    $(function() {
        $(form.querySelector('select')).select2()
    })
})

let ingredientForm = document.querySelectorAll('.ingredient-form')
let addIngredient = document.querySelector('#add-ingredient')
let totalForms = document.querySelector('#id_recipeingredient_set-TOTAL_FORMS')
let formNum = ingredientForm.length - 1
let line = document.querySelector('#bottom-line')
let stepForm = document.querySelectorAll('.step-form')
let addStep = document.querySelector('#add-step')
let totalSteps = document.querySelector('#id_recipestep_set-TOTAL_FORMS')
const ingredientSection = document.getElementById('ingredients-section')
const stepSection = document.getElementById('steps-section')
let stepNum = stepForm.length - 1

// 단계 추가
addStep.addEventListener('click', addDetail)

function addDetail(e) {
  e.preventDefault()

  let newForm = stepForm[0].cloneNode(true)
  let formRegex = RegExp(`recipestep_set-(\\d){1}-`, 'g')

  stepNum++
  newForm.innerHTML = newForm.innerHTML.replace(formRegex, `recipestep_set-${stepNum}-`)
  newForm.innerHTML = newForm.innerHTML.replace()
  newForm.classList.remove('hidden')
  stepSection.insertBefore(newForm, line)
  totalSteps.setAttribute('value', `${stepNum + 1}`)
}

// 재료 추가
addIngredient.addEventListener('click', addForm)

function addForm(e) {
  e.preventDefault()

  let newForm = ingredientForm[0].cloneNode(true)
  let formRegex = RegExp(`recipeingredient_set-(\\d){1}-`,'g')

  formNum++
  newForm.innerHTML = newForm.innerHTML.replace(formRegex, `recipeingredient_set-${formNum}-`)
  newForm.innerHTML = newForm.innerHTML.replace()
  quantityInput = newForm.querySelector('input')
  quantityInput.setAttribute('placeholder', '수량을 입력해주세요')
  ingredientSection.insertBefore(newForm, line)
  totalForms.setAttribute('value', `${formNum + 1}`)

  $(function() {
    $(newForm.querySelector('select')).select2({
      tags: true,
    })
  })

  newForm.classList.remove('hidden')
}
```

# 레시피 삭제
## 뷰
`UserPassesTestMixin`과 `DeleteView`를 상속받는 `RecipeDeleteView`를 생성했다.<br>
속성 `model`은 `Recipe`이다.<br>
속성 `success_url`를 `reverse_lazy("recipes:recipe_list")`로 설정했다.<br>
속성 `pk_url_kwarg`는 `recipe_pk`로 설정했다.

```python
class RecipeDeleteView(UsePassesTextMixin, DeleteView):
    model = Recipe
    success_url = reverse_lazy("recipes:recipe_list")
    pk_url_kwarg = "recipe_pk"


    def test_func(self):
        recipe = self.get_object()
        isAuthor = self.request.user == recipeuser
        isAdmin = self.request.user.is_superuser or self.request.user.is_staff
        return isAuthor or isAdmin


    def get_object(self, queryset=None):
        obj = super().get_object(queryset)
        return obj


    def get(self, request, *args, **kwargs):
        return self.post(request, *args, **kwargs)
```

# 이미지 관련
레시피 수정, 또는 삭제 시 이미지 변경 또는 삭제가 발생한 경우 [signal](https://docs.djangoproject.com/en/dev/topics/signals/)을 사용해 처리해주었다.

```python
@receiver(post_delete, sender=Recipe)
def delete_recipe_image(sender, instance, *args, **kwargs):
    try:
        instance.image.delete(save=False)
    except:
        pass


@receiver(pre_save, sender=Recipe)
def pre_save_image(sender, instance, *args, **kwargs):
    try:
        old_image = instance.__class__.objects.get(pk=instance.pk).image.path
        try:
            new_image = instance.image.path
        except:
            new_image = None
        if new_image != old_image:
            if os.path.exists(old_image):
                os.remove(old_image)
    except:
        pass
```