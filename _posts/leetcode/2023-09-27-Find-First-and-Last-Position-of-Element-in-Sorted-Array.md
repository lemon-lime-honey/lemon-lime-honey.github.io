---
layout: post
title:  Find First and Last Position of Element in Sorted Array
author: bs
date: '2023-09-27 19:39:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

## 원문
Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

## 풀이
Python의 `bisect` 모듈에 포함된 `bisect_left`, `bisect_right` 함수를 사용해 구간의 시작점과 끝점의 인덱스(정확히는 시작점의 인덱스와 끝점의 인덱스 + 1)를 구한다.<br>
시작점의 인덱스가 끝점의 인덱스보다 크면 `[-1, -1]`을 반환하고, 그렇지 않다면 시작점과 끝점의 인덱스를 원소로 가지는 리스트를 반환한다.

### 코드
```python
from bisect import bisect_left, bisect_right


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lo = bisect_left(nums, target)
        hi = bisect_right(nums, target)

        return [-1, -1] if lo > hi - 1 else [lo, hi - 1]
```

## bisect 모듈을 사용하지 않는 풀이
`Discussion` 탭의 도움을 받았다.

1. 이분 탐색으로 `target`과 같은 값을 가지는 원소를 찾는다.
2. 존재한다면 그 지점부터 시작해 양쪽으로 `target`과 같은 값을 가지는 원소 중 1에서 구한 지점과 가장 멀리 있는 원소들의 인덱스를 구하고, 그 인덱스들을 원소로 가지는 배열을 반환한다.
3. 존재하지 않는다면 `[-1, -1]`을 반환한다.

### 코드
```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lo, hi = 0, len(nums) - 1

        while lo <= hi:
            mid = (lo + hi) // 2

            if nums[mid] == target:
                start = end = mid

                while start > 0 and nums[start - 1] == target:
                    start -= 1

                while end < len(nums) - 1 and nums[end + 1] == target:
                    end += 1

                return [start, end]

            elif nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid - 1

        return [-1, -1]
```