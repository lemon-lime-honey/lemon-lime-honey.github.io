---
layout: post
title:  Find Peak Element
author: bs
date: '2023-09-03 14:16:00 +0900'
last_modified_at: '2024-01-08 19:06:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)

## 원문
A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.

## 도움!
[여기](https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/)를 참고했다.

```
start가 end보다 작고, mid 원소를 찾을 때까지 반복문을 순회한다.
가운데 원소가 (가운데 + 1) 원소보다 크면 배열의 감소하는 부분에 위치한다는 의미이므로 피크를 찾기 위해 왼쪽을 보아야 한다.
(end = mid)
가운데 원소가 (가운데 + 1) 원소보다 작으면 배열의 증가하는 부분에 위치한다는 의미이므로 피크를 찾기 위해 오른쪽을 보아야 한다.
(start = mid + 1)
마지막에는 start == end가 되며 가장 큰 숫자를 가리키게 되므로, 피크 원소를 구하기 위해 start 또는 end를 반환한다.
```

## 코드
### Python
```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        lo, hi = 0, len(nums) - 1

        while lo < hi:
            mid = lo + (hi - lo) // 2
            if nums[mid] < nums[mid + 1]:
                lo = mid + 1
            else: hi = mid

        return lo
```

### Java
```java
class Solution {
    public int findPeakElement(int[] nums) {
        int lo = 0, hi = nums.length - 1;

        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] < nums[mid + 1]) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        return lo;
    }
}
```