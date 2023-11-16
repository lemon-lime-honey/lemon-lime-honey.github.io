---
layout: post
title:  Minimum Size Subarray Sum
author: bs
date: '2023-08-27 21:45:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---


# [LeetCode 209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

## 원문
Given an array of positive integers `nums` and a positive integer `target`, return *the **minimal length** of a subarray whose sum is greater than or equal to* `target`. If there is no such subarray, return `0` instead.

## 내 생각
누적합을 사용해보자<br>
:arrow_right: 기본 테스트 케이스에서 실패! 내 기억이 맞다면 시간초과

## 도움!
[이 영상](https://www.youtube.com/watch?v=aYqYMIqZx5s)을 참고했다.

1. subarray의 시작 지점을 저장하기 위한 변수 `lo`, subarray의 합을 저장하기 위한 변수 `add`, 길이를 저장하기 위한 변수 `result`를 선언한다.<br>
    `lo`와 `add`의 초기값은 `0`, `result`의 초기값은 `1,000,000,000`으로 두었다.
2. `nums`를 순회한다.
    1. `nums[i]`를 `add`에 더한다.
    2. `add`의 값이 `target` 이상인 경우 다음을 반복한다.
        1. `result`의 값을 `result`와 현재 subarray의 길이(`i - lo + 1`) 중 중 더 작은 값으로 갱신한다.
        2. `add`에서 subarray의 가장 앞에 있는 원소의 값(`nums[lo]`)을 뺀다.
        3. `lo`에 1을 더한다.
3. `result`의 값이 변하지 않은 경우, 즉 초기값인 경우 `0`을, 그렇지 않은 경우 `result`를 반환한다.

## 코드
### Python
```python
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        lo, add = 0, 0
        result = int(1e9)

        for i in range(len(nums)):
            add += nums[i]
            while add >= target:
                result = min(result, i - lo + 1)
                add -= nums[lo]
                lo += 1

        return 0 if result == int(1e9) else result
```