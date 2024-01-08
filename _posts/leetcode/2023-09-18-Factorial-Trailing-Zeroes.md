---
layout: post
title:  Factorial Trailing Zeroes
author: bs
date: '2023-09-18 19:30:00 +0900'
last_modified_at: '2024-01-08 19:08:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)

## 원문
Given an integer `n`, return *the number of trailing zeroes in* `n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

## 풀이
0으로 끝나려면 10의 배수여야 한다.

`n`이 5보다 작으면 0을 반환한다.<br>
그렇지 않으면 `1`부터 `n`까지의 범위를 순회하며 숫자가 2 또는 5로 나누어 떨어질 때 2로 나뉘는 횟수와 5로 나뉘는 횟수의 누적을 구한다.<br>
2와 5가 나타난 횟수 중 더 작은 쪽을 반환한다.

### 코드
```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        if n < 5: return 0

        two, five = 0, 0

        for i in range(2, n + 1):
            if not i % 2 or not i % 5:
                chk = i
                while not (chk % 2 and chk % 5):
                    if not chk % 2:
                        chk //= 2
                        two += 1
                    if not chk % 5:
                        chk //= 5
                        five += 1

        return min(two, five)
```

## 다른 풀이
`Discussion`탭을 확인하니 2가 5보다 훨씬 더 많이, 자주 나타나므로 5를 찾으면 된다고 하더라.<br>
`n!`에 포함되어 있는 5의 수를 구하려면 `n`을 더이상 나누어 떨어지지 않을 때까지 5로 나누는데 이때 나오는 수를 다 더해주면 된다.

### 코드
#### Python
```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        result = 0

        while n:
            if n < 5: break
            result += n // 5
            n //= 5

        return result
```

#### Java
```java
class Solution {
    public int trailingZeroes(int n) {
        int result = 0;

        while (n > 0) {
            if (n < 5) {
                break;
            }
            result += n / 5;
            n /= 5;
        }

        return result;
    }
}
```