---
layout: post
title:  Find K Pairs with Smallest Sums
author: bs
date: '2023-09-11 15:56:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_3-2]
---

# [LeetCode 373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

## 원문
You are given two integer arrays `nums1` and `nums2` sorted in **non-decreasing order** and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Return *the* `k` *pairs* <code>(u<sub>1</sub>, v<sub>1</sub>), (u<sub>2</sub>, v<sub>2</sub>), ..., (u<sub>k</sub>, v<sub>k</sub>)</code> *with the smallest sums*.

## 내 생각
힙을 만들고 이중 반복문을 사용해 `nums1`과 `nums2`를 순회한다. 배열의 길이가 `k`일 때까지는 계산한 값(에 -1을 곱한 것)과 두 숫자를 힙에 그냥 넣는다.<br>
그 후로는 힙의 최소값과 계산한 값을 비교하는데, `계산값 x -1`이 최소값보다 크다면 힙에서 최소값을 빼고 계산한 값에 -1을 곱한 것과 두 숫자를 힙에 넣는다.<br>
만약 `계산값 x -1`이 최소값보다 작다면 안쪽 반복문이 끝날 때까지 계산되는 값이 조건에 맞지 않으므로 안쪽 반복문에서 나간다.<br>
배열에서 계산값을 제외한 두 숫자 쌍의 리스트를 반환한다.

## 코드
```python
import heapq


class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        result = list()

        for i in range(min(k, len(nums1))):
            for j in range(min(k, len(nums2))):
                if len(result) < k:
                    heapq.heappush(result, (-(nums1[i] + nums2[j]), [nums1[i], nums2[j]]))
                else:
                    if result[0][0] < -(nums1[i] + nums2[j]):
                        heapq.heappop(result)
                        heapq.heappush(result, (-(nums1[i] + nums2[j]), [nums1[i], nums2[j]]))
                    else: break

        return [coord[1] for coord in result]
```