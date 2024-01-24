---
layout: post
title:  고장계산
author: bs
date: '2024-01-24 19:15:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 옴법
1. 단락 전류: $I_{s}=\dfrac{E}{Z}=\dfrac{E}{\sqrt{R^{2}+X^{2}}}[\textsf{A}]$
2. 단락 용량: $P_{s}=3EI_{s}=\sqrt{3}VI_{s}[\textsf{VA}]$

# 단위법
1. $\%Z=\dfrac{I_{n}Z}{E}\times 100=\dfrac{PZ}{10V^{2}}[\textsf{\%}]$
2. 단락 전류: $I_{s}=\dfrac{100}{\%Z}I_{n}[\textsf{A}]$
3. 단락 용량: $P_{s}=\dfrac{100}{\%Z}P_{n}[\textsf{MVA}]$ ($P_{n}$: 기준 용량)

# 대칭좌표법
불평형 전압 또는 불평형 전류를 3상(영상분, 정상분, 역상분)으로 나누어 계산
1. 대칭좌표법
    1. 대칭 성분
        - 영상분: $V_{0}=\dfrac{1}{3}\left(V_{a}+V_{b}+V_{c}\right)$
        - 정상분: $V_{1}=\dfrac{1}{3}\left(V_{a}+aV_{b}+a^{2}V_{c}\right)$
        - 역상분: $V_{2}=\dfrac{1}{3}\left(V_{a}+a^{2}V_{b}+aV_{c}\right)$
    2. 각상 성분
        - $V_{a}=\left(V_{0}+V_{1}+V_{2}\right)$
        - $V_{b}=\left(V_{0}+a^{2}V_{1}+aV_{2}\right)$
        - $V_{c}=\left(V_{0}+aV_{1}+a^{2}V_{2}\right)$
2. 교류 발전기 기본 공식<br>
    $V_{0}=-Z_{0}I_{0}$, $V_{1}=E_{a}-Z_{1}I_{1}$, $V_{2}=-Z_{2}I_{2}$
3. 1선 지락사고
    1. 대칭분: $I_{0}=I_{1}=I_{2}$
    2. 지락전류: $I_{g}=3I_{0}=\dfrac{3E_{a}}{Z_{0}+Z_{1}+Z_{2}}$
4. 기기별 임피던스의 관계
    1. 변압기: $Z_{0}=Z_{1}=Z_{2}$
    2. 송전 선로: $Z_{0}>Z_{1}=Z_{2}$