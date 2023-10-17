---
layout: post
title:  Best Time to Buy and Sell Stock
author: bs
date: '2023-08-23 13:49:00 +0900'
last_modified_at: '2023-10-17 17:05:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_1-1]
---

# [LeetCode 121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## 원문
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>`th`</sup> day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

## 풀이
`SWEA`의 백만장자 프로젝트 문제가 떠오르는 문제.

`prices`의 마지막부터 순회하며 최대 이익을 갱신한다.

## 코드
### Python
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_cost = prices[-1]
        result = 0
        for i in range(len(prices) - 1, -1, -1):
            if prices[i] < max_cost:
                result = max(result, max_cost - prices[i])
            if prices[i] > max_cost:
                max_cost = prices[i]
        return result
```

### Java
```python
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int max = prices[n - 1];
        int result = 0;

        for (int i = n - 1; i > -1; i--) {
            if (prices[i] < max) {
                result = Math.max(result, max - prices[i]);
            } else {
                max = prices[i];
            }
        }

        return result;
    }
}
```