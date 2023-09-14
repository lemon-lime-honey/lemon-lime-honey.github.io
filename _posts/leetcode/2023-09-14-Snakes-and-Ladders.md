---
layout: post
title:  Snakes and Ladders
author: bs
date: '2023-09-14 20:35:00 +0900'
category: leetcode
tags: [leetcode, medium, 알고리즘, pre-ob-be_4-1]
---

# [LeetCode 909. Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)

## 원문
You are given an `n x n` integer matrix `board` where the cells are labeled from `1` to <code>n<sup>2</sup></code> in a [**Boustrophedon style**](https://en.wikipedia.org/wiki/Boustrophedon) starting from the bottom left of the board (i.e. `board[n - 1][0]`) and alternating direction each row.

You start on square `1` of the board. In each move, starting from square `curr`, do the following:

- Choose a destination square `next` with a label in the range <code>[curr + 1, min(curr + 6, n<sup>2</sup>)]</code>.
    - This choice simulates the result of a standard **6-sided die roll**: i.e., there are always at most 6 destinations, regardless of the size of the board.
- If `next` has a snake of ladder, you **must** move to the destination of that snake or ladder. Otherwise, you move to `next`.
- The game ends when you reach the square <code>n<sup>2</sup></code>.

A board square on row `r` and column `c` has a snake or ladder if `board[r][c] != -1`. The destination of that snake or ladder is `board[r][c]`. Squares `1` and <code>n<sup>2</sup></code> do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do **not** follow the subsequent snake or ladder.

- For example, suppose the board is `[[-1, 4], [-1, 3]]`, and on the first move, your destination square is `2`. You follow the ladder to square `3`, but do **not** follow the subsequent ladder to `4`.

Return *the least number of moves required to reach the square* <code>n<sup>2</sup></code>. *If it is not possible to reach the square, return* `-1`.

## 낯익다, 하지만 다르다.
[백준 온라인 저지 16928번 뱀과 사다리 게임](https://www.acmicpc.net/problem/16928)

## 낯익지만 다른 문제를 풀었던 방법으로 변형해보자
2차원 배열인 보드를 1차원으로 만들어준다.<br>
반복문을 돌며 보드를 마지막 줄부터 읽어들이는데, 한 행을 정방향으로 붙였다면 다음 행은 역방향으로 붙인다.

보드를 1차원으로 만들었다면 방문 처리 및 이동 횟수를 저장하기 위한 길이가 `n**2+1`인 1차원 배열 `visited`를 생성하는데, 모든 원소를 `int(1e9)`로 초기화한다.<br>
큐에 초기 위치인 1을 추가하고, `visited[1]`의 값을 `0`으로 바꿔준 다음 BFS를 수행하면 된다.<br>
사다리 혹은 뱀을 만났을 때에는 큐에 값을 추가할 때 사다리 또는 뱀의 도착지점을 추가해준다.

### 코드
```python
from collections import deque


class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        newboard = [0]
        for i in range(n):
            if i % 2:
                newboard.extend(board[n - 1 - i][::-1])
            else:
                newboard.extend(board[n - 1 - i])
        visited = [int(1e9) for i in range(n ** 2 + 1)]
        que = deque([1])
        visited[1] = 0

        while que:
            point = que.popleft()

            for i in range(1, 7):
                next_point = point + i
                if next_point < n ** 2 + 1:
                    if newboard[next_point] != -1:
                        next_point = newboard[next_point]
                    if visited[next_point] > visited[point] + 1:
                        visited[next_point] = visited[point] + 1
                        que.append(next_point)

        return -1 if visited[n ** 2] == int(1e9) else visited[n ** 2]
```

## 다른 방법?
2차원 배열을 1차원으로 만들지 않고, 행을 뒤집은 후 홀수행인지 짝수행인지에 따라 다르게 취급한다.<br>
보드에 적힌 숫자 `number`가 있을 때 행은 `(number - 1) // n`, 열은 `(number - 1) % n`이다. 이때 홀수 행(행 번호는 0부터 시작한다고 하자)이면 이미 구했던 열의 값을 `c`라고 했을 떄 열의 값을 `n - 1 - c`로 바꿔준다.<br>
그 다음은 이전 방법과 비슷하게 BFS를 수행하면 된다.

### 코드
```python
from collections import deque


class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        def conversion(number):
            r = (number - 1) // n
            c = (number - 1) % n
            if r % 2: c = n - 1 - c

            return (r, c)


        board = board[::-1]
        n = len(board)
        que = deque([1])
        visited = [int(1e9) for i in range(n ** 2 + 1)]
        visited[1] = 0
        
        while que:
            now = que.popleft()

            for i in range(1, 7):
                point = now + i
                nr, nc = conversion(point)

                if 0 <= nr < n and 0 <= nc < n:
                    if board[nr][nc] != -1:
                        point = board[nr][nc]
                    if point == n ** 2: return visited[now] + 1
                    if visited[point] > visited[now] + 1:
                        visited[point] = visited[now] + 1
                        que.append(point)

        return -1
```