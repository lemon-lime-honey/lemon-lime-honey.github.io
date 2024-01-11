---
layout: post
title:  Minimum Absolute Difference in BST
author: bs
date: '2023-09-05 21:38:00 +0900'
last_modified_at: '2024-01-11 23:03:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

## 원문
Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.

## 풀이
BST는 모든 노드에서 왼쪽 하위 노드의 값은 그 노드의 값보다 작고, 오른쪽 하위 노드의 값은 그 노드의 값보다 크다.<br>
따라서 정렬된 상태라고 봐도 무방하므로 각 노드의 값 사이의 차이의 최소를 구하려면 인접한 노드 사이의 값 차이만 비교하면 된다.

## 코드
### Python
```python
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        global before, result
        before, result = None, int(1e9)
        self.calculate(root)
        return result
    

    def calculate(self, node: Optional[TreeNode]):
        if node is None: return
        global before, result

        self.calculate(node.left)
        if before:
            result = min(result, node.val - before.val)
        before = node
        self.calculate(node.right)
```

### Java
```java
class Solution {
    private int result = Integer.MAX_VALUE;
    private TreeNode before = null;

    private void calculate(TreeNode node) {
        if (node == null) {
            return;
        }
        calculate(node.left);
        if (before != null) {
            result = Math.min(result, node.val - before.val);
        }
        before = node;
        calculate(node.right);
    }

    public int getMinimumDifference(TreeNode root) {
        calculate(root);
        return result;
    }
}
```