---
layout: post
title:  Group Anagrams
author: bs
date: '2023-08-31 21:26:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_2-1]
---

# [LeetCode 49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## 원문
Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## 내 생각
(Python) 딕셔너리와 리스트를 하나씩 만든다.<br>
리스트는 결과 반환용 리스트인데, 중첩 리스트가 될 것이다.<br>
딕셔너리는 `str`에 있는 단어를 키로, 그 단어가 가진 문자와 그 개수를 키-값 쌍으로 가지는 딕셔너리를 정렬한 리스트를 값으로 가진다.

`strs`를 순회하고, 그 안에서 리스트를 순회하며 딕셔너리에서 각 단어에 해당하는 값과 리스트 내의 리스트 마지막 단어에 해당하는 값이 같으면 내부 리스트에 단어를 추가한다.<br>
그렇지 않으면 리스트에 그 단어 만을 포함하는 리스트를 추가한다.

### 코드
```python
from collections import Counter


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = list()
        words = dict()

        for word in strs:
            words[word] = sorted(Counter(word).most_common())

        for word in strs:
            if not result:
                result.append([word])
            else:
                for lis in result:
                    if words[word] == words[lis[-1]]:
                        lis.append(word)
                        break
                else:
                    result.append([word])
        return result
```

## 더 빠른 방법은 없을까?
위의 코드는 `3755ms/5.1%`가 나왔다. `5.1%`가 나왔으니 지나치게 느린게 맞다.

[이 영상](https://www.youtube.com/watch?v=vzdNOK2oB2E)을 참고했다.

먼저 딕셔너리를 생성한다. 알파벳의 개수가 저장된 튜플을 키로, 단어 리스트를 값으로 가질 것이다.<br>
`strs`를 순회한다. 그때마다 모든 값이 0인 길이 26(알파벳의 숫자를 저장할 것이므로)인 리스트를 생성한다.<br>
`strs` 내의 단어를 또 순회하는데, 이때 `ord()`를 사용하여 위에서 생성한 리스트의 값을 갱신한다.<br>
단어 순회가 끝났으면 리스트를 튜플로 변환시킨 후 (파이썬에서는 딕셔너리의 키가 immutable한 객체여야 한다.) 딕셔너리에 단어를 추가한다. 튜플이 키이다.<br>
`strs` 순회가 끝났으면 딕셔너리의 값만 모아 반환한다.

### 코드
```python
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list)

        for s in strs:
            count = [0 for i in range(26)]

            for c in s:
                count[ord(c) - ord("a")] += 1

            result[tuple(count)].append(s)

        return result.values()
```

`111ms/47.24%`