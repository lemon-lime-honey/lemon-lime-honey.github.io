---
layout: post
title:  Copy List with Random Pointer
author: bs
date: '2023-10-02 19:07:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/)

## 원문
A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a **deep copy** of the list. The deep copy should consist of exactly `n` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. **None of the pointers in the new list should point to nodes in the original list**.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

Return *the head of the copied linked list*.

The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:

- `val`: an integer representing `Node.val`
- `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.

Your code will **only** be given the `head` of the original linked list.

## 풀이
랜덤 노드를 어떻게 해야할지 걱정했는데 걱정할 필요가 없었다.<br>
원본 연결 리스트의 노드에 대응하는 새 연결 리스트의 노드를 모아놓은 딕셔너리의 키를 노드가 가리키는 값이 아니라 원본 노드 자체로, 딕셔너리의 값은 새 노드로 지정했다.<br>
원본 노드를 순회하며 `random`이 가리키는 노드가 있다면 그 노드가 딕셔너리에 있는지 확인하고, 있다면 대응되는 노드를 새 노드의 `random`으로 지정한다.<br>
없다면 노드를 생성하고 딕셔너리에 노드 쌍을 저장한다.

## 코드
```python
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head: return

        nodeDict = dict()
        result = Node(x=head.val)
        node = result

        nodeDict[head] = result

        while head:
            if head.next and head.next not in nodeDict:
                new = Node(x=head.next.val)
                nodeDict[head.next] = new
                node.next = new
            elif head.next and head.next in nodeDict:
                node.next = nodeDict[head.next]

            if head.random and head.random not in nodeDict:
                new = Node(x=head.random.val)
                nodeDict[head.random] = new
                node.random = new
            elif head.random and head.random in nodeDict:
                node.random = nodeDict[head.random]

            head = head.next
            node = node.next

        return result
```