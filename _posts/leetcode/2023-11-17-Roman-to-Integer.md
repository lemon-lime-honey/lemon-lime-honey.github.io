---
layout: post
title:  Roman to Integer
author: bs
date: '2023-11-17 10:22:00 +0900'
category: leetcode
tags: [leetcode, easy, 알고리즘]
render_with_liquid: false
---

# [LeetCode 13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

## 원문
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

> | Symbol | Value |
> | --- | --- |
> | I | 1 |
> | V | 5 |
> | X | 10 |
> | L | 50 |
> | C | 100 |
> | D | 500 |
> | M | 1000 |

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simplt `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V`(5) and `X`(10) to make 4 and 9.
- `X` can be placed before `L`(50) and `C`(100) to make 40 and 90.
- `C` can be placed before `D`(500) and `M`(1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

## 풀이
`I`, `V`, `X`, `L`, `C`, `D`, `M`을 키로, 해당하는 아라비아 숫자를 값으로 가지는 해시 테이블을 생성한다.<br>
입력 받은 로마 숫자 문자열을 순회하며, 앞에 오는 문자가 뒤에 오는 문자보다 작은 값을 나타낸다면 `IV`, `IX` 등과 같은 경우이므로 해당하는 계산값을 결과값 변수에 더해주고 인덱스에 2를 더한다.<br>
그렇지 않다면 앞에 있는 문자에 해당하는 값을 더하고 인덱스에 1을 더한다.<br>
마지막 문자의 경우 그 문자에 해당하는 값을 더한다.

## 코드
### Python
```python
class Solution:
    def romanToInt(self, s: str) -> int:
        letterDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
                      'C': 100, 'D': 500, 'M': 1000}
        length = len(s)
        result = 0
        i = 0

        while i < length:
            if i == length - 1:
                result += letterDict[s[i]]
                i += 1
            else:
                if letterDict[s[i]] < letterDict[s[i + 1]]:
                    result += letterDict[s[i + 1]] - letterDict[s[i]]
                    i += 2
                else:
                    result += letterDict[s[i]]
                    i += 1

        return result
```

### Java
```java
import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> roman = new HashMap<>(){{
            put('I', 1);
            put('V', 5);
            put('X', 10);
            put('L', 50);
            put('C', 100);
            put('D', 500);
            put('M', 1000);
        }};
        int n = s.length();
        int result = 0;
        int i = 0;

        while (i < n) {
            if (i == n - 1) {
                result += roman.get(s.charAt(i));
                i++;
            } else {
                if (roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
                    result += roman.get(s.charAt(i + 1)) - roman.get(s.charAt(i));
                    i += 2;
                } else {
                    result += roman.get(s.charAt(i));
                    i++;
                }
            }
        }

        return result;
    }
}
```