---
layout: post
title:  Custom Sort String
author: bs
date: '2024-03-17 17:46:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 1171. Remove Zero Sum Consecutive Nodes from Linked List](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)

## 원문
Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list. You may return any such answer.

## 풀이
값이 0, 다음 노드로 `head`를 가지는 `ListNode` `dummy`, 합을 키로, 연결 리스트의 노드를 값으로 가지는 해시 테이블을 생성한다.<br>
연결 리스트를 순회하며 노드의 값을 현재까지의 누적값을 가지는 변수 `prefix`에 더해준다.
1. 만약 `prefix`가 해시 테이블에 존재한다면 `prefix`에 해당하는 노드를 시작으로 현재 노드 전까지 노드를 삭제한다. 그 다음 해시 테이블을 갱신한다.
2. 존재하지 않는다면 해시 테이블에 `prefix`와 노드를 저장한다.
반복문을 빠져나왔다면 `dummy.next`를 반환한다.


## 코드
### Python
```python
class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prefix_dict = {0: dummy}
        node = head
        prefix = 0

        while node:
            prefix += node.val
            if prefix in prefix_dict:
                target = prefix_dict[prefix].next
                temp_sum = prefix + target.val
                while target != node:
                    del prefix_dict[temp_sum]
                    target = target.next
                    temp_sum += target.val
                prefix_dict[prefix].next = node.next
            else:
                prefix_dict[prefix] = node
            node = node.next

        return dummy.next
```

### Java
```java
class Solution {
    public ListNode removeZeroSumSublists(ListNode head) {
        ListNode dummy = new ListNode(0, head);
        Map<Integer, ListNode> prefixDict = new HashMap<>();
        prefixDict.put(0, dummy);
        ListNode node = head;
        int prefix = 0;

        while (node != null) {
            prefix += node.val;
            if (prefixDict.containsKey(prefix)) {
                ListNode target = prefixDict.get(prefix).next;
                int tempSum = prefix + target.val;
                while (target != node) {
                    prefixDict.remove(tempSum);
                    target = target.next;
                    tempSum += target.val;
                }
                prefixDict.get(prefix).next = node.next;
            } else {
                prefixDict.put(prefix, node);
            }
            node = node.next;
        }

        return dummy.next;
    }
}
```