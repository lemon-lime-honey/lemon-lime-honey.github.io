---
layout: post
title:  Find the Index of the First Occurrence in a String
author: bs
date: '2023-11-20 11:15:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## 원문
Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

## 풀이
`haystack` 문자열을 처음부터 순회하며 `needle`에 해당하는 문자열이 있는지 찾는다.

## 코드
### Python
```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i: i + len(needle)] == needle:
                return i
        return -1
```

### Java
```java
class Solution {
    public int strStr(String haystack, String needle) {
        int idx = 0;
        int n = haystack.length();
        int m = needle.length();

        while (idx <= n - m) {
            for (int i = 0; i < m; i++) {
                if (haystack.charAt(idx + i) != needle.charAt(i)) break;
                if (i == m - 1) return idx;
            }
            idx++;
        }

        return -1;
    }
}
```