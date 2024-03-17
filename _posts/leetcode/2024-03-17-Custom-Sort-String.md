---
layout: post
title:  Custom Sort String
author: bs
date: '2024-03-17 17:37:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 791. Custom Sort String](https://leetcode.com/problems/custom-sort-string/)

## 원문
You are given two strings `order` and `s`. All the characters of `order` are **unique** and were sorted in some custom order previously.

Permute the characters of `s` so that they match the order that `order` was sorted. More specifically, if a character `x` occurs before a character `y` in `order`, then `x` should occur before `y` in the permuted string.

Return *any permutation of* `s` *that satisfies this property.*

## 풀이
`order`에 포함된 문자를 키로, 해당 문자가 나타난 횟수를 값으로 가지는 해시 테이블을 만든다.<br>
`s`를 순회하며 `order`에 포함된 문자가 나타나면 해시 테이블의 해당 값을 갱신한다.<br>
그 다음 `order`를 순회하며 해시 테이블에서 각 문자에 해당하는 값 만큼 문자를 결과에 추가하고, `s`를 순회하며 `order`에 포함되지 않은 문자만 결과에 추가한다.

## 코드
### Python
```python
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        letters = {letter: 0 for letter in order}
        result = list()

        for letter in s:
            if letter in letters:
                letters[letter] += 1

        for letter in order:
            for i in range(letters[letter]):
                result.append(letter)

        for letter in s:
            if letter not in letters:
                result.append(letter)

        return ''.join(result)
```

### Java
```java
class Solution {
    public String customSortString(String order, String s) {
        Map<Character, Integer> letters = new HashMap<>();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < order.length(); i++) {
            letters.put(order.charAt(i), 0);
        }

        for (int i = 0; i < s.length(); i++) {
            if (letters.containsKey(s.charAt(i))) {
                letters.put(s.charAt(i), letters.get(s.charAt(i)) + 1);
            }
        }

        for (int i = 0; i < order.length(); i++) {
            for (int j = 0; j < letters.get(order.charAt(i)); j++) {
                result.append(order.charAt(i));
            }
        }

        for (int i = 0; i < s.length(); i++) {
            if (!letters.containsKey(s.charAt(i))) {
                result.append(s.charAt(i));
            }
        }

        return result.toString();
    }
}
```