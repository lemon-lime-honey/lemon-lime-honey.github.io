---
layout: post
title:  Number of Islands
author: bs
date: '2023-10-03 19:57:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## 원문
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s(land) and `'0'`s(water), return *the number of islands*.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## 풀이
`grid`를 순회하며 `'1'`이 나올 때마다 그 지점이 이미 방문한 지점이 아니라면 BFS 또는 DFS로 인접한 다른 `'1'`이 있는 지점들을 순회하고 방문처리한다.<br>
인접 지점 방문이 끝나면 섬의 수를 저장하는 변수에 1을 더한다.

## 코드
```python
from collections import deque


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dr, dc = (0, 0, 1, -1), (1, -1, 0, 0)
        n, m = len(grid), len(grid[0])
        visited = [[False for i in range(m)] for j in range(n)]
        que = deque()
        result = 0

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1' and not visited[i][j]:
                    visited[i][j] = True
                    que.append((i, j))

                    while que:
                        r, c = que.popleft()

                        for k in range(4):
                            nr, nc = r + dr[k], c + dc[k]
                            if (0 <= nr < n and
                                0 <= nc < m and
                                not visited[nr][nc] and
                                grid[nr][nc] == '1'
                                ):
                                visited[nr][nc] = True
                                que.append((nr, nc))

                    result += 1

        return result
```