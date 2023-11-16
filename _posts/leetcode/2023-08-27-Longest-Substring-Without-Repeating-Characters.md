---
layout: post
title:  Longest Substring Without Repeating Characters
author: bs
date: '2023-08-27 21:55:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---


# [LeetCode 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 원문
Given a string `s`, find the length of the **longest substring** without repeating characters.

## 풀이
[Minimum Size Subarray Sum]({% link _posts/leetcode/2023-08-27-Longest-Substring-Without-Repeating-Characters.md %}) 문제를 참고했다.

1. 문자를 저장하기 위한 큐 `letters`와 세트 `chk`, 길이를 저장하기 위한 변수 `result`를 선언한다.
2. `s`를 순회한다.
    1. `s[i]`가 `chk`에 없는 경우
        1. `letters`의 뒤에 `s[i]`를 추가한다.
        2. `chk`에 `s[i]`를 추가한다.
    2. `s[i]`가 `chk`에 있는 경우
        1. `letters`의 가장 앞 원소가 `s[i]`가 될 때까지 `letters`의 앞에서 문자를 제거하고 그 문자를 `chk`에서도 제거한다.
        2. `letters`의 가장 앞 원소가 `s[i]`가 되었다면 `letters`의 앞에서 그 문자를 제거하고 `letters`의 뒤에 추가한다.
    3. `result`의 값을 `result`와 `letters`의 길이 중 긴 것으로 갱신한다.
3. `result`를 반환한다.

## 코드
### Python
```python
from collections import deque


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        letters, chk = deque(), set()
        result = 0

        for i in range(len(s)):
            if s[i] not in chk:
                letters.append(s[i])
                chk.add(s[i])
            else:
                while letters[0] != s[i]:
                    chk.remove(letters.popleft())
                letters.popleft()
                letters.append(s[i])
            result = max(result, len(letters))

        return result
```