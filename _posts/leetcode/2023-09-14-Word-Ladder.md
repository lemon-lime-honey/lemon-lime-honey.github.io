---
layout: post
title:  Word Ladder
author: bs
date: '2023-09-14 21:00:00 +0900'
last_modified_at: '2023-09-15 17:00:00 +0900'
category: leetcode
tags: [leetcode, hard, 알고리즘, pre-ob-be_4-1]
---

# [LeetCode 127. Word Ladder](https://leetcode.com/problems/word-ladder/)

## 원문
A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words <code>beginWord -> s<sub>1</sub> -> s<sub>2</sub> -> ... -> s<sub>k</sub></code> such that:

- Every adjacent pair of words differs by a single letter.
- Every <code>s<sub>i</sub></code> for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
- <code>s<sub>k</sub> == endWord</code>

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *the **number of words** in the **shortest transformation sequence** from* `beginWord` *to* `endWord`, *or* `0` *if no such sequence exists*.

## 아슬아슬하게 통과
8965ms

`beginWord`부터 시작해 `wordList`에 있는 단어를 직접 비교한다. 그 때까지 나타난 단어의 수를 저장하기 위해 `wordList`와 길이가 같은 배열 `chk`를 생성한다. 이때 `chk`의 원소는 `int(1e9)`로 초기화한다.

### 코드
```python
from collections import deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        chk = [int(1e9) for i in range(len(wordList))]
        que = deque([(beginWord, -1)])
        target = -1

        while que:
            now, index = que.popleft()

            for i in range(len(wordList)):
                if index != -1 and chk[i] < chk[index] + 1: continue
                cnt = 0
                for j in range(len(now)):
                    if now[j] != wordList[i][j]:
                        cnt += 1
                        if cnt > 1: break
                else:
                    if chk[i] == int(1e9):
                        que.append((wordList[i], i))
                    if now == beginWord:
                        chk[i] = 2
                    if chk[index] + 1 < chk[i]:
                        chk[i] = chk[index] + 1
                    if wordList[i] == endWord: target = i

        return chk[target] if target != -1 else 0
```

## 다른 방법?
[이 영상](https://www.youtube.com/watch?v=h9iTnkgv05E)을 참고했다.

1. `endWord`가 `wordList`에 없다면 `0`을 반환한다.
2. 그렇지 않다면 패턴 별로 단어를 저장하기 위한 `defaultdict` `nb`를 선언한다.
3. `wordList`에 `beginWord`를 추가한다.
4. `wordList`를 순회하며 `nb`에 단어가 가질 수 있는 모든 패턴을 키로, 단어를 값으로 하는 쌍을 추가한다.
5. 방문 처리용 set에 `beginWord`를 추가해 생성한다.
6. 큐에 `beginWord`를 넣고, 결과용 변수를 1로 초기화한다.
7. 큐가 비어있지 않다면 다음을 반복한다.
    1. 큐에서 빼낸 단어가 `endWord`라면 `result`를 반환한다.
    2. 아니라면 단어가 가질 수 있는 모든 패턴을 순회한다.
        1. 그 패턴에 해당하는 단어가 방문 처리 되어 있지 않다면 방문처리하고 큐에 넣는다.
    3. 초반 큐의 길이만큼 순회했다면 `result`에 `1`을 더해준다.
8. 반복문에서 `result`를 반환하지 않고 나왔다면 `0`을 반환한다.

### 코드
```python
from collections import defaultdict, deque


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: return 0

        nb = defaultdict(list)
        wordList.append(beginWord)

        for word in wordList:
            for j in range(len(word)):
                pat = word[:j] + '*' + word[j + 1:]
                nb[pat].append(word)

        visited = set([beginWord])
        que = deque([beginWord])
        result = 1

        while que:
            n = len(que)
            for i in range(n):
                word = que.popleft()
                if word == endWord: return result
                for j in range(len(word)):
                    pat = word[:j] + '*' + word[j + 1:]
                    for elem in nb[pat]:
                        if elem not in visited:
                            visited.add(elem)
                            que.append(elem)
            result += 1

        return 0
```