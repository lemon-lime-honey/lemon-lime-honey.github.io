---
layout: post
title:  Kth Smallest Element in a BST
author: bs
date: '2023-09-06 09:32:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

## 원문
Given the `root` of a binary search tree, and an integer `k`, return *the* <code>k<sup>th</sup></code> *smallest value (**1-indexed**) of all the values of the nodes in the tree*.

## 중위 순회
이진 탐색 트리에서 중위 순회를 하면 정렬된 순서로 노드에 방문하는 셈이기 때문에 중위 순회를 한다.

### 코드
### Python
```python
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        global result, cnt
        result, cnt = 0, 0
        self.search(root, k)
        return result


    def search(self, node: Optional[TreeNode], k: int):
        if node is None: return

        global result, cnt
        self.search(node.left, k)
        cnt += 1
        if cnt == k: result = node.val
        self.search(node.right, k)
```

## 다른 방법?
문제 상단의 `Solutions` 탭을 [참고](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/2733644/python-easy-recursive-solution-o-n-beats-96-85/)하였다.<br>
중위 순회를 한다는 발상은 같지만 중위 순회를 통해 정렬된 리스트 자체를 구해 거기서 `k`번째 원소를 반환했다.

### 코드
### Python
```python
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        def plainList(root):
            if root is None: return list()
            return plainList(root.left) + [root.val] + plainList(root.right)


        result = plainList(root)
        return result[k - 1]
```