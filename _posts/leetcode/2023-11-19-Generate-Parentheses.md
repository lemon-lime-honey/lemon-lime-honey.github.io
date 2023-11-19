---
layout: post
title:  Generate Parentheses
author: bs
date: '2023-11-19 16:59:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses)

## 원문
Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

## 풀이
백트래킹.<br>
여는 괄호와 닫는 괄호의 수를 확인하며 생성된 문자열의 길이가 `2n`이 될 때마다 결과 배열에 추가한다.<br>
이때 여는 괄호의 수가 `n`보다 작다면 여는 괄호를 문자열에 추가한 후 함수를 재귀호출하고, 닫는 괄호가 여는 괄호보다 적으면 닫는 괄호를 문자열에 추가하고 함수를 재귀호출한다.

## 코드
### Python
```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def generate(lo, hi):
            if len(res) == 2 * n:
                result.append(''.join(res))
                return

            if lo < n:
                res.append('(')
                generate(lo + 1, hi)
                res.pop()

            if hi < lo:
                res.append(')')
                generate(lo, hi + 1)
                res.pop()


        result = list()
        res = list()
        generate(0, 0)

        return result
```

### Java
```java
class Solution {
    private void generate(List<String> result, String route, int lo, int hi, int n) {
        if (route.length() == 2 * n) {
            result.add(route);
            return;
        }
        if (lo < n) {
            generate(result, route + "(", lo + 1, hi, n);
        }
        if (hi < lo) {
            generate(result, route + ")", lo, hi + 1, n);
        }
    }

    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        generate(result, "", 0, 0, n);
        return result;
    }
}
```