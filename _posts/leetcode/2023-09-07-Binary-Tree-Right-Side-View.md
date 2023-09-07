---
layout: post
title:  Binary Tree Right Side View
author: bs
date: '2023-09-07 21:12:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_3-1]
---

# [LeetCode 199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view)

## 원문
Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the *values of the nodes you can see ordered from top to bottom*.

## 내 생각
(Python)결과 리스트와 깊이를 나타낼 변수 하나를 만들고 노드의 오른쪽부터 확인한다.<br>
확인하는 노드의 깊이와 결과 리스트의 길이를 비교해서 리스트에 해당 깊이에 해당하는 값이 없으면 노드의 값을 추가해준다.<br>
이미 값이 들어가 있으면 무시하고 다음으로 넘어간다.

### 코드
```python
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        def view(node):
            if not node: return
            nonlocal result, depth
            depth += 1
            if depth == len(result) + 1:
                result.append(node.val)
            view(node.right)
            view(node.left)
            depth -= 1


        if not root: return list()
        result = [root.val]
        depth = 0
        view(root)
        return result
```

## BFS
[이 영상](https://www.youtube.com/watch?v=d4zLyf32e3I)을 참고했다.

1. 큐에 `root`를 추가한다.
2. 큐가 비어있지 않은 동안
    1. 오른쪽 노드를 저장할 변수 `right`를 `None`으로 초기화한다.
    2. 현재 단계 큐의 길이를 변수 `length`에 저장한다.
    3. `length`만큼 다음을 반복한다.
        1. 큐의 앞에 있는 노드를 빼내고
        2. 노드가 `None`이 아니면
        3. `right`에 노드를 저장한다.
        4. 큐에 현재 노드의 왼쪽 노드를 저장한다.
        5. 큐에 현재 노드의 오른쪽 노드를 저장한다.
    4. `right`이 `None`이 아니라면 결과 리스트에 `right.val`을 추가한다.
3. 반복문에서 나오면 결과 리스트를 반환한다.

내부 반복문에서 `right`가 가리키는 노드가 루프를 돌 때마다 왼쪽에서 오른쪽에 있는 노드로 바뀌므로 반복문을 나왔을 때 `right`는 그 레벨에 있는 노드 중 가장 오른쪽에 있는 노드가 된다.<br>
큐에 노드를 추가할 때에도 왼쪽에 있는 노드의 왼쪽 자식부터 추가하기 때문에 그 다음 레벨을 순회할 때에도 `right`가 가리키는 노드가 결국 가장 오른쪽에 있는 노드가 되는 규칙이 유지된다.

### 코드
```python
from collections import deque


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        result = list()
        que = deque([root])

        while que:
            right = None
            length = len(que)

            for i in range(length):
                node = que.popleft()
                if node:
                    right = node
                    que.append(node.left)
                    que.append(node.right)

            if right: result.append(right.val)

        return result
```