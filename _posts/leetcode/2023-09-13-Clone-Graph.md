---
layout: post
title:  Clone Graph
author: bs
date: '2023-09-13 09:12:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_4-1]
---

# [LeetCode 133. Clone Graph](https://leetcode.com/problems/clone-graph/)

## 원문
Given a reference of a node in a **connected** undirected graph.

Return a **deep copy** (clone) of the graph.

Each node in the graph contains a value (`int`) and a list(`List[Node]`) of its neighbors.

```java
class Node {
    public int val;
    public List<Node> neighbors;
}
```

**Test case format**:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.

**An adjacency list** is a collection of unordered **lists** used to represent a finite graph. Each list describes the set of neighbors of a note in the graph.

The given node will always be the first node with `val = 1`. You must return the **copy of the given node** as a reference to the cloned graph.

## 내 생각
1. 방문 처리 및 복제 노드 기록 용으로 딕셔너리를 하나 생성한다.
2. 먼저 입력받은 노드를 복제하고 큐에 넣는다.
3. BFS로 그래프를 순회한다.
    1. 노드를 큐에서 하나 뽑는다.
    2. 노드의 이웃 노드를 순회한다.
        1. 노드 기록 딕셔너리에 이웃 노드가 없다면
            1. 노드를 새로 생성한다.
            2. 딕셔너리에 생성한 노드를 추가한다.
            3. 이웃 노드 리스트에 생성한 노드를 추가한다.
            4. 큐에 이웃 노드를 추가한다.
        2. 노드 기록 딕셔너리에 이웃 노드가 있다면
            1. 해당 노드를 찾는다.
            2. 찾은 노드를 노드의 이웃 노드 리스트에 추가한다.
4. 순회가 끝나면 입력 받은 노드와 같은 값을 가진 복제 노드를 반환한다. 

## 코드
```python
from collections import deque
from typing import Optional


class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node: return None

        nodeDict = dict()
        clone = Node(val=node.val)
        nodeDict[clone.val] = clone
        que = deque([node])

        while que:
            chk = que.popleft()

            for nb in chk.neighbors:
                if nb.val not in nodeDict:
                    new = Node(val=nb.val)
                    nodeDict[nb.val] = new
                    nodeDict[chk.val].neighbors.append(new)
                    que.append(nb)
                else:
                    target = nodeDict[nb.val]
                    nodeDict[chk.val].neighbors.append(target)

        return nodeDict[node.val]
```