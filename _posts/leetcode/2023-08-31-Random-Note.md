---
layout: post
title:  Random Note
author: bs
date: '2023-08-31 20:27:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 383. Ransom Note](https://leetcode.com/problems/ransom-note/)

## 원문
Given two strings `ransomNote` and `magazine`, return `true` *if* `ransomNote`*can be constructed by using the letters from* `magazine` *and* `false` *otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

## 내 생각
`ransomNote`와 `magazine`에 있는 각 알파벳의 수를 센다.<br>
`ransomNote`에서 얻은 해시 테이블을 순회하며 `magazine`의 해시 테이블에 해당 키가 있는지, 있다면 값이 같은지 확인한다.<br>
없거나 값이 다르면 `False`를 반환하고 무사히 순회가 끝나면 `True`를 반환한다.

또는,

글자에 따른 수 세기는 `magazine`만 하고 `ransomNote`를 순회한다.<br>
문자가 하나 이상 테이블에 남아 있으면 거기서 1을 빼고, 아니면 `False`를 반환한다.

## 코드
```python
from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ranCounter = Counter(ransomNote)
        magCounter = Counter(magazine)
        letters = list(ranCounter.items())

        for letter, cnt in letters:
            if letter not in magCounter or magCounter[letter] < cnt:
                return False

        return True
```