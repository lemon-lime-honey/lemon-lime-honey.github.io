---
layout: post
title:  전자계
author: bs
date: '2024-01-13 18:56:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 변위전류밀도
시간에 대해 변화하는 전속밀도에 의한 전류<br>
$i_{d}=\dfrac{I}{S}=\dfrac{\partial{D}}{\partial{t}}=\varepsilon\dfrac{\partial{E}}{\partial{t}} [\textsf{A/m}^2]$

# 맥스웰 방정식
1. 패러데이-렌츠의 법칙<br>
    $\nabla\times E=-\dfrac{\partial{B}}{\partial{t}}$
2. 앙페르 법칙<br>
    $\nabla\times H=J +\dfrac{\partial{D}}{\partial{t}}$
3. 가우스 법칙<br>
    $\nabla\cdot D=\rho$
4. 가우스 법칙(자기장)<br>
    $\nabla\cdot B=0$
- 연속방정식<br>
    $\nabla\cdot J=-\dfrac{\partial{\rho}}{\partial{t}}$

# 고유(파동, 특성) 임피던스
$Z_{0}=\dfrac{E}{H}=\sqrt{\dfrac{\mu}{\varepsilon}}=\sqrt{\dfrac{\mu_{0}}{\varepsilon_{0}}}\sqrt{\dfrac{\mu_{s}}{\varepsilon_{s}}}=377\sqrt{\dfrac{\mu_{s}}{\varepsilon_{s}}} [\Omega]$
1. 전송회로 특성 임피던스<br>
    $Z_{0}=\dfrac{V}{I}=\sqrt{\dfrac{Z}{Y}}=\sqrt{\dfrac{R+j\omega L}{G+j\omega C}}\fallingdotseq \sqrt{\dfrac{L}{C}} [\Omega]$
2. 동축케이블의 특성 임피던스<br>
    $Z_{0}=\sqrt{\dfrac{\mu}{\varepsilon}}\cdot\dfrac{1}{2\pi}\ln{\dfrac{b}{a}}=138\sqrt{\dfrac{\mu_{s}}{\varepsilon_{s}}}\log{\dfrac{b}{a}} [\Omega]$

# 전파(위상) 속도
$v=\dfrac{1}{\sqrt{LC}}=\dfrac{1}{\sqrt{\varepsilon\mu}}=\dfrac{3\times 10^{8}}{\sqrt{\varepsilon_{s}\mu_{s}}} [\textsf{m/s}]$

# 파장
$\lambda =\dfrac{c}{f}=\dfrac{1}{f\sqrt{\mu\varepsilon}} [\textsf{m}]$ ($c$: 광속)

# 포인팅 벡터
$P=E\times H=EH\sin\theta =EH\sin{90^{\circ}}=EH=377H^{2}=\dfrac{1}{377}E^{2} [\textsf{W/m}^2]$