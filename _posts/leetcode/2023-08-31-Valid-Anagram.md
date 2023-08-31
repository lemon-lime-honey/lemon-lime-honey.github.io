---
layout: post
title:  Valid Anagram
author: bs
date: '2023-08-31 20:37:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## 원문
Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`, *and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## 내 생각
(Python) `collections` 모듈의 `Counter`와 `Counter`의 `.most_common()` 메서드를 사용한다.<br>
두 문자열에 있는 문자를 `Counter`를 이용하여 센다.<br>
그 다음 `sorted()`와 `.most_common()`을 사용하여 정렬된 결과 리스트 두 개를 비교해 같으면 `True`, 다르면 `False`를 반환한다.

`Counter`를 쓰지 않고 두 개의 딕셔너리를 만들어 `sorted()`의 `key` 파라미터와 람다함수를 이용해 정렬할 수도 있다.<br>
이 경우의 정렬: `sorted(sDict, key=lambda x:(x[1], x[0]))`<br>
`.most_common()`를 쓴 경우와 같은 상태가 되려면 `x[1]` 대신 `-x[1]`을 사용하면 된다.

## 코드
```python
from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sCounter = sorted(Counter(s).most_common())
        tCounter = sorted(Counter(t).most_common())
        if sCounter == tCounter: return True
        return False
```