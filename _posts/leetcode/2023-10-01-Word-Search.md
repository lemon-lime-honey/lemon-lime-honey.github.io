---
layout: post
title:  Word Search
author: bs
date: '2023-10-01 18:16:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 79. Word Search](https://leetcode.com/problems/word-search/)

## 원문
Given an `m x n` grid of characters `board` and a string `word`, return `true` *if* `word` *exists in the grid*.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## 풀이
보드를 순회하며 `word[0]`을 발견할 때마다 그 위치부터 백트래킹으로 단어를 찾는다.<br>
단어의 마지막 문자까지 찾으면 `nonlocal` 변수인 `result`의 값을 `True`로 바꿔준다.

## 코드
```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def search(r, c, route, idx):
            nonlocal result
            if len(route) == len(word):
                result = True
                return
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if (0 <= nr < n) and (0 <= nc < m):
                    if not visited[nr][nc] and board[nr][nc] == word[idx + 1]:
                        visited[nr][nc] = True
                        search(nr, nc, route + word[idx + 1], idx + 1)
                        if result: return
                        visited[nr][nc] = False

        n, m = len(board), len(board[0])
        visited = [[False for i in range(m)] for j in range(n)]
        result = False

        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == word[0]:
                    visited[i][j] = True
                    search(i, j, word[0], 0)
                    visited[i][j] = False

        return result
```