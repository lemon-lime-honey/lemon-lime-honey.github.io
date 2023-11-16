---
layout: post
title:  Rotate Array
author: bs
date: '2023-08-23 13:24:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 189. Rotate Array](https://leetcode.com/problems/rotate-array/)

## 원문
Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

## 풀이
1. `python`: `deque`의 `rotate`를 사용한다.
2. `python`: list slicing

## 코드
### Python
```python
from collections import deque


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        temp = deque(nums)
        temp.rotate(k)
        nums[:] = list(temp)
```