---
layout: post
title:  Permutations
author: bs
date: '2023-09-30 20:47:00 +0900'
last_modified_at: '2023-11-22 12:42:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 46. Permutations](https://leetcode.com/problems/permutations/)

## 원문
Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.

## 풀이
백트래킹.

1. 지금까지 추가한 숫자 집합의 크기가 `nums`의 크기와 같다면 결과 배열에 집합을 추가한다.
2. 그렇지 않다면 `nums`를 순회한다. (인덱스는 `i`로 표기한다.)
    1. `i`가 방문처리 되어 있다면 넘어간다.
    2. 그렇지 않다면 `i`를 방문처리 한다.
    3. 숫자 집합에 `nums[i]`를 추가한다.
    4. 함수 재귀호출
    5. `i`의 방문처리를 취소한다.
    6. 숫자 집합에서 `nums[i]`를 제거한다.

## 코드
### Python
```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def permutation():
            if len(route) == len(nums):
                result.append(list(route))
                return

            for i in range(len(nums)):
                if not visited[i]:
                    visited[i] = True
                    route.append(nums[i])
                    permutation()
                    visited[i] = False
                    route.pop()


        visited = [False for i in range(len(nums))]
        result = list()
        route = list()
        permutation()

        return result
```

### Java
```java
class Solution {
    List<List<Integer>> result = new ArrayList<>();

    private void backtrack(List<Integer> numbers, int[] nums, Set<Integer> used) {
        if (numbers.size() == nums.length) {
            result.add(new ArrayList<>(numbers));
            return;
        }
        for (int num: nums) {
            if (used.contains(num)) {
                continue;
            }
            numbers.add(num);
            used.add(num);
            backtrack(numbers, nums, used);
            used.remove(num);
            numbers.remove(numbers.size() - 1);
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        backtrack(new ArrayList<>(), nums, new HashSet<Integer>());
        return result;
    }
}
```