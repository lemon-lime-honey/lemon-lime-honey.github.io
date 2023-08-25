---
layout: post
title:  Valid Palindrome
author: bs
date: '2023-08-25 21:00:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘, pre-ob-be_1-2]
---

# [LeetCode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome)

## 원문
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letterss and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

## 내 생각
문자열의 양 끝에서부터 하나씩 비교하다 다른 문자가 나오면 `False`를 반환하고, 중간 지점까지 확인을 마치고 반목문을 빠져나오면 `True`를 반환한다.<br>
이때 숫자 또는 로마자가 아닌 문자는 무시하고 그 다음 문자를 비교한다.<br>
가령, 앞쪽의 인덱스를 `i`, 뒤쪽의 인덱스를 `j`라고 했을 때 `i`번째 문자가 특수문자 혹은 공백이라면 `i`에 1을 더해주고 `j`번째 문자가 그렇다면 `j`에서 1을 뺀다.

## 코드
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        lo, hi = 0, len(s) - 1

        while lo < hi:
            if not s[lo].isalnum(): lo += 1
            elif not s[hi].isalnum(): hi -= 1
            else:
                if s[lo].lower() != s[hi].lower(): return False
                else:
                    lo += 1
                    hi -= 1

        return True
```

파이썬의 [`.isalnum()`](https://docs.python.org/3/library/stdtypes.html?highlight=isalnum#str.isalnum) 메서드는 해당하는 문자열(또는 문자)이 alphanumeric하면 `True`를, 아니면 `False`를 반환한다.

비슷한 메서드로는 [`.isalpha()`](https://docs.python.org/3/library/stdtypes.html?highlight=isalnum#str.isalpha), [`.isascii()`](https://docs.python.org/3/library/stdtypes.html?highlight=isalnum#str.isascii), [`.isdecimal()`](https://docs.python.org/3/library/stdtypes.html?highlight=isalnum#str.isdecimal), [`.isdigit()`](https://docs.python.org/3/library/stdtypes.html?highlight=isalnum#str.isdigit), `.isnumeric()` 등이 있다.