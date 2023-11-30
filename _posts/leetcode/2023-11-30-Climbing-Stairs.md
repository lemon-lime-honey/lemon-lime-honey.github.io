---
layout: post
title:  Climbing Stairs
author: bs
date: '2023-11-30 17:46:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
---

# [LeetCode 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

## 원문
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## 풀이
`n`이 1이라면 1을 반환한다.<br>
아니라면 현재 값을 나타내는 변수 `now`와 이전 값을 나타내는 변수 `before`를 선언한다. 둘 모두 초기값은 1이다.<br>
1부터 `n - 1`까지 순회하며 다음을 반복한다.
1. 변수 `temp`에 `now`의 값을 저장한다.
2. `now`를 `temp + before`로 갱신한다.
3. `before`의 값을 `temp`의 값으로 변경한다.

순회가 끝나면 `now`를 반환한다.

## 코드
### Python
```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1: return 1

        now, before = 1, 1

        for i in range(1, n):
            temp = now
            now = temp + before
            before = temp

        return now
```

### Java
```java
class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }

        int now = 1, before = 1;

        for (int i = 1; i < n; i++) {
            int temp = now;
            now = temp + before;
            before = temp;
        }

        return now;
    }
}
```