---
layout: post
title:  Search Insert Position
author: bs
date: '2023-08-28 19:29:00 +0900'
last_modified_at: '2023-11-16 13:09:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

## 원문
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

## 풀이
이분 탐색을 이용해 주어진 배열에 값이 있다면 그 위치, 없다면 들어갈 위치를 찾아 반환한다..<br>
이때 주어진 값이 배열 마지막 원소보다 크면 그냥 배열의 길이를 반환한다.

## 코드
### Python
```python
# bisect 모듈을 사용하지 않은 경우
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target > nums[-1]: return len(nums)

        lo, hi = 0, len(nums) - 1

        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] < target:
                lo = mid + 1
            else:
                hi = mid

        return hi

# bisect를 사용하는 경우
from bisect import bisect_left


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target > nums[-1]: return len(nums)
        return bisect_left(nums, target)
```

### Java
```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int n = nums.length;

        if (nums[n - 1] < target) return n;

        int lo = 0;
        int hi = n - 1;

        while (lo < hi) {
            int mid = (lo + hi) / 2;

            if (nums[mid] < target) {
                lo = mid + 1;
            } else if (nums[mid] > target) {
                hi = mid;
            } else {
                return mid;
            }
        }

        return lo;
    }
}
```