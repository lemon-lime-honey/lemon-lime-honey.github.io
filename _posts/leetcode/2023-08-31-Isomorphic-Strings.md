---
layout: post
title:  Isomorphic Strings
author: bs
date: '2023-08-31 20:47:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/description/)

## 원문
Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## 내 생각
`s`와 `t`를 같이 순회한다.<br>
두 문자열을 순회하며 문자를 키로, 매핑된 것을 값으로 가질 딕셔너리를 두 개 생성한다.<br>
순회할 차례가 된 문자 두 가지 모두 각 딕셔너리에 없으면 딕셔너리에 추가해준다.<br>
둘 중 하나만 딕셔너리에 없거나, 둘 다 딕셔너리에 있지만 두 문자가 딕셔너리에서 값으로 가진 문자가 다르면 `False`를 반환한다.<br>
순회를 끝냈다면 `True`를 반환한다.

## 코드
```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        sdict = dict()
        tdict = dict()
        ref = 0

        for i in range(len(s)):
            if s[i] not in sdict and t[i] not in tdict:
                sdict[s[i]] = ref
                tdict[t[i]] = ref
                ref += 1
            elif s[i] not in sdict or t[i] not in tdict: break
            else:
                if sdict[s[i]] != tdict[t[i]]: break
        else: return True
        return False
```