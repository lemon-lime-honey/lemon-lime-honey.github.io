---
layout: post
title:  Minimum Path Sum
author: bs
date: '2023-11-30 17:38:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

## 원문
Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

**Note**: You can only move either down or right at any point in time.

## 풀이
우선 0번째 열을 순회하며 `grid[i][0]`에 `grid[i - 1][0]`을 더한다. 이렇게 하면 `(0, 0)`에서 아래로만 이동했을 때의 최소 path sum을 구할 수 있다.<br>
비슷하게 0번째 행을 순회하며 `grid[0][i]`에 `grid[0][i - 1]`을 더한다.<br>
그 다음에는 이중 for문을 돌며 path sum을 구한다. 이때 행과 열의 순회 시작은 0이 아니라 1이다.

## 코드
### Python
```python
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        for i in range(1, m):
            grid[i][0] += grid[i - 1][0]

        for i in range(1, n):
            grid[0][i] += grid[0][i - 1]

        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])

        return grid[-1][-1]
```

### Java
```java
class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        for (int i = 1; i < m; i++) {
            grid[i][0] += grid[i - 1][0];
        }

        for (int i = 1; i < n; i++) {
            grid[0][i] += grid[0][i - 1];
        }


        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            }
        }

        return grid[m - 1][n - 1];
    }
}
```