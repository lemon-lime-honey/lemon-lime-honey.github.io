---
layout: post
title:  대칭좌표법
author: bs
date: '2024-01-13 19:08:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 불평형회로의 해석

| 대칭성분을 이용한 각 상 표현 | 각 상을 이용한 대칭분 표현 |
| --- | --- |
| {::nomarkdown}$\begin{bmatrix}V_{a} \\ V_{b} \\ V_{c}\end{bmatrix}=\begin{bmatrix}1 & 1 & 1 \\ 1 & a^{2} & a \\ 1 & a & a^{2} \end{bmatrix}\begin{bmatrix}V_{0} \\ V_{1} \\ V_{2} \end{bmatrix}${:/} | {::nomarkdown}$\begin{bmatrix} V_{0} \\ V_{1} \\ V_{2} \end{bmatrix}=\dfrac{1}{3}\begin{bmatrix} 1 & 1 & 1 \\ 1 & a & a^{2} \\ 1 & a^{2} & a\end{bmatrix}\begin{bmatrix} V_{1} \\ V_{b} \\ V_{c} \end{bmatrix}${:/} |

# 불평형률
$\dfrac{[\text{역상분}\left(V_{2} \right)]}{[\textsf{정상분}\left(V_{1} \right)]}$

# 교류 발전기 기본식
1. $V_{0}=-Z_{0}I_{0}$
2. $V_{1}=E_{a}-Z_{1}I_{1}$
3. $V_{2}=-Z_{2}I_{2}$