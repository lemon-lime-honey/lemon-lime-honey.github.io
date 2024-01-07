---
layout: post
title:  Search in Rotated Sorted Array
author: bs
date: '2023-09-03 19:32:00 +0900'
last_modified_at: '2024-01-07 17:51:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)

## 원문
There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return *the index of* `target` *if it is in* `nums`, *or* `-1` *if it is not in* `nums`.

You must write an algorithms with `O(log n)` runtime complexity.

## 기껏 풀었는데 누더기가 되었다
이분 탐색으로 회전시킨 정도를 먼저 구해 회전하기 전의 원래 배열을 가지고 또 이분 탐색을 이용해 `target`을 찾는다.

실행 후 문제가 생겼을 때 땜질을 하듯이 문제를 해결했더니 코드가 퀼트가 되었다.

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            return 0 if nums[0] == target else -1

        lo, hi = 0, len(nums) - 1

        while lo < hi:
            mid = lo + (hi - lo) // 2

            if nums[mid] < nums[hi]:
                hi = mid
            else:
                lo = mid + 1

        pivot = lo
        original = nums[pivot:] + nums[:pivot]
        lo, hi = 0, len(original) - 1

        while lo < hi:
            mid = lo + (hi - lo) // 2

            if original[mid] == target:
                if mid + pivot >= len(nums):
                    return mid + pivot - len(nums)
                else: return mid + pivot
            elif original[mid] < target:
                lo = mid + 1
            else:
                hi = mid

        if original[lo] == target:
            if lo + pivot >= len(nums): return lo + pivot - len(nums)
            else: return lo + pivot
        return -1
```

## 좀 더 깔끔한 방법?
[이 영상](https://www.youtube.com/watch?v=U8XENwh8Oy8)을 참고했다.<br>
얼마나 회전했는가를 굳이 찾을 필요도 없었다.

주어진 배열은 원래 오름차순으로 정렬되어 있다 회전한 상태다. 즉, 배열의 시작부터는 오름차순으로 증가하다 어느 지점부터 값이 작아지더니 다시 그 값부터 오름차순으로 증가하고, 마지막 원소와 첫 번째 원소를 두고 보면 첫 번째 원소가 더 크다.

그러므로
1. 목표값이 중간 지점 값과 같을 때:arrow_right:중간 지점 인덱스 반환
2. 시작 지점 값이 중간 지점 값보다 작거나 같을 때
    1. 배열의 중간 지점 값이 목표값보다 크거나 배열의 시작 지점 값이 목표값보다 작으면<br>
        :arrow_right:오른쪽을 확인해야 한다.
    2. 그렇지 않으면:arrow_right:왼쪽을 확인해야 한다.
3. 시작 지점 값이 중간 지점 값보다 클 때
    1. 중간 지점 값이 목표값보다 크거나 마지막 지점 값이 목표값보다 작으면<br>
        :arrow_right:왼쪽을 확인해야 한다.
    2. 그렇지 않으면:arrow_right:오른쪽을 확인해야 한다.

### 코드
#### Python
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums) - 1

        while lo <= hi:
            mid = (lo + hi) // 2

            if target == nums[mid]:
                return mid

            if nums[lo] <= nums[mid]:
                if target > nums[mid] or target < nums[lo]:
                    lo = mid + 1
                else:
                    hi = mid - 1
            else:
                if target < nums[mid] or target > nums[hi]:
                    hi = mid - 1
                else:
                    lo = mid + 1

        return -1
```

#### Java
```java
class Solution {
    public int search(int[] nums, int target) {
        int lo = 0, hi = nums.length - 1;

        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            if (nums[lo] <= nums[mid]) {
                if (target > nums[mid] || target < nums[lo]) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[hi]) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            }
        }

        return -1;
    }
}
```