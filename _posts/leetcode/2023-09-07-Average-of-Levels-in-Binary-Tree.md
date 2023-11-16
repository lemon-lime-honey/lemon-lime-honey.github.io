---
layout: post
title:  Average of Levels in Binary Tree
author: bs
date: '2023-09-07 21:15:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree)

## 원문
Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*. Answers within <code>10<sup>-5</sup></code> of the actual answer will be accepted.

## 풀이
BFS로 탐색하며 각 레벨에 들어가는 값끼리 같은 배열에 들어가게 한다.<br>
탐색이 끝난 후 레벨 별로 값을 모아놓은 배열에서 평균을 구한다.

**방문처리**: 파이썬의 경우 `hasattr` 함수를 사용하면 클래스 인스턴스에 속성이 있는지를 판별할 수 있다.

## 코드
### Python
```python
from collections import deque
from statistics import mean


class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        que = deque([(root, 0)])
        total = [[root.val]]
        root.visited = True

        while que:
            now, depth = que.popleft()

            if now.left and not hasattr(now.left, 'visited'):
                now.left.visited = True
                que.append((now.left, depth + 1))

                if len(total) == depth + 1:
                    total.append([now.left.val])
                else:
                    total[depth + 1].append(now.left.val)

            if now.right and not hasattr(now.right, 'visited'):
                now.right.visited = True
                que.append((now.right, depth + 1))

                if len(total) == depth + 1:
                    total.append([now.right.val])
                else:
                    total[depth + 1].append(now.right.val)


        result = [0.0 for i in range(len(total))]

        for i in range(len(total)):
            result[i] = mean(total[i])

        return result
```