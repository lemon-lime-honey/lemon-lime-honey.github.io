---
layout: post
title:  Longest Consecutive Sequence
author: bs
date: '2023-08-31 21:43:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

## 원문
Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence*.

You must write an algorithm that runs in `O(n)` time.

## 내 생각
(Python)`heapq` 모듈의 `heapify`를 사용해 `nums`를 최소 힙으로 바꿔준다.<br>
0이 세 개 있는 리스트를 만드는데, 첫 번째 원소는 직전 값, 두 번째는 현재 수열의 길이, 세 번째는 수열 길이의 최대값을 나타낸다.

`while`문 안에서 `heappop()` 메서드를 사용해 `nums`의 최소값을 빼낸다.

1. 그 값이 리스트의 첫 번째 원소보다 1 크면 리스트를 갱신한다.
2. 리스트의 첫 번째 원소와 같다면 `contiune`
3. 그 외의 경우 리스트의 첫 번째 원소는 빼낸 값, 두 번째 원소는 1로 갱신한다.

반복문에서 나오면 리스트의 세 번째 원소를 반환한다.

## 코드
```python
import heapq


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        heapq.heapify(nums)
        chk = [0, 0, 0]

        while nums:
            now = heapq.heappop(nums)
            if chk[2] == 0:
                chk = [now, 1, 1]
            else:
                if now == chk[0] + 1:
                    chk[0] = now
                    chk[1] += 1
                    chk[2] = max(chk[2], chk[1])
                elif now == chk[0]: continue
                else:
                    chk[0] = now
                    chk[1] = 1

        return chk[2]
```