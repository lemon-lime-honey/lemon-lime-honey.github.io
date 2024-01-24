---
layout: post
title:  과도현상
author: bs
date: '2024-01-24 16:03:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# $R-L$ 직렬회로

| $R-L$ 직렬회로 | 직류 기전력 인가 시(S/W On) | 직류 기전력 인가 시(S/W Off) |
| --- | :---: | :---: |
| 전류 $i\left(t\right)$ | $i\left(t\right)=\dfrac{E}{R}\left(1-e^{-\frac{R}{L}t}\right)$ | $i\left(t\right)=\dfrac{E}{R}e^{-\frac{R}{L}t}$ |
| 특성근 | $P=-\dfrac{R}{L}$ | $P=-\dfrac{R}{L}$ |
| 시정수 | $\tau =\dfrac{L}{R} [\textsf{sec}]$ | $\tau =\dfrac{L}{R} [\textsf{sec}]$ |
| $V_{R}$ | $V_{R}=E\left(1-e^{-\frac{R}{L}t}\right) [\textsf{V}]$ |  |
| $V_{L}$ | $V_{L}=Ee^{-\frac{R}{L}t}[\textsf{V}]$ |  |

# $R-C$ 직렬회로

| $R-C$ 직렬회로 | 직류 기전력 인가 시(S/W On) | 직류 기전력 인가 시(S/W Off) |
| --- | :---: | :---: |
| 전하 $q\left(t\right)$ | $q\left(t\right)=CE\left(1-e^{-\frac{1}{RC}t}\right)$ | $q\left(t\right)=CEe^{-\frac{1}{RC}t}$ |
| 전류 $i\left(t\right)$ | $ i=\dfrac{E}{R}e^{-\frac{1}{RC}t} [\textsf{A}] $<br> (충전) | $i=-\dfrac{E}{R}e^{-\frac{1}{RC}t} [\textsf{A}]$<br> (방전) |
| 특성근 | $P=-\dfrac{1}{RC}$ | $P=-\dfrac{1}{RC}$ |
| 시정수 | $\tau =RC [\textsf{sec}]$ | $\tau =RC [\textsf{sec}]$ |
| $V_{R}$ | $V_{R}=Ee^{-\frac{1}{RC}t} [\textsf{V}]$ |  |
| $V_{C}$ | $V_{C}=E\left(1-e^{-\frac{1}{RC}t}\right) [\textsf{V}]$ |  |

# $R-L-C$ 직렬회로
1. 과제동
    - $R>2\sqrt{\dfrac{L}{C}}$
    - 서로 다른 두 실근
2. 임계 제동
    - $R=2\sqrt{\dfrac{L}{C}}$
    - 중근
3. 부족제동
    - $R<2\sqrt{\dfrac{L}{C}}$
    - 서로 다른 두 허근

# $L-C$ 직렬회로
1. $i=\dfrac{E}{\sqrt{\dfrac{L}{C}}}\sin{\dfrac{1}{\sqrt{LC}}}t [\textsf{A}]$ :arrow_right: 불변의 진동전류
2. $V_{L}=L\dfrac{di}{dt}=E\cos{\dfrac{1}{\sqrt{LC}}t} [\textsf{V}]$ :arrow_right: 최소: $-E$, 최대: $E$
3. $V_{C}=E-V_{L}=E\left(1-\cos{\dfrac{1}{\sqrt{LC}}t}\right) [\textsf{V}]$ :arrow_right: 최소: $0$, 최대: $2E$

# 과도상태
1. 과도상태가 나타나지 않는 위상각: $\theta =\tan^{-1}{\dfrac{X}{R}}$
2. 과도상태가 나타나지 않는 $R$ 값: $R=\sqrt{\dfrac{L}{C}}$
- 과도현상은 시정수가 클 수록 오래 지속된다.