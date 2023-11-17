---
layout: post
title:  Integer to Roman
author: bs
date: '2023-11-17 10:29:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/)

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

Given an integer, convert it to a roman numeral.

## 풀이
아라비아 숫자값을 키로, 로마 숫자를 값으로 가지는 해시 테이블을 생성한다. 이때 테이블에 들어가는 값은 원문 표의 로마 숫자 7개와 거기서 파생된 뺄셈이 사용되는 표현 6개이다.<br>
1000부터 1까지 해시 테이블의 키로 저장된 값을 순회하며 주어진 숫자가 순회하는 값보다 크거나 같으면 숫자가 작아질 때까지 순회하는 값을 빼고 거기에 해당하는 로마 숫자를 결과에 추가한다.

## 코드
### Python
```python
class Solution:
    def intToRoman(self, num: int) -> str:
        romanDict = {
            1: "I",
            5: "V", 4: "IV",
            10: "X", 9: "IX",
            50: "L", 40: "XL",
            100: "C", 90: "XC",
            500: "D", 400: "CD",
            1000: "M", 900: "CM"
        }

        result = list()

        for n in (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1):
            while n <= num:
                result.append(romanDict[n])
                num -= n

        return ''.join(result)
```

### Java
```java
class Solution {
    public String intToRoman(int num) {
        int[] arabic = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] roman = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 13; i++) {
            while (arabic[i] <= num) {
                num -= arabic[i];
                sb.append(roman[i]);
            }
        }

        return sb.toString();
    }
}
```