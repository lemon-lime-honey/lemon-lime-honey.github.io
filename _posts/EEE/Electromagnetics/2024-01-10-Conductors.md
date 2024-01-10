---
layout: post
title:  진공 중의 도체계
author: bs
date: '2024-01-10 23:24:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 전위계수와 용량계수
1. 전위계수
    1. 도체의 크기, 주위 매질, 배치 상태의 영향을 받는다.
    2. $P=\dfrac{V}{Q}[\textsf{V/C}]=[\textsf{1/F}]=[\textsf{daraf}]$
    3. $P_{rr}, P_{ss}>0$
    4. $P_{rs}, P_{sr}\ge 0$
    5. $P_{rs}=P_{sr}$
    6. $P_{rr}\ge P_{rs}$
    - 정전차폐의 경우
        - $P_{11}=P_{21}$: 도체 2가 도체 1 속에 있다.
        - $P_{bc}=0$: 도체 $b$와 도체 $c$ 사이의 유도계수는 0이므로 타 도체에 의해 정전차폐가 되어 있다.
2. 용량계수와 유도계수
    1. 용량계수: $q_{rr}, q_{ss}>0$
    2. 유도계수: $q_{rs}, q_{sr}\le 0$
    3. $q_{rs}=q_{sr}$
    4. $q_{rr}=-(q_{r1}+q_{r2}+...+q_{rn})$

# 정전 용량
1. 구도체<br>
    $C=4\pi\varepsilon _{0}a[\textsf{F}]$ ($a$는 반지름)
2. 동심구<br>
    $C=\dfrac{4\pi\varepsilon _{0}ab}{b-a}[\textsf{F}]$ (단, $a$, $b$는 반지름, $a<b$)
3. 동축케이블(원통)<br>
    $C=\dfrac{2\pi\varepsilon _{0}}{\ln{\dfrac{b}{a}}}[\textsf{F/m}]$ (단, $a$, $b$는 반지름, $a<b$)
4. 평행왕복도선<br>
    $C=\dfrac{\pi\varepsilon _{0}}{\ln{\dfrac{d}{a}}}[\textsf{F/m}]$ ($a$는 반지름, $d$는 두 원의 중심 간의 거리)
5. 평행판 콘덴서<br>
    $C=\dfrac{\varepsilon _{0}S}{d}[\textsf{F}]$

# 정전 에너지
$W=\dfrac{1}{2}QV=\dfrac{1}{2}CV^2 [\textsf{V}]$(충전 중, $V$ 일정)$=\dfrac{Q^2}{2C}[\textsf{J}]$ (충전 후, $Q$ 일정)

# 콘덴서 연결
1. 직렬연결<br>
    $C_{0} = \dfrac{C_{1}C_{2}}{C_{1}+C_{2}}$
    - $Q=CV$
    - 내압이 같은 경우 정전 용량이 작은 콘덴서($\rightarrow$ 총전하량이 작다)부터 파괴
    - 내압이 다른 경우 총전하량이 작은 콘텐서부터 파괴
2. 병렬연결<br>
    $C_{0}=C_{1}+C_{2}$<br>
    $V=\dfrac{C_{1}V_{1}+C_{2}V_{2}}{C_{1}+C_{2}}$