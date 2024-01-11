---
layout: post
title:  Spiral Matrix
author: bs
date: '2024-01-11 23:10:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

## 원문
Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order`.

## 풀이
1. 이전에 방문한 적이 있는 지점이 나오거나 배열 범위를 벗어나게 될 때까지 진행 방향을 따라 배열의 숫자를 결과 배열에 저장한다.
2. 이전에 방문한 적이 있는 지점이 나오거나 배열 범위를 벗어나게 되었다면 방향을 바꾼다.
3. 1과 2를 반복한다.

## 코드
### Python
```python
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        direction = ((0, 1), (1, 0), (0, -1), (-1, 0))
        row, col = len(matrix), len(matrix[0])
        visited = [[False for i in range(col)] for j in range(row)]
        result = list()
        r, c, d = 0, 0, 0

        while True:
            result.append(matrix[r][c])
            visited[r][c] = True

            nr, nc = r + direction[d][0], c + direction[d][1]

            if nr < 0 or nr >= row or nc < 0 or nc >= col or visited[nr][nc]:
                d = (d + 1) % 4
                nr, nc = r + direction[d][0], c + direction[d][1]
                if not (0 <= nr < row) or not (0 <= nc < col) or visited[nr][nc]:
                    break

            r, c = nr, nc

        return result
```

### Java
```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int[] dr = {0, 1, 0, -1};
        int[] dc = {1, 0, -1, 0};
        int row = matrix.length;
        int col = matrix[0].length;
        boolean[][] visited = new boolean[row][col];
        List<Integer> result = new ArrayList<>();
        int r = 0;
        int c = 0;
        int d = 0;

        while (true) {
            result.add(matrix[r][c]);
            visited[r][c] = true;
            int nr = r + dr[d];
            int nc = c + dc[d];

            if (nr < 0 || nr >= row || nc < 0 || nc >= col || visited[nr][nc]) {
                d = (d + 1) % 4;
                nr = r + dr[d];
                nc = c + dc[d];
                if (!(0 <= nr && nr < row) || !(0 <= nc && nc < col) || visited[nr][nc]) {
                    break;
                }
            }

            r = nr;
            c = nc;
        }

        return result;
    }
}
```