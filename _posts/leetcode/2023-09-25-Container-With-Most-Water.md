---
layout: post
title:  Container With Most Water
author: bs
date: '2023-09-25 20:47:00 +0900'
last_modified_at: '2023-11-16 13:21:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

## 원문
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis from a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.

## 풀이
투포인터.

왼쪽 경계의 인덱스를 `lo`, 오른쪽 경계의 인덱스를 `hi`라고 했을 때 `height[lo]`와 `height[hi]`의 값을 비교해 인덱스 값을 변경한다.<br>
`height[lo]`가 `height[hi]`보다 작으면 `lo`에 1을 더하지만, 그렇지 않은 경우에는 `hi`에서 1을 뺀다.

## 코드
### Python
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        lo, hi = 0, len(height) - 1
        result = 0

        while lo < hi:
            result = max(result, (hi - lo) * min(height[lo], height[hi]))

            if height[lo] < height[hi]:
                lo += 1
            else:
                hi -= 1

        return result
```

### Java
```java
class Solution {
    public int maxArea(int[] height) {
        int lo = 0;
        int hi = height.length - 1;
        int water = 0;

        while (lo < hi) {
            water = Math.max(water, (hi - lo) * Math.min(height[lo], height[hi]));

            if (height[lo] < height[hi]) {
                lo++;
            } else {
                hi--;
            }
        }
        
        return water;
    }
}
```