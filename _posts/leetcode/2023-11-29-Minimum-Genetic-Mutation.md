---
layout: post
title:  Minimum Genetic Mutation
author: bs
date: '2023-11-29 15:14:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘]
---

# [LeetCode 433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation)

## 원문
A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.

Suppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one mutation is defined as one single character changed in the gene string.

- For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.

There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it valid gene string.

Given the two gene strings `startGene` and `endGene` and the gene bank `bank`, return *the minimum number of mutations needed to mutate from* `startGene` *to* `endGene`. If there is no such a mutation, return `-1`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

## 풀이
1. `endGene`이 `bank`에 존재하지 않는다면 `-1`을 반환한다.
2. 큐에 `startGene`을 넣고 BFS
    1. 큐에서 `gene`을 꺼낸다. `endGene`과 같다면 지금까지 `while`문을 반복한 횟수를 반환한다.
    2. 큐에서 꺼낸 `gene`의 염기를 하나씩 바꾼다.
    3. `bank`에 바꾼 염기가 있는지, 있다면 이미 확인한 적이 있는 염기인지 확인한다.
    4. `bank`에 새로운 염기가 있으며 이전에 확인한 적이 없는 염기라면 큐에 추가하고 방문처리한다.
3. 반복문이 끝났다면 `-1`을 반환한다.

## 코드
### Python
```python
from collections import deque


class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank: return -1

        que = deque([(startGene, 0)])
        chk = dict()

        for seq in bank:
            chk[seq] = False

        while que:
            gene, step = que.popleft()
            if gene == endGene: return step

            for i in range(len(gene)):
                for base in ('A', 'T', 'G', 'C'):
                    if gene[i] != base:
                        nextGene = gene[:i] + base + gene[i + 1:]
                        if nextGene in chk and not chk[nextGene]:
                            que.append((nextGene, step + 1))
                            chk[nextGene] = True

        return -1
```

### Java
```java
class Solution {
    public int minMutation(String startGene, String endGene, String[] bank) {
        if (!Arrays.asList(bank).contains(endGene)) {
            return -1;
        }

        Queue<String> que = new LinkedList<>();
        Set<String> chk = new HashSet<>();
        char[] base = {'A', 'T', 'G', 'C'};
        List<String> vault = Arrays.asList(bank);

        int result = 0;

        chk.add(startGene);
        que.add(startGene);

        while (!que.isEmpty()) {
            for (int i = que.size(); i > 0; i--) {
                String now = que.poll();
                if (now.equals(endGene)) {
                    return result;
                }
                char[] chrs = now.toCharArray();

                for (int j = 0; j < 8; j++) {
                    char original = chrs[j];

                    for (char c: base) {
                        chrs[j] = c;
                        String nextGene = new String(chrs);
                        if (!chk.contains(nextGene) && vault.contains(nextGene)) {
                            chk.add(nextGene);
                            que.add(nextGene);
                        }
                    }

                    chrs[j] = original;
                }
            }
            result++;
        }
        return -1;
    }
}
```