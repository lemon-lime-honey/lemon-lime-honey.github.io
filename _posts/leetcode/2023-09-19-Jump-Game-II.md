---
layout: post
title:  Jump Game II
author: bs
date: '2023-09-19 19:32:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)

## 원문
You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return *the minimum number of jumps to reach* `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

## 풀이
1. 이동 횟수를 저장하기 위한 리스트 `dp`를 생성한다. 길이는 `nums`와 같고, 각 원소는 `int(1e9)`로 초기화한다.
2. `nums`의 마지막부터 순회한다. 이때의 인덱스를 `i`라 하면 반복문 안에서 `i`부터 `nums`의 마지막까지 순회한다.
3. `nums[i] + i`가 안쪽 반복문의 인덱스 `j`보다 크거나 같으면서 `dp[i]`가 `dp[j] + 1`보다 크다면 `dp[i]`를 `dp[j] + 1`로 갱신한다.
4. 바깥 반복문까지 순회가 모두 끝나면 `dp[0]`을 반환한다.

### 코드
```python
class Solution:
    def jump(self, nums: List[int]) -> int:
        dp = [int(1e9) for i in range(len(nums))]
        dp[-1] = 0

        for i in range(len(nums) - 1, -1, -1):
            for j in range(i, len(nums)):
                if nums[i] + i >= j and dp[i] > dp[j] + 1:
                    dp[i] = dp[j] + 1

        return dp[0]
```

## 다른 풀이
기존 풀이가 너무 느려(14782ms) `solutions`탭을 보니 탐욕법 풀이가 있었다.

1. 우선 최대로 접근할 수 있는 위치를 저장하기 위한 변수 `reach`, 이동 횟수를 저장하기 위한 변수 `cnt`, 도달한 인덱스 중 가장 큰 값을 나타내는 `last`를 선언한다. 초기값은 모두 0이다.
2. `len(nums) - 1`번째 원소까지 순회한다. 이때 인덱스는 `i`로 표현한다.
    1. `reach`를 `reach`와 `nums[i] + i` 중 더 큰 값으로 갱신한다.
    2. `i`가 `last`와 같다면 `last`를 `reach`로 갱신하고, `cnt`에 1을 더해준다.
3. 순회가 끝나면 `cnt`를 반환한다.

122ms

### 코드
```python
class Solution:
    def jump(self, nums: List[int]) -> int:
        reach, cnt, last = 0, 0, 0

        for i in range(len(nums) - 1):
            reach = max(reach, i + nums[i])

            if i == last:
                last = reach
                cnt += 1

        return cnt
```