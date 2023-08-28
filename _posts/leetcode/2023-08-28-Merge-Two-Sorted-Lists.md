---
layout: post
title:  Merge Two Sorted Lists
author: bs
date: '2023-08-28 21:38:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_1-2]
---

# [LeetCode 21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## 원문
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

## 내 생각
값을 비교해가며 새로운 연결 리스트에 추가한다.<br>
둘 중 하나가 더 짧은 경우 짧은 쪽의 순회가 끝나면 결과 연결 리스트의 `tail`의 `next`를 긴 쪽의 다음 순회 차례 노드로 지정한다.

## 코드
```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 or not list2:
            if list1: return list1
            if list2: return list2
            else: return

        result = ListNode(val=min(list1.val, list2.val))
        head = result
        if list1.val <= list2.val: list1 = list1.next
        else: list2 = list2.next

        while list1 and list2:
            new = ListNode(val=min(list1.val, list2.val))
            result.next = new
            result = result.next
            if list1.val <= list2.val: list1 = list1.next
            else: list2 = list2.next

        if list1: result.next = list1
        elif list2: result.next = list2

        return head
```