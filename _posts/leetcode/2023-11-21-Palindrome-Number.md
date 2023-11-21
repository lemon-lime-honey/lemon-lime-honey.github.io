---
layout: post
title:  Palindrome Number
author: bs
date: '2023-11-21 14:20:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

## 원문
Given an integer `x`, return `true` *if* `x` *is a **palindrome**, and* `false` *otherwise*.

## 풀이
`x`가 음수이면 `false`를 반환한다.<br>
그렇지 않은 경우...

### Python
`deque`를 활용했다.<br>
우선 숫자를 자리수 별로 분해해 덱에 넣은 후, 덱의 길이가 1 이하가 될 때까지 양 끝을 비교하며 같으면 양 끝에서 원소를 제거하고, 다르면 `false`를 반환한다.<br>
덱의 길이가 `0` 또는 `1`이 되면 `true`를 반환한다.

```python
from collections import deque


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        n = deque()

        while x:
            n.append(x % 10)
            x //= 10

        while len(n) > 1:
            if n[0] == n[-1]:
                n.pop()
                n.popleft()
            else:
                return False

        return True
```

### Java
반복문을 활용해 뒤집은 숫자를 구한 후 원래 숫자와 비교한 결과를 반환한다.

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }
        int compare = 0;
        int number = x;
        while (number > 0) {
            compare = compare * 10 + number % 10;
            number = number / 10;
        }
        if (compare == x) {
            return true;
        }
        return false;
    }
}
```