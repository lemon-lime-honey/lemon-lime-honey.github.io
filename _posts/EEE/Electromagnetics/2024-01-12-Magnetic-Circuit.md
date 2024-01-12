---
layout: post
title:  자성체와 자기회로
author: bs
date: '2024-01-12 19:56:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 자성체
자계 내에 놓았을 때 자석화되는 물질

# 자화의 세기
$J=\mu_{0}\left(\mu_{s}-1 \right)H=\chi H=\left(1-\dfrac{1}{\mu_s} \right)B=\dfrac{M}{v}[\textsf{Wb/m}^2]$<br>
(단, 자기모멘트 $M=m\delta [\textsf{Wb}\cdot\textsf{m}]$)

# 자속밀도
$B=\mu H+J [\textsf{Wb/m}^2]$

# 경계조건
1. 자계의 접선성분이 연속: $H_{1}\sin\theta_{1}=H_{2}\sin\theta_{2}$
2. 자속밀도의 법선성분이 연속: $B_{1}\cos\theta_{1}=B_{2}\cos\theta_{2}$
3. $\dfrac{\tan\theta_{2}}{\tan\theta_{1}}=\dfrac{\mu_{2}}{\mu_{1}}$<br>
    ($\mu_{1}>\mu_{2}$ 일 때, $\theta_{1}>\theta_{2}$, $B_{1}>B_{2}$, $H_{1}<H_{2}$)

# 자기저항
$R_{m}=\dfrac{l}{\mu S}=\dfrac{NI}{\phi}=\dfrac{F_{m}}{\phi} [\textsf{AT/Wb}]$<br>
(기자력 $F_{m}=NI=R_{m}\phi$)

# 자기회로의 옴의 법칙
$\phi =\dfrac{F}{R_{m}}=BS=\dfrac{\mu SNI}{l} [\textsf{Wb}]$

# 자계 에너지 밀도
$W_{m}=\dfrac{1}{2}\mu H^2=\dfrac{B^{2}}{2\mu}=\dfrac{1}{2}HB [\textsf{J/m}^3][\textsf{N/m}^2]$