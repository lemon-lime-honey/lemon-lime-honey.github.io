---
layout: post
title:  Find Median from Data Stream
author: bs
date: '2023-09-12 09:12:00 +0900'
category: leetcode
tags: [leetcode, hard, 알고리즘]
---

# [LeetCode 295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

## 원문
The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, for `arr = [2, 3, 4]`, the median is `3`.
- For example, for `arr = [2, 3]`, the median is `(2 + 3) / 2 = 2.5`

Implement the MedianFinder class:

- `MedianFinder()` initializes the `MedianFinder` object.
- `void addNum(int num)` add the integer `num` from the data stream to the data structure.
- `double findMedian()` returns the median of all elements so far. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.

## 낯익다
[백준 온라인 저지 1655번 가운데를 말해요](https://www.acmicpc.net/problem/1655)

## 풀이
두 개의 힙을 사용한다. 하나는 최소 힙, 나머지는 최대 힙.<br>
최대 힙은 배열의 가장 작은 값부터 중간 값까지, 최소 힙은 나머지 값을 가지게 된다.

- `addNum`
    1. 두 힙의 크기가 같을 때
        1. 추가되는 값을 최대 힙에 넣으면 `findMedian`을 호출할 때 최대 힙에서 중간 값을 구해 반환한다.
        2. 추가되는 값을 최소 힙에 넣으면 `findMedian`을 호출할 때 최소 힙에서 중간 값을 구해 반환한다.
    2. 두 힙의 크기가 다를 때
        1. 최소 힙과 최대 힙의 0번째 값을 비교한다.
        2. 최소 힙에 있는 값이 최대 힙에 있는 값보다 작으면 두 값을 빼내 서로 다른 쪽에 넣어준다.
- `findMedian`
    1. 두 힙의 크기가 같을 때 최소 힙과 최대 힙의 0번째 값의 평균을 반환한다.
    2. 두 힙의 크기가 다를 때 `addNum`에서 힙의 크기가 같을 때 추가되는 값을 어디에 넣었냐에 따라 값을 반환한다.

## 코드
### Python
```python
import heapq


class MedianFinder:
    def __init__(self):
        self.one = list()
        self.two = list()


    def addNum(self, num: int) -> None:
        if len(self.one) == len(self.two):
            heapq.heappush(self.one, (-num, num))
        else:
            heapq.heappush(self.two, (num, num))
        if self.two and self.two[0][1] < self.one[0][1]:
            n1 = heapq.heappop(self.one)[1]
            n2 = heapq.heappop(self.two)[1]
            heapq.heappush(self.one, (-n2, n2))
            heapq.heappush(self.two, (n1, n1))


    def findMedian(self) -> float:
        if len(self.one) == len(self.two):
            return (self.one[0][1] + self.two[0][1]) / 2
        return self.one[0][1]
```