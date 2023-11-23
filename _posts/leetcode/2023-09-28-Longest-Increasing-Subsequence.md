---
layout: post
title:  Longest Increasing Subsequence
author: bs
date: '2023-09-28 12:08:00 +0900'
last_modified_at: '2023-11-23 14:52:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

## 원문
Given an integer array `nums`, return *the length of the longest **strictly increasing subsequence***.

## 풀이
리스트 `result`를 생성한다.<br>
리스트의 첫 원소는 `nums[0]`이다.<br>
`nums`의 두 번째 원소부터 마지막 원소까지 순회한다.

1. `result`의 마지막 원소보다 `nums[i]`가 더 크면 `result`에 `nums[i]`를 추가한다.
2. `result`의 마지막 원소보다 `nums[i]`가 크지 않다면 이분 탐색으로 `nums[i]`가 `result`에 들어갈 자리를 찾아 원소의 값을 바꿔준다.

순회가 끝나면 `result`의 길이를 반환한다.

## 코드
### Python
```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        result = list()
        result.append(nums[0])

        for i in range(1, len(nums)):
            if result[-1] < nums[i]:
                result.append(nums[i])
            else:
                lo, hi = 0, len(result) - 1

                while lo < hi:
                    mid = (lo + hi) // 2

                    if result[mid] < nums[i]:
                        lo = mid + 1
                    else:
                        hi = mid

                result[lo] = nums[i]

        return len(result)
```

### Java
```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        List<Integer> result = new ArrayList<>();

        for (int num: nums) {
            if (result.isEmpty()) {
                result.add(num);
                continue;
            }
            if (num > result.get(result.size() - 1)) {
                result.add(num);
                continue;
            }
            int lo = 0;
            int hi = result.size() - 1;

            while (lo < hi) {
                int mid = (lo + hi) / 2;
                if (result.get(mid) < num) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            result.set(lo, num);
        }

        return result.size();
    }
}
```