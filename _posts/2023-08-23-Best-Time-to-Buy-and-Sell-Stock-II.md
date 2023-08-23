---
layout: post
title:  Best Time to Buy and Sell Stock II
author: bs
date: '2023-08-23 20:18:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_1-1]
---

# [LeetCode 122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

## 원문
You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>`th`</sup> day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it then immediately sell it on the **same day**.

Find and return *the **maximum** profit* you can achieve.

## 내 생각
`i`일에 사서 `j`일에 팔 때의 수익을 2차원 그래프로 나타내보고 거기서 규칙을 찾아보자.<br>
: 장렬히 실패

## 도움!
고민 끝에 `Discussion` 섹션을 눌렀는데 어떤 분이 아주 친절하게도 적절한 힌트를 주셨더라.

```
We want to buy all the stocks when the line is going up. And want to ignore all the lines when the line is going down.
(생략)
```

이 말대로 상승하는 경우만 더했다.

## 코드
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(len(prices) - 1):
            if prices[i] < prices[i + 1]:
                profit += prices[i + 1] - prices[i]
        return profit
```