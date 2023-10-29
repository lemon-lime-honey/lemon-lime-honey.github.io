---
layout: post
title:  Symmetric Tree
author: bs
date: '2023-10-29 12:21:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

## 원문
Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).

## 풀이
루트 노드부터 시작해 대칭인지 판별한다.<br>
왼쪽 노드의 왼쪽 노드와 오른쪽 노드의 오른쪽 노드, 왼쪽 노드의 오른쪽 노드와 오른쪽 노드의 왼쪽 노드가 같아야 대칭이다.

## 코드
### Python
```python
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def chk(left, right):
            if left is None and right is None:
                return True
            if left is None or right is None:
                return False

            return (
                left.val == right.val and
                chk(left.left, right.right) and
                chk(left.right, right.left)
            )


        return chk(root, root)
```

### Java
```java
class Solution {
    public boolean chk(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null) {
            return false;
        }

        return (
            left.val == right.val &&
            chk(left.left, right.right) &&
            chk(left.right, right.left)
        );
    }

    public boolean isSymmetric(TreeNode root) {
        return chk(root.left, root.right);
    }
}
```