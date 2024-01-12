---
layout: post
title:  전자유도
author: bs
date: '2024-01-12 20:04:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 패러데이의 전자유도 법칙
1. $e=-N\dfrac{d\phi}{dt} [\textsf{V}]$, $\phi =\phi_{m}\sin{\omega t}$
2. $e=\omega N\phi_{m}\sin{\left(\omega t-\dfrac{\pi}{2} \right)}$
    - 기전력의 위상은 자속의 위상보다 $90^{\circ}$ 늦다.

# 전자유도 법칙의 미분형과 적분형
1. 적분형<br>
    {::nomarkdown}$e=\oint_{c} E\cdot dl=-\dfrac{d}{dt}\int_{s}B\cdot dS=-\dfrac{d\phi}{dt} [\textsf{V}]${:/}
2. 미분형<br>
    {::nomarkdown}$\text{rot}E=-\dfrac{dB}{dt}${:/}

# 표피효과
1. 도선의 중심부로 갈 수록 전류밀도가 작아지는 현상
2. 침투깊이: 침투깊이가 작을 수록 표피효과가 커진다.<br>
    $\delta =\sqrt{\dfrac{2}{\omega\mu k}}=\sqrt{\dfrac{1}{\pi f\mu k}}$