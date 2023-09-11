---
layout: post
title:  Word Search II
author: bs
date: '2023-09-11 23:19:00 +0900'
category: leetcode
tags: [leetcode, hard, 알고리즘, pre-ob-be_3-2]
---

# [LeetCode 212. Word Search II](https://leetcode.com/problems/word-search-ii/)

## 원문
Given an `m x n` `board` of characters and a list of strings `words`, return *all words on the board*.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

## 시간 초과
Trie를 사용해 단어를 다시 저장한다. 백트래킹으로 `board`에서 단어를 찾는다.

### 코드
```python
class TrieNode:
    def __init__(self):
        self.children = dict()
        self.value = None


class Trie:
    def __init__(self):
        self.root = TrieNode()


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        def search(r, c, node, word, index):
            nonlocal n1, n2, visited, temp, result

            if hasattr(node, 'last') and index == len(word):
                result.append(''.join(temp))
                return

            for dr, dc in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                nr, nc = r + dr, c + dc
                if (0 <= nr < n1) and (0 <= nc < n2):
                    if board[nr][nc] in node.children and not visited[nr][nc]:
                        if word[index] == board[nr][nc]:
                            visited[nr][nc] = True
                            temp.append(board[nr][nc])
                            search(nr, nc, node.children[board[nr][nc]], word, index + 1)
                            visited[nr][nc] = False
                            temp.pop()


        trie = Trie()
        n1, n2 = len(board), len(board[0])
        letterDict = dict()
        result = list()

        for word in words:
            node = trie.root
            for i in range(len(word)):
                if word[i] not in node.children:
                    new = TrieNode()
                    new.value = word[i]
                    node.children[word[i]] = new
                node = node.children[word[i]]
                if i == len(word) - 1: node.last = True
        
        for i in range(n1):
            for j in range(n2):
                if board[i][j] not in letterDict:
                    letterDict[board[i][j]] = {(i, j)}
                else:
                    letterDict[board[i][j]].add((i, j))

        for word in words:
            if word[0] not in letterDict: continue
            if word[0] not in trie.root.children: continue

            for r, c in letterDict[word[0]]:
                visited = [[False for i in range(n2)] for j in range(n1)]
                visited[r][c] = True
                temp = [board[r][c]]
                before = len(result)
                search(r, c, trie.root.children[board[r][c]], word, 1)
                if len(result) != before: break

        return result
```

## 도움!
결국 `Solutions`탭의 도움을 받았다.<br>
접두사를 이용해 단어 분기 처리를 해야한다는 것 까지는 알았지만 어떻게 해야할지 감을 잡지 못했는데, DFS로 가장 긴 단어를 찾고, 돌아오면서 자식 노드를 제거하는 식으로 구현할 수 있었다.

### 코드
```python
class TrieNode:
    def __init__(self):
        self.children = dict()
        self.value = None


class Trie:
    def __init__(self):
        self.root = TrieNode()


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        def search(r, c, node, route):
            nonlocal n1, n2, result, visited

            if hasattr(node, 'last'):
                result.add(route)
                if not node.children: return True
            
            for nr, nc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
                if (0 <= nr < n1) and (0 <= nc < n2):
                    if not visited[nr][nc] and board[nr][nc] in node.children:
                        visited[nr][nc] = True
                        chk = search(nr, nc, node.children[board[nr][nc]], route + board[nr][nc])
                        if chk: node.children.pop(board[nr][nc])
                        visited[nr][nc] = False

            return False if node.children else True


        trie = Trie()
        n1, n2 = len(board), len(board[0])
        result = set()

        for word in words:
            node = trie.root
            for i in range(len(word)):
                if word[i] not in node.children:
                    new = TrieNode()
                    new.value = word[i]
                    node.children[word[i]] = new
                node = node.children[word[i]]
            node.last = True

        for i in range(n1):
            for j in range(n2):
                if board[i][j] in trie.root.children:
                    visited = [[False for k in range(n2)] for l in range(n1)]
                    visited[i][j] = True
                    search(i, j, trie.root.children[board[i][j]], board[i][j])

        return list(result)
```