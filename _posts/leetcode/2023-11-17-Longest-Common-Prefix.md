---
layout: post
title:  Longest Common Prefix
author: bs
date: '2023-11-17 10:37:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

## 원문
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## 풀이
주어진 문자열 중 가장 짧은 것의 길이만큼 순회하는데, 이때 그 안에서 문자열을 순회하며 다른 문자가 나온다면 그 이전위치까지의 문자열을 반환한다.<br>
순회를 모두 마칠 때까지 다른 문자가 나오지 않는다면 그때까지의 문자열을 반환한다.

## 코드
### Python
```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = list()

        for i in range(min(map(len, strs))):
            letter = strs[0][i]
            for j in range(1, len(strs)):
                if strs[j][i] != letter:
                    return ''.join(result)
                    break
            else:
                result.append(letter)

        return ''.join(result)
```

### Java
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder sb = new StringBuilder();
        int n = 300;

        for (String str: strs) {
            n = Math.min(n, str.length());
        }

        for (int i = 0; i < n; i++) {
            char target = strs[0].charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (strs[j].charAt(i) != target) {
                    return sb.toString();
                }
            }
            sb.append(target);
        }

        return sb.toString();
    }
}
```