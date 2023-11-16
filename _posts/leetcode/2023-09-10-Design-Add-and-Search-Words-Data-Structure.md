---
layout: post
title:  Design Add and Search Words Data Structure
author: bs
date: '2023-09-10 19:46:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

## 원문
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds `word` to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

## 풀이
[Implement Trie (Prefix Tree)]({% link _posts/leetcode/2023-09-08-Implement-Trie-Prefix-Tree.md %})의 답안을 조금 수정했다.

와일드카드를 포함한 문자열 또한 검색해야 하기 때문에 `search`를 수정하는데...

1. 일반적인 검색 로직을 따라 검색을 한다.
2. `.`이 나오면 이전 노드의 자식 노드를 순회하며 `.` 이후 부분을 검색한다.
    1. 검색한 결과가 `True`라면 `True`를 반환하고, `False`라면 다음 자식 노드부터 다시 확인한다.
    2. 모든 자식 노드를 순회했다면 조건에 맞는 문자열이 존재하지 않는다는 의미이므로 `False`를 반환한다.

재귀를 사용해 구현했다.

## 코드
### Python
```python
class Node:
    def __init__(self):
        self.children = dict()
        self.value = None


class WordDictionary:
    def __init__(self):
        self.root = Node()
        

    def addWord(self, word: str) -> None:
        chk = self.root

        for i in range(len(word)):
            if word[i] not in chk.children:
                new = Node()
                new.value = word[i]
                chk.children[word[i]] = new
            chk = chk.children[word[i]]

        chk.last = True


    def search(self, word: str) -> bool:
        def subSearch(index, node):
            nonlocal word

            for i in range(index, len(word)):
                if word[i] == '.':
                    if i == len(word) - 1:
                        for child in node.children.values():
                            if hasattr(child, 'last'): return True
                        return False
                    for child in node.children.values():
                        chk = subSearch(i + 1, child)
                        if chk: return True
                    else:
                        return False
                elif word[i] in node.children:
                    node = node.children[word[i]]
                    if i == len(word) - 1:
                        return hasattr(node, 'last')
                else: return False


        return subSearch(0, self.root)
```