---
layout: post
title:  Simplify Path
author: bs
date: '2023-10-05 20:57:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 71. Simplify Path](https://leetcode.com/problems/simplify-path/)

## 원문
Given a string `path`, which is an **absolute path** (starting with a slash `'/'`) to a file or directory in a Unix-style file system, convert it to the simplified **canonical path**.

In a Unix-style file system, a period `'.'` refers to the current directory, a double period `'..'` refers to the directory up a level, and any multiple consecutive slashes (i.e. `'//'`) are treated as a single slash `'/'`. For this problem, any other format of periods such as `'...'` are treated as file/directory names.

The **canonical path** should have the following format:

- The path starts with a single slash `'/'`.
- Any two directories are seperated by a single slash `'/'`.
- The path does not end with a trailing `'/'`.
- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period `'.'` or double period `'..'`)

Return *the simplified **canonical path***.

## 풀이
우선 리스트 `result`를 생성한다.<br>
`.split()` 메서드를 사용해 `path`를 `'/'` 기준으로 나누고, 나뉜 결과물을 순회한다.<br>
만약 순회하던 항목이 `'..'`이라면 `result`에서 `.pop()`을 한다.<br>
빈 문자열이거나 `'.'`이라면 `contiune`, 그 외의 경우에는 `result`에 추가한다.

## 코드
```python
class Solution:
    def simplifyPath(self, path: str) -> str:
        result = list()

        for name in path.split('/'):
            if name == '..':
                if result: result.pop()
            elif name not in ('', '.'): result.append(name)

        return '/' + '/'.join(result)
```