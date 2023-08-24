---
layout: post
title:  Majority Element
author: bs
date: '2023-08-23 13:24:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_1-1]
---

# [LeetCode 169. Majority Element](https://leetcode.com/problems/majority-element/)

## 원문
Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `[n / 2]` times. You may assume that the majority element always exists in the array.

## 내 생각
- `Python`
  1. `collections` 모듈의 `Counter`와 `Counter`의 `.most_common()` 메서드를 사용한다.
  2. 딕셔너리와 `lambda`를 사용한 정렬을 함께 사용한다.

## 코드
```python
from collections import Counter


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        num_cnt = Counter(nums)
        return num_cnt.most_common(1)[0][0]
```

## 결과
통과

## 딕셔너리를 사용하는 경우?
리스트를 순회하며 숫자가 나타난 횟수를 저장하고, 정렬할 때에는 `sorted` 함수를 사용한다.

```python
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        temp = dict()
        for num in nums:
            if num not in temp:
                temp[num] = 1
            else:
                temp[num] += 1
        result = sorted(temp.items(), key=lambda x: x[1], reverse=True)
        return result[0][0]
```