---
layout: post
title:  Word Pattern
author: bs
date: '2023-08-31 21:02:00 +0900'
last_modified_at: '2023-11-16 13:20:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 290. Word Pattern](https://leetcode.com/problems/word-pattern/)

## 원문
Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.

##  풀이
해시 테이블을 두 개 만든다. 하나는 `(key, value)`가 `(pattern, word)`, 나머지는 `(word, pattern)`이다.<br>
여기서 `pattern`은 `pattern`에 있는 문자를 의미하고, `word`는 `s`를 공백 기준으로 나누었을 때 분리된 것들을 의미한다.<br>
우선 패턴의 길이와 `word` 모음의 길이가 다르면 `False`를 반환한다.

그 다음 `word` 모음과 `pattern`을 순회한다.<br>
1. `pattern[i]`가 딕셔너리에 없고, `word[i]`도 딕셔너리에 없는 경우: 딕셔너리에 추가
2. `pattern[i]` 또는 `word[i]` 중 하나가 딕셔너리에 없는 경우: `False` 반환
3. `pattern[i]`를 키로 가지는 딕셔너리의 값과 `word[i]`가 다른 경우: `False` 반환
4. `pattern[i]`와 `word[i]`를 키로 가지는 딕셔너리의 값이 다른 경우: `False` 반환

순회가 끝나면 `True`를 반환한다.

## 코드
### Python
```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        patdict = dict()
        worddict = dict()

        if len(pattern) == len(words):
            for i in range(len(pattern)):
                if pattern[i] not in patdict and words[i] not in worddict:
                    patdict[pattern[i]] = words[i]
                    worddict[words[i]] = pattern[i]
                elif pattern[i] not in patdict or words[i] not in worddict:
                    break
                else:
                    if patdict[pattern[i]] != words[i]: break
                    if worddict[words[i]] != pattern[i]: break
            else: return True
        return False
```

### Java
```java
class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] words = s.split(" ");

        if (pattern.length() != words.length) return false;

        HashMap<Character, String> dict1 = new HashMap<>();
        HashMap<String, Character> dict2 = new HashMap<>();

        for (int i = 0; i < pattern.length(); i++) {
            if (!dict1.containsKey(pattern.charAt(i)) &&
                !dict2.containsKey(words[i])) {
                dict1.put(pattern.charAt(i), words[i]);
                dict2.put(words[i], pattern.charAt(i));
            } else if (!dict1.containsKey(pattern.charAt(i)) ||
                       !dict2.containsKey(words[i])) {
                return false;
            } else if (!dict1.get(pattern.charAt(i)).equals(words[i]) ||
                       !dict2.get(words[i]).equals(pattern.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}
```