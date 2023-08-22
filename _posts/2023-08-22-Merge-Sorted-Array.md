---
layout: post
title: Merge Sorted Array
author: bs
permalink: leetcode/:title
date: '2022-08-22 23:37:00 +0900'
last_modified_at: '2022-08-23 00:02:00 +0900'
category: leetcode
tags: [leetcode, 알고리즘, pre-ob-be_1-1]
---

# [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## 원문
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To accomodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

## 내 생각
`nums1`의 `m`번째 인덱스부터의 원소를 `num2`로 바꾼 후 `.sort()` 메서드로 정렬한다.

## 코드
```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:] = nums2
        nums1.sort()
```

## 결과?
통과