---
layout: post
title:  Summary Ranges
author: bs
date: '2023-09-16 20:27:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 228. Summary Ranges](https://leetcode.com/problems/summary-ranges)

## 원문
You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return *the **smallest sorted** list of ranges that **cover all the numbers in the array exactly***. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`

## 풀이
1. `nums`가 빈 배열이라면 빈 배열을 반환한다.
2. 비어있지 않다면 구간 시작 지점의 값을 저장하기 위한 변수 `start`를 선언한다. 초기값은 `nums[0]`이다.
3. `nums`의 두 번째 원소부터 순회한다.
    1. `i`번째 원소가 `i - 1`번째 원소보다 1 크다면 `continue`
    2. 그렇지 않은 경우
        1. `start`가 `i - 1`번째 원소라면 `start`를 문자열로 변환해 결과 배열에 추가한다.
        2. `start`와 `i - 1`번째 원소가 다르다면 결과 배열에 `{start}->{nums[i - 1]}`을 추가한다.
        3. `start`를 `i`번째 원소로 갱신한다.
4. 순회를 마친 후
    1. `start`가 `nums`의 마지막 원소라면 해당 값을 문자열로 변환해 결과 배열에 추가한다.
    2. `start`가 `nums`의 마지막 원소와 다르다면 결과 배열에 `{start}->{nums[len(nums) - 1]}`을 추가한다.
5. 결과 배열을 반환한다.

## 코드
### Python
```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums: return list()

        result = list()
        start = nums[0]

        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1: continue
            else:
                if start == nums[i - 1]: result.append(str(start))
                else: result.append(f'{start}->{nums[i - 1]}')
                start = nums[i]

        if start == nums[-1]: result.append(str(start))
        else: result.append(f'{start}->{nums[-1]}')

        return result
```