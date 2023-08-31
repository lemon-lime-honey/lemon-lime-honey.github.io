---
layout: post
title:  Contains Duplicate II
author: bs
date: '2023-08-31 20:20:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

## 원문
Given an integer array `nums` and an integer `k`, return `true` *if there are two **distinct indices*** `i` *and* `j` *in the array such that* `nums[i] == nums[j]` *and* `abs(i - j) <= k`.

## 내 생각
(Python) `nums` 원소의 값을 키, 인덱스 값 리스트를 값으로 가지는 딕셔너리를 만든다.<br>
딕셔너리의 `value`를 순회하며 `value`에 해당하는 인덱스 값 리스트를 정렬한다.<br>
그 리스트가 두 개 이상의 원소를 가지는 경우 리스트를 순회하며 두 값의 차이가 `k` 미만인 경우가 있으면 `True`를 반환한다.<br>
(써놓고 보니 정렬을 하지 않아도 상관 없었겠다.)<br>
순회가 끝난 경우 조건에 맞는 쌍을 찾지 못했다는 의미이므로 `False`를 반환한다.

### 코드
```python
from collections import defaultdict


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        indices = defaultdict(list)

        for index, number in enumerate(nums):
            indices[number].append(index)

        for i in indices.values():
            i.sort()
            if len(i) > 1:
                for j in range(len(i) - 1):
                    if i[j + 1] - i[j] <= k: return True

        return False
```