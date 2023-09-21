---
layout: post
title:  Letter Combinations of a Phone Number
author: bs
date: '2023-09-21 19:32:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## 원문
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![telephone-keypad](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

## 풀이
백트래킹.

인덱스(`digit`의 인덱스) `idx`와 생성되는 문자열 저장용 배열 `res`를 인수로 가지는 `search` 함수를 작성한다.<br>
`digits`를 순회하며 그 안에서 또 숫자에 해당되는 문자 집합을 순회한다.<br>
`res`에 문자를 추가하고 `search`를 재귀호출한 다음 `res`에서 다시 문자를 제거한다.<br>
`res`의 길이가 `digit`의 길이와 같게 되면 결과 저장용 배열에 `res`를 붙여 만든 문자열을 추가한다.

## 코드
```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        def search(idx, res):
            if len(res) == len(digits):
                result.append(''.join(res))
                return

            for i in range(idx + 1, len(digits)):
                for letter in letterDict[digits[i]]:
                    res.append(letter)
                    search(i, res)
                    res.pop()
        

        if not digits: return list()

        letterDict = {'2': 'abc', '3': 'def',
                      '4': 'ghi', '5': 'jkl',
                      '6': 'mno', '7': 'pqrs',
                      '8': 'tuv', '9': 'wxyz'}
        
        result = list()
        res = list()
        search(-1, res)

        return result
```