---
layout: post
title:  Remove Duplicates from Sorted Array II
author: bs
date: '2023-08-23 11:28:00 +0900'
last_modified_at: '2023-10-29 12:14:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## 원문
Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` *after placing the final result in the first* `k` *slots of* `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.

## 풀이
[Remove Duplicates from Sorted Array]({% link _posts/leetcode/2023-08-23-Remove-Duplicates-from-Sorted-Array.md %}) 문제에서 통과한 코드를 변형한다.<br>
`before`를 정수 변수로 두는 대신 두 개의 정수를 원소로 가지는 리스트로 만든다. 이때 `before[0]`은 이전 값, `before[1]`은 나온 횟수이다.<br>
`nums`를 순회하며 `before[0]`이 해당 값과 다를 때와 같지만 나온 횟수가 2보다 적을 때로 나누어 다룬다.<br>
그 외의 경우는 `continue`

## 코드
### Python
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        before = [0, 0]
        ref = 0
        k = 0
        for i in range(len(nums)):
            if before[0] != nums[i] or i == 0:
                nums[ref] = nums[i]
                before = [nums[i], 1]
                k += 1
                ref += 1
            elif before[0] == nums[i] and before[1] < 2:
                nums[ref] = nums[i]
                before[1] += 1
                k += 1
                ref += 1
        return k
```

### Java
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int n = nums.length;

        if (n < 3)
            return n;

        int k = 1;
        int i = 1;
        int before = nums[0];
        int cnt = 1;

        while (i < n) {
            if (nums[i] == before) {
                cnt++;
                if (cnt == 3) {
                    while (i < n && nums[i] == before) {
                        i++;
                    }

                    if (i == n)
                        break;

                    before = nums[i];
                    nums[k] = nums[i];
                    cnt = 1;
                    k++;
                    i++;
                } else {
                    nums[k] = nums[i];
                    k++;
                    i++;
                }
            } else {
                nums[k] = nums[i];
                before = nums[i];
                cnt = 1;
                i++;
                k++;
            }
        }

        return k;
    }
}
```