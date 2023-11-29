---
layout: post
title:  Product of Array Except Self
author: bs
date: '2023-09-24 22:06:00 +0900'
last_modified_at: '2023-11-29 15:20:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

## 원문
Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

## 시간초과
당연하다. `O(n)`인 답을 찾아야 하는데 이건 <code>O(n<sup>2</sup>)</code>이다.

아주 단순하게, 묘사한 상황 그대로 작성했다.

### 코드
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1 for i in range(len(nums))]

        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j: continue
                result[j] *= nums[i]

        return result
```

## 도움!
[이 영상](https://www.youtube.com/watch?v=bNvIQI2wAjk)을 참고했다.

1. 모든 원소가 1이고 길이가 `nums`와 같은 배열 `result`를 생성한다.
2. 1번 인덱스부터 `result`를 순회한다.
    - `i`번 원소의 값을 `i - 1`번째 원소 * `nums[i - 1]`로 갱신한다.
    - 이러면 `result`의 `i`번째 값이 `nums`의 `0`번째 부터 `i - 1`번째 값까지의 곱이 된다.
3. 변수 `postfix`를 선언한다. 초기값은 1이다.
4. `len(nums) - 1`번 인덱스부터 `0`번 인덱스까지 `result`를 순회한다.
    1. `i`번 원소의 값에 `postfix`를 곱한다.
    2. `postfix`의 값에 `nums[i]`를 곱한다.
        - 이러면 `postfix`의 값이 `nums`의 `i + 1`번째 값부터 마지막 값까지의 곱이 된다.
        - 따라서 `postfix`를 `result[i]`에 곱하면 `nums[i]`를 제외한 원소의 곱과 같은 값이 된다.
5. `result`를 반환한다.

### 코드
#### Python
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1 for i in range(len(nums))]

        for i in range(1, len(nums)):
            result[i] = result[i - 1] * nums[i - 1]

        before = 1

        for i in range(len(nums) - 1, -1, -1):
            result[i] *= before
            before *= nums[i]

        return result
```

### Java
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];
        result[0] = 1;

        for (int i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        int before = 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            result[i] *= before;
            before *= nums[i];
        }

        return result;
    }
}
```