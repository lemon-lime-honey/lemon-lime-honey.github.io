---
layout: post
title:  Search a 2D Matrix
author: bs
date: '2023-08-28 19:36:00 +0900'
last_modified_at: '2024-01-08 19:01:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

## 원문
You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` *if* `target` *is in* `matrix` *or* `false` *otherwise*.

You must write a solution in `O(log(m * n))` time complexity.

## 풀이
이분 탐색을 이용해 어느 행에 원소가 있는지 찾는다. 그 다음 다시 이분 탐색으로 해당 행의 어느 열에 원소가 있는지 찾는다.<br>
두 번째 이분 탐색에서 원소를 찾지 못하면 `false`, 찾으면 `true`를 반환한다.<br>
이분 탐색을 두 번 하기 때문에 시간 복잡도가 `O(log(m) + log(n)) = O(log(m * n))`이다.

## 코드
### Python
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        r1, r2 = 0, len(matrix) - 1
        c1, c2 = 0, len(matrix[0]) - 1

        while r1 < r2:
            mid_r = (r1 + r2) // 2
            if matrix[mid_r][0] < target:
                if matrix[mid_r][-1] >= target:
                    r2 = mid_r
                    break
                r1 = mid_r + 1
            else: r2 = mid_r

        while c1 < c2:
            mid_c = (c1 + c2) // 2
            if matrix[r2][mid_c] < target:
                c1 = mid_c + 1
            else: c2 = mid_c

        return True if matrix[r2][c2] == target else False
```

### Java
```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int r1 = 0, r2 = matrix.length - 1;
        int c1 = 0, c2 = matrix[0].length - 1;

        while (r1 < r2) {
            int mid_r = (r1 + r2) / 2;
            if (matrix[mid_r][0] < target) {
                if (matrix[mid_r][matrix[mid_r].length - 1] >= target) {
                    r2 = mid_r;
                    break;
                }
                r1 = mid_r + 1;
            } else {
                r2 = mid_r;
            }
        }

        while (c1 < c2) {
            int mid_c = (c1 + c2) / 2;
            if (matrix[r2][mid_c] < target) {
                c1 = mid_c + 1;
            } else {
                c2 = mid_c;
            }
        }

        if (matrix[r2][c2] == target) {
            return true;
        }

        return false;
    }
}
```