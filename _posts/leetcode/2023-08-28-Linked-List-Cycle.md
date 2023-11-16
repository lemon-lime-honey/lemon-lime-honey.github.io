---
layout: post
title:  Linked List Cycle
author: bs
date: '2023-08-28 20:59:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-interview-150)

## 원문
Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

## 풀이
무얼 요구하는지는 알겠지만 어디서부터 어떻게 손을 대야할지 감이 잡히지 않았다.

### 도움!
[이 영상](https://www.youtube.com/watch?v=gBTe7lFR3vc)을 참고했다.<br>
(예전에 백준 N-Queen 문제 풀 때도 그렇고 여러모로 도움을 많이 받고 있다.)

#### Floyd's Tortoise and Hare
두 개의 포인터, `slow`와 `fast`를 사용한다.<br>
두 포인터가 같은 노드에서 출발했다고 했을 때 `slow`는 바로 다음 노드, `fast`는 다음 노드의 다음 노드를 방문한다.<br>
`slow`와 `fast`가 만나게 되면 cycle이 있고, 아니면 없다.

## 코드
### Python
```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow, fast = head, head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast: return True

        return False
```

### `pos`는 그래서 왜
문제 설명에 있는 `pos`가 왜 있는지 이해가 가지 않아 `Discussion` 탭을 보니 문제를 푸는 사람이 상황을 이해할 수 있게 문제에서 표기한 것이지 특별한 역할은 없다는 말이 있었다.