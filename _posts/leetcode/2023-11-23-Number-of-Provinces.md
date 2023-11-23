---
layout: post
title:  Number of Provinces
author: bs
date: '2023-11-23 15:01:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

## 원문
There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the <code>i<sup>th</sup></code> city and the <code>j<sup>th</sup></code> city are directly connected, and `isConnected[i][j] = 0` otherwise.

## 풀이
최소 스패닝 트리 문제.

도시를 순회하며 도시와 도시 사이가 직접 연결되어 있다면 `find` 연산으로 두 도시가 연결되어 있는지 확인하고, 그렇지 않다면 `union`으로 연결시켜준다.<br>
순회가 끝나면 다시 도시를 순회하며 `find`를 사용해 연결된 도시 그룹의 수를 구한다.

## 코드
### Python
```python
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        def find(p):
            if city[p] != p:
                city[p] = find(city[p])
            return city[p]


        def union(p, q):
            p, q = find(p), find(q)
            if p == q: return
            if p < q: city[q] = p
            else: city[p] = q


        n = len(isConnected)
        city = [i for i in range(n)]
        result = set()

        for i in range(n):
            for j in range(n):
                if i != j and isConnected[i][j] == 1:
                    a, b = find(i), find(j)
                    if a != b: union(a, b)

        for i in range(n):
            find(i)
            result.add(city[i])

        return len(result)
```

### Java
```java
class Solution {
    int[] city;

    private int find(int p) {
        if (city[p] != p) {
            city[p] = find(city[p]);
        }
        return city[p];
    }

    private void union(int p, int q) {
        p = find(p);
        q = find(q);
        if (p == q) {
            return;
        }
        if (p < q) {
            city[q] = p;
        } else {
            city[p] = q;
        }
    }

    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        city = new int[n];

        for (int i = 0; i < n; i++) {
            city[i] = i;
        }

        Set<Integer> result = new HashSet<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i != j && isConnected[i][j] == 1) {
                    int a = find(i);
                    int b = find(j);
                    if (a != b) {
                        union(a, b);
                    }
                }
            }
        }

        for (int i = 0; i < n; i++) {
            find(i);
            result.add(city[i]);
        }

        return result.size();
    }
}
```