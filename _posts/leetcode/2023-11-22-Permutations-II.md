---
layout: post
title:  Permutations II
author: bs
date: '2023-11-23 12:46:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 47. Permutations II](https://leetcode.com/problems/permutations-ii/)

## 원문
Given a collection of numbers, `nums`, that might contain duplicates, return *all possible unique permutations **in any order**.*

## 풀이
백트래킹.

1. `nums`를 오름차순으로 정렬한다.
2. 지금까지 추가한 숫자 집합의 크기가 `nums`의 크기와 같다면 결과 배열에 집합을 추가한다.
3. 그렇지 않다면 `nums`를 순회한다. (인덱스는 `i`로 표기한다.)
    1. `i`가 방문처리 되어 있거나 `nums[i]`와 `nums[i - 1]`가 같으면서 `i - 1`이 방문처리 되어 있지 않다면 `continue`
    2. 그렇지 않다면 `i`를 방문처리 한다.
    3. 숫자 집합에 `nums[i]`를 추가한다.
    4. 함수 재귀호출
    5. `i`의 방문처리를 취소한다.
    6. 숫자 집합에서 `nums[i]`를 제거한다.

## 코드
### Python
```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        def permute(route):
            if len(route) == len(nums):
                result.append(list(route))
                return
            
            for i in range(len(nums)):
                if chk[i] or (i > 0 and nums[i] == nums[i - 1] and not chk[i - 1]):
                    continue
                chk[i] = True
                route.append(nums[i])
                permute(route)
                route.pop()
                chk[i] = False


        chk = [False for i in range(len(nums))]
        result = list()
        nums.sort()

        permute(list())
        return result
```

### Java
```java
class Solution {
    List<List<Integer>> result = new ArrayList<>();

    private void backtrack(int[] nums, List<Integer> route, boolean[] used) {
        if (route.size() == nums.length) {
            result.add(new ArrayList<Integer>(route));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
                continue;
            }
            route.add(nums[i]);
            used[i] = true;
            backtrack(nums, route, used);
            used[i] = false;
            route.remove(route.size() - 1);
        }
    }

    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        backtrack(nums, new ArrayList<>(), new boolean[nums.length]);
        return result;
    }
}
```