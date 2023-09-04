---
layout: post
title:  Find Minimum in Rotated Sorted Array
author: bs
date: '2023-09-04 17:02:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_2-2]
---

# [LeetCode 153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

## 원문
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in `O(log n)` time.

## 내 생각
[Search in Rotated Sorted Array]({% link _posts/leetcode/2023-09-03-Search-in-Rotated-Sorted-Array.md %})에서 힌트를 얻었다.

1. 
1. `nums[mid]`가 `nums[lo]`와 `nums[hi]`보다 크면 오른쪽을 확인해야 한다.
2. `nums[mid]`가 `nums[lo]`와 `nums[hi]`보다 작으면 왼쪽을 확인해야 한다.
3. `nums[mid]`가 `nums[hi]`보다 크면 오른쪽을 확인해야 한다.
4. `nums[mid]`가 `nums[lo]`보다 크면 왼쪽을 확인해야 한다.
5. 그 외의 경우 `nums[mid]`를 반환한다.

## 코드
```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        lo, hi = 0, len(nums) - 1

        while lo < hi:
            mid = (lo + hi) // 2
            if nums[lo] < nums[mid] and nums[hi] < nums[mid]: lo = mid + 1
            elif nums[lo] > nums[mid] and nums[hi] > nums[mid]: hi = mid
            elif nums[mid] > nums[hi]: lo = mid + 1
            elif nums[mid] > nums[lo]: hi = mid
            else: return nums[mid]

        return nums[lo]
```