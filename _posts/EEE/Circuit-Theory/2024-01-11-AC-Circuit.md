---
layout: post
title:  교류회로
author: bs
date: '2024-01-11 19:18:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# 교류의 표시
1. 순시값: $i(t)=I_{m}\sin{\left(\omega t+\theta\right)}[\textsf{A}]$
2. 평균값: $I_{av}=\dfrac{1}{T}\int^{T}_{0} |i(t)|\,dt\ =\dfrac{1}{\dfrac{T}{2}}\int^{\frac{T}{2}}_{0} i(t)\,dt\ $
3. 실효값: $I=\sqrt{\dfrac{1}{T}\int^{T}_{0} i^{2} \,dt} = \sqrt{(\text{1주기 동안의 }i^{2}\text{의 평균})^{2}}$

# 교류의 페이저 표시
1. 정현파 교류를 크기와 위상으로 표시: $v=v_{m}\sin{\left(\omega t+\theta \right)}$
2. 페이저 표시: $V=\dfrac{v_{m}}{\sqrt{2}}\angle \theta$

# 각 파형의 실효값 및 평균값

| 구분 | 실효값 | 평균값 |
| --- | --- | --- |
| 정현파 | $\dfrac{I_{m}}{\sqrt{2}}$ | $\dfrac{2}{\pi}I_{m}$ |
| 정현전파 | $\dfrac{I_{m}}{\sqrt{2}}$ | $\dfrac{2}{\pi}I_{m}$ |
| 정현반파 | $\dfrac{I_{m}}{2}$ | $\dfrac{1}{\pi}I_{m}$ |
| 삼각파 | $\dfrac{I_{m}}{\sqrt{3}}$ | $\dfrac{I_{m}}{2}$ |
| 톱니파 | $\dfrac{I_{m}}{\sqrt{3}}$ | $\dfrac{I_{m}}{2}$ |
| 구형파 | $I_{m}$ | $I_{m}$ |
| 구형반파 | $\dfrac{I_{m}}{\sqrt{2}}$ | $\dfrac{I_{m}}{2}$ |

# 파고율과 파형률
1. 파고율(Crest Factor): $\dfrac{\left(\text{최대값} \right)}{\left(\text{실효값} \right)}$ $\left(\text{실효값의 분모값} \rightarrow \text{반파정류가 가장 크다} \right)$
2. 파형률(Form Factor): $\dfrac{\left(\text{실효값}\right)}{\left(\text{평균값}\right)}$