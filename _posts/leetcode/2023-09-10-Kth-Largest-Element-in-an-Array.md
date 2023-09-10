---
layout: post
title:  Kth Largest Element in an Array
author: bs
date: '2023-09-10 20:00:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_3-2]
---

# [LeetCode 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## 원문
Given an integer array `nums` and an integer `k`, return *the* <code>k<sup>th</sup></code> *largest element in the array*.

Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.

Can you solve it without sorting?

## 내 생각
최대 힙에 배열 속 숫자를 넣는다. 그 다음 힙에서 최대값을 빼는 것을 반복해 `k`번째로 큰 수를 구한다.

## 코드
```python
import heapq


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        result = list()

        for num in nums:
            heapq.heappush(result, -num)

        for i in range(k):
            res = heapq.heappop(result)

        return -res
```