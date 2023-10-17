---
layout: post
title: Merge Sorted Array
author: bs
date: '2023-08-22 23:37:00 +0900'
last_modified_at: '2023-10-17 16:58:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_1-1]
---

# [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## 원문
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To accomodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

## 풀이
### Python
`nums1`의 `m`번째 인덱스부터의 원소를 `num2`로 바꾼 후 정렬한다.

#### 코드
```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:] = nums2
        nums1.sort()
```

### Java
Discussion 탭에 어떤 유저가 업로드한 움짤의 도움을 받았다.

우선 세 변수를 선언한다. 각각의 초기값은 `m - 1`, `n - 1`, `m + n - 1`이다.<br>
`m - 1`을 초기값으로 가지는 변수 `i` 는 `nums1`에서 살펴볼 원소의 위치를 나타내고, `n - 1`은 `nums2`(`j`), `m + n - 1`(`k`)은 둘을 합친 경우이다.<br>
`j`가 `0`보다 작아지기 전까지 다음을 반복한다.

1. `i`가 0 이상이고 `nums1[i]`가 `nums2[j]`보다 크면 `nums1[k]`를 `nums[1]`로 갱신한다. 그 다음 `k`와 `i`에서 1씩 뺀다.
2. 그 외의 경우 `nums1[k]`를 `nums2[j]`로 갱신한다. 그 다음 `k`와 `j`에서 1씩 뺀다.

#### 코드
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
}
```