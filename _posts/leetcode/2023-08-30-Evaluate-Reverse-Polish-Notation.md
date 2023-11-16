---
layout: post
title:  Evaluate Reverse Polish Notation
author: bs
date: '2023-08-30 16:36:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## 원문
You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return *an integer that represents the value of the expression*.

**Note** that:

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bt** integer.

## 풀이
`tokens`를 순회하며 `tokens[i]`가 숫자이면 스택에 넣는다.<br>
아니면 스택의 가장 마지막 두 원소를 `pop`해 `tokens[i]`에 해당하는 연산을 수행한 후 그 값을 스택에 넣는다.

## 코드
### Python
#### `eval()`을 사용한 경우
118ms. 5.88%가 나와서 다시 생각해보니 계산값을 구할 때 `eval()`을 사용하고 캐스팅(두 번!)도 해서 그런게 아닌가 싶더라.

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = list()
        for i in range(len(tokens)):
            if tokens[i].strip('-').isdigit(): stack.append(tokens[i])
            elif tokens[i] in "+-*/":
                second = stack.pop()
                first = stack.pop()
                stack.append(str(int(eval(first + tokens[i] + second))))
        return int(stack.pop())
```

그래서 `eval()`을 사용하지 않고 다시 제출했다.

#### `eval()`을 사용하지 않은 경우
64ms. 96.77%

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = list()
        for i in range(len(tokens)):
            if tokens[i] in "+-*/":
                second = stack.pop()
                first = stack.pop()
                if tokens[i] == '+':
                    stack.append(first + second)
                elif tokens[i] == '-':
                    stack.append(first - second)
                elif tokens[i] == '*':
                    stack.append(first * second)
                elif tokens[i] == '/':
                    stack.append(int(first / second))
            else:
                stack.append(int(tokens[i]))
        return stack.pop()
```

코드가 더 길어지기는 했지만 시간은 훨씬 줄어들었다.