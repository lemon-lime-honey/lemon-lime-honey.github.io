---
layout: post
title:  Valid Parentheses
author: bs
date: '2023-09-01 20:33:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## 원문
Given a string `s` containing just the characters `'('`, `')'`, `'{'`,`'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## 풀이
1. 문자열을 순회한다.
2. 문자가 여는 괄호인 경우 스택에 넣는다.
3. 문자가 닫는 괄호인 경우
    1. 스택이 비어 있으면 `False`를 반환한다.
    2. 스택의 마지막 원소가 짝이 맞는 여는 괄호가 아니면 `False`를 반환한다.
    3. 맞으면 `.pop()`
4. 순회가 끝났을 때 스택이 비어있지 않으면 `False`를 반환한다.
5. 비어있으면 `True`를 반환한다.

## 코드
### Python
```python
class Solution:
    def isValid(self, s: str) -> bool:
        couple = {')': '(', '}': '{', ']': '['}
        stack = list()
        for element in s:
            if element in '({[':
                stack.append(element)
            elif not stack: break
            else:
                if stack[-1] != couple[element]: break
                stack.pop()
        else:
            if stack: return False
            return True
        return False
```