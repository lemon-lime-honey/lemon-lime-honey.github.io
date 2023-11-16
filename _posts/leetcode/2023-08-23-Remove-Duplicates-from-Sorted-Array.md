---
layout: post
title:  Remove Duplicates from Sorted Array
author: bs
date: '2023-08-23 11:15:00 +0900'
last_modified_at: '2023-10-17 17:02:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## 원문
Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the same.<br>
Then return *the number of unique elements in* `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

## 풀이
### Python
1. `set`으로 변환시켜준 후 다시 리스트로 변환하고 정렬해준다.<br>
  ~~: `nums`의 0번째부터 `k - 1`번째 원소를 포함한 리스트가 출력된다.~~<br>
  : `nums[:] = list(set(nums))`
2. 이전 값을 저장할 변수 `before`, 숫자를 입력할 위치의 인덱스를 가리키는 변수 `ref`, 결과에 들어가는 숫자의 개수를 세는 변수 `k`<br>
  리스트를 순회하며 `before`와 다른 값이 나오면 `nums[ref]`를 해당 값으로 바꾸고 `k`에 1을 더한다.<br>
  `before`값을 갱신하고 `ref`에도 1을 더해준다.

#### 코드
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        before = 0
        ref = 0
        k = 0
        for i in range(len(nums)):
            if before != nums[i] or i == 0:
                nums[ref] = nums[i]
                before = nums[i]
                k += 1
                ref += 1
        return k
```

### Java
변수 `idx`를 선언한다. 초기값은 1이다.<br>
`nums`가 감소하지 않는 순서로 정렬이 되어 있으므로, 중복을 제거하려면 한 원소가 그 바로 직전 원소보다 큰지 확인하면 된다.

`nums`를 순회하며 `nums[i]`가 `nums[i + 1]`보다 작으면 `nums[idx]`의 값을 `nums[i + 1]`로 갱신하고 `idx`에 1을 더한다.

#### 코드
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int idx = 1;

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) {
                nums[idx] = nums[i + 1];
                idx++;
            }
        }

        return idx;
    }
}
```