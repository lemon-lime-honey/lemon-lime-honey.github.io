---
layout: post
title:  Happy Number
author: bs
date: '2023-08-31 21:34:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 202. Happy Number](https://leetcode.com/problems/happy-number/)

## 원문
Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process.

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessley in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return `true` *if* `n` *is a happy number, and* `false` *if not*.

## 내 생각
`n`이 있는 세트를 하나 만든다.<br>
`while`문 안에서 또 `while`문을 도는데, 내부에 있는 반복문으로는 각 자리수 숫자의 제곱의 합을 구한다.<br>
내부 반복문을 통해 구한 값이 1이면 `True`를 반환한다.<br>
그 값이 처음에 만든 세트 안에 이미 있다면 무한 루프를 돌게 되는 경우이므로 `False`를 반환한다.<br>
둘 모두가 아닌 경우 그 값을 세트에 추가한다.

## 코드
```python
class Solution:
    def isHappy(self, n: int) -> bool:
        seen = {n}

        while True:
            res = 0
            while n:
                res += (n % 10) ** 2
                n //= 10
            if res == 1: return True
            if res in seen: return False

            n = res
            seen.add(n)
```