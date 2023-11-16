---
layout: post
title: Remove Element
author: bs
date: '2023-08-23 10:50:00 +0900'
last_modified_at: '2023-10-11 18:21:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 27. Remove Element](https://leetcode.com/problems/remove-element/)

## 원문
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return *the number of elements* in `nums` *which are not equal to* `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

## 풀이
### Python
`nums`를 순회하며 `val`과 값이 같은 원소가 나오면 제거한다.<br>
`k`는 `nums`의 초기 길이에서 제거한 횟수를 뺸 값과 같다.<br>
`list`의 크기가 변하므로 `k`는 연산이 모두 끝난 후의 `nums`의 길이이다.

#### 코드
```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        ref = 0
        while ref < len(nums):
            if nums[ref] == val:
                nums.pop(ref)
            else: ref += 1
        return len(nums)
```

### Java
1. 정수 `k`를 선언한다. 값은 0으로 초기화해준다.
2. `nums`를 순회하며 `val`과 값이 같은 원소가 나오면 넘어간다.
3. 다른 값이 나오면 이때 인덱스를 `i`라고 했을 때 `nums[k]`를 `nums[i]`로 바꾸고, `k`에 1을 더한다.
4. 순회가 끝나면 `k`를 반환한다.

#### 코드
```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int idx = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[idx] = nums[i];
                idx++;
            }
        }

        return idx;
    }
}
```