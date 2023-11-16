---
layout: post
title:  Add Two Numbers
author: bs
date: '2023-08-28 21:22:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## 원문
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## 풀이
두 연결 리스트의 값을 앞부터 더한다.<br>
이때 노드의 값은 한 자리 숫자여야 하므로 변수 `carry`를 두어 그 노드에서 받아 올림으로 더해야 하는 수를 저장한다.<br>
둘 중 하나가 더 짧다면 짧은 쪽 순회가 다 끝나고 긴 쪽을 마저 순회한다.<br>
순회가 완전히 끝났을 때 `carry`의 값이 양수라면 그 `carry` 값을 새로운 노드에 추가해 `tail`로 만들어준다.

## 코드
### Python
```python
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        linked = ListNode()
        head = linked
        linked.val = (l1.val + l2.val) % 10
        carry = (l1.val + l2.val) // 10
        l1 = l1.next
        l2 = l2.next

        while l1 or l2:
            if l1 and l2:
                value = (l1.val + l2.val + carry) % 10
                carry = (l1.val + l2.val + carry) // 10
                new = ListNode(val=value)
                linked.next = new
                linked = linked.next
                l1 = l1.next
                l2 = l2.next
            elif l1:
                value = (l1.val + carry) % 10
                carry = (l1.val + carry) // 10
                new = ListNode(val=value)
                linked.next = new
                linked = linked.next
                l1 = l1.next
            else:
                value = (l2.val + carry) % 10
                carry = (l2.val + carry) // 10
                new = ListNode(val=value)
                linked.next = new
                linked = linked.next
                l2 = l2.next

        if carry:
            new = ListNode(val=carry)
            linked.next = new
            linked = linked.next

        return head
```