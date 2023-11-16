---
layout: post
title:  Implement Trie (Prefix Tree)
author: bs
date: '2023-09-08 18:18:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

## 원문
A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

## Trie 구현
1. 클래스 `Node`
    1. 클래스 인스턴스를 생성할 때 두 개의 속성을 가진 채로 초기화되도록 `__init__`을 작성한다.
    2. 속성 `Children`: 딕셔너리. 노드의 자식 노드를 저장한다.
    3. 속성 `value`: 값을 저장하기 위한 변수.
2. 클래스 `Trie`
    1. 클래스 인스턴스를 생성할 때 클래스 `Node`의 인스턴스를 `root`라는 속성으로 가지도록 `__init__` 을 작성한다.
    2. 메서드 `insert`
        1. 문자열 하나를 인자로 가진다.
        2. 문자열을 순회한다.
            1. 해당 문자가 참조 중인 노드의 `Children`에 있으면 참조 중인 노드를 그 노드로 변경한다.
            2. 없는 경우 그 문자를 값으로 가지는 노드를 생성해 `Children`에 추가해준 후 참조 중인 노드를 그 노드로 변경한다.
            3. 마지막 문자인 경우 노드에 `lastword` 속성을 추가한다.
    3. 메서드 `search`
        1. 문자열 하나를 인자로 가진다.
        2. 문자열을 순회한다.
            1. 해당 문자가 참조 중인 노드의 `Children`에 있으면 참조 중인 노드를 그 노드로 변경한다.
            2. 없는 경우 `False`를 반환한다.
            3. 마지막 문자인 경우 노드에 `lastword` 속성이 존재하면 `True`, 아니면 `False`를 반환한다.
    4. 메서드 `startsWith`
        1. 문자열 하나를 인자로 가진다.
        2. 문자열을 순회한다.
            1. 해당 문자가 참조 중인 노드의 `Children`에 있으면 참조 중인 노드를 그 노드로 변경한다.
            2. 없는 경우 `False`를 반환한다.
        3. `True`를 반환한다.

## 코드
### Python
```python
class Node:
    def __init__(self):
        self.children: Dict[str, Node] = {}
        self.value: Optional[Any] = None


class Trie:
    def __init__(self):
        self.root = Node()


    def insert(self, word: str) -> None:
        chk = self.root
        for i in range(len(word)):
            if word[i] in chk.children:
                chk = chk.children[word[i]]
            else:
                new = Node()
                new.value = word[i]
                chk.children[word[i]] = new
                chk = chk.children[word[i]]
            if i == len(word) - 1:
                chk.lastword = True


    def search(self, word: str) -> bool:
        chk = self.root
        for i in range(len(word)):
            if word[i] in chk.children:
                chk = chk.children[word[i]]
            else: return False
        if hasattr(chk, 'lastword'): return True
        return False


    def startsWith(self, prefix: str) -> bool:
        chk = self.root
        for i in range(len(prefix)):
            if prefix[i] in chk.children:
                chk = chk.children[prefix[i]]
            else: return False
        return True
```