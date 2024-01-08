---
layout: post
title: String to Integer (atoi)
author: bs
date: '2024-01-08 19:34:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/description/)

## 원문
Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function.).

The algorithm for `myAtoi(string s)` is as follows:
1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is `'-'` or `'+'`. Read this character in if it is either. This determines if the final result if negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`). If no digits were read, then the integer is `0`. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup>-1</code>, then clamp the integer so that it ramains in the range.<br>
  Specifically, integers less than <code>-2<sup>31</sup></code> should be clamped to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup>-1</code> should be clamped to <code>2<sup>31</sup>-1</code>.
6. Return the integer as the final result.

**Note**:
- Only the space character `' '` is considered a whitespace character.
- **Do not ignore** any characters other than the leading whitespace or the rest of the string after the digits.

## 풀이
1. 음수 여부, 시작 여부, 값을 나타내기 위한 변수 `negative`, `start`, `result`를 선언한다. 이때 `negative`와 `start`의 초기값은 `False`, `result`의 초기값은 `0`이다.
2. 주어진 문자열 `s`를 순회한다.
    1. `start`가 `False`일 때
        - `' '`은 넘어간다.
        - `+`가 나오면 `start`를 `True`로 바꿔준다.
        - `-`가 나오면 `start`와 `negative`를 `True`로 바꿔준다.
        - 숫자가 나오면 `result`에 숫자를 더해주고 `start`를 `True`로 바꿔준다.
        - 그 외의 경우 반복문에서 나온다.
    2. `start`가 `True`일 때
        - 숫자가 나오면 `result`에 10을 곱한 값에 숫자를 더해준다.
        - 그 외의 경우 반복문에서 나온다.
3. `negative`가 `True`라면 `result`의 값을 <code>2<sup>31</sup></code>과 `result` 중 작은 값으로 정하고 `-1`을 곱해준다.
4. `negative`가 `False`라면 `result`의 값을 <code>2<sup>31</sup>-1</code>과 `result` 중 작은 값으로 정한다.
5. `result`를 반환한다.

Python에서는 오버플로우가 일어나지 않아 위와 같은 풀이로도 풀리지만 그렇지 않은 경우 아래의 방식으로 해결할 수 있다.

- 문자열을 순회하는 도중 `start`가 `True`인 경우
  - 숫자가 나왔을 때 `result`의 값이 부호가 있는 32비트 정수의 최대값에서 해당 숫자를 뺀 값을 10으로 나눈 것보다 크면
      - `negative`가 `True`: 부호가 있는 32비트 정수의 최소값 반환
      - `negative`가 `False`: 부호가 있는 32비트 정수의 최대값 반환
  - 크지 않다면 기존의 방식처럼 `result`에 10을 곱하고 숫자를 더한다.

## 코드
### Python
```python
class Solution:
    def myAtoi(self, s: str) -> int:
        negative = False
        start = False
        result = 0

        for letter in s:
            if not start:
                if letter == ' ':
                    continue
                elif letter == '+':
                    start = True
                elif letter == '-':
                    negative = True
                    start = True
                elif letter.isdigit():
                    result += int(letter)
                    start = True
                else:
                    break
            else:
                if letter.isdigit():
                    result = result * 10 + int(letter)
                else:
                    break

        if negative:
            result = min(2 ** 31, result)
            result *= -1
        else:
            result = min(2 ** 31 - 1, result)

        return result
```

### Java
```java
class Solution {
    public int myAtoi(String s) {
        boolean negative = false;
        boolean start = false;
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (!start) {
                if (s.charAt(i) == ' ') {
                    continue;
                } else if (s.charAt(i) == '+') {
                    start = true;
                } else if (s.charAt(i) == '-') {
                    negative = true;
                    start = true;
                } else if (Character.isDigit(s.charAt(i))) {
                    result = s.charAt(i) - '0';
                    start = true;
                } else {
                    break;
                }
            } else {
                if (Character.isDigit(s.charAt(i))) {
                    int num = s.charAt(i) - '0';
                    if (result > (Integer.MAX_VALUE - num) / 10) {
                        if (negative) {
                            return Integer.MIN_VALUE;
                        } else {
                            return Integer.MAX_VALUE;
                        }
                    }
                    result = result * 10 + num;
                } else {
                    break;
                }
            }
        }

        if (negative) {
            return result * -1;
        }

        return result;
    }
}
```