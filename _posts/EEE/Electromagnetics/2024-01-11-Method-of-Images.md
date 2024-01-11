---
layout: post
title:  전기영상법
author: bs
date: '2024-01-11 15:31:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 영상전하법
1. 평면도체와 점전하<br>
    평면도체로부터 거리가 $d [\textsf{m}]$인 곳에 점전하 $Q [\textsf{C}]$가 있는 경우
    1. 영상전하 $Q'=-Q[\textsf{C}]$
    2. 평면과 점전하 사이의 힘 $F=-\dfrac{Q'Q}{4\pi\varepsilon_{0}\left(2d \right)^{2}}=-\dfrac{Q^2}{16\pi\varepsilon_{0}d^{2}}[\textsf{N}]$
    3. 일 $W=\dfrac{Q^{2}}{16\pi\varepsilon_{0}d} [\textsf{J}]$
2. 평면도체와 선전하<br>
    평면도체와 $h [\textsf{m}]$ 떨어진 평행한 무한장 직선도체에 $\rho [\textsf{C/m}]$의 선전하가 주어졌을 때, 직선 도체의 단위 길이당 받는 힘<br>
    $F=-\rho E=-\rho\cdot\dfrac{\rho}{2\pi\varepsilon_{0}\left(2h\right)}=-\dfrac{\rho^{2}}{4\pi\varepsilon_{0}h} [\textsf{N/m}]$

# 접지도체구
반지름이 $a$인 접지도체구의 중심으로부터 거리가 $d(>a)$인 점에 점전하 $Q[\textsf{C}]$가 있는 경우
1. 영상전하의 크기: $Q'=-\dfrac{a}{d}Q$
2. 영상전하의 위치: $b=\dfrac{a^2}{d}$
3. 접지도체구와 점전하 사이에 작용하는 힘: $F=-\dfrac{adQ^{2}}{4\pi\varepsilon_{0}\left(d^{2}-a^{2} \right)^{2}}$: 항상 흡인력