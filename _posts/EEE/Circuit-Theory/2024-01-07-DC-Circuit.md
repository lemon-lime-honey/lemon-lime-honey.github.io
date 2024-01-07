---
layout: post
title:  직류회로
author: bs
date: '2024-01-07 16:34:00 +0900'
last_modified_at: '2024-01-07 17:31:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

## 전기회로에 필요한 기본적인 전기량 요약

| 구분 | 기호 | 단위 | 직류 | 교류 |
| --- | --- | --- | --- | --- |
| 전하량 | $Q, q$ | $\textsf{C}$ | $Q=I\cdot t$ | $q = \int i\,dt\ $ |
| 전류 | $I, i$ | $\textsf{A}$ | $I=\dfrac{Q}{t}$ | $i=\dfrac{dq}{dt}$ |
| 전압 | $V, v$ | $\textsf{V}$ | $V=\dfrac{W}{Q}$ | $v=\dfrac{dw}{dq}$ |
| 전력 | $P, p$ | $\textsf{W(J/s)}$ | $P=VI$ | $p=vi$ |

- 전지 연결: $E=rI+V=I\left( r+R\right) $

1. 직렬
    1. 기전력 $n$배: $nE$
    2. 내부저항 $n$배: $nr$
2. 병렬
    1. 기전력: $E$
    2. 내부저항: $\dfrac{r}{m}$

## 직, 병렬회로 요약

| 직렬회로(전압분배) | 병렬회로(전류분배) |
| --- | --- |
| $R_{0}=R_{1}+R_{2}$ | $R_{0}=\dfrac{R_{1}R_{2}}{R_{1}+R_{2}}$ |
| $V_{1}=R_{1}I=\dfrac{R_{1}}{R_{1}+R_{2}}V$ | $I_{1}=\dfrac{V}{R_{1}}=\dfrac{R_{2}}{R_{1}+R_{2}}I$ |
| $V_{2}=R_{2}I=\dfrac{R_{2}}{R_{1}+R_{2}}V$ | $I_{2}=\dfrac{V}{R_{2}}=\dfrac{R_{1}}{R_{1}+R_{2}}I$ |