---
layout: post
title:  비정현파 교류
author: bs
date: '2024-01-13 19:40:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 비정현파의 푸리에 변환
$\left(\text{비정현파 교류}\right)=\left(\text{직류분}\right)+\left(\text{기본파}\right)+\left(\text{고조파}\right)$
1. 비정현파: {::nomarkdown}$f\left(t\right)=a_{0}+\sum_{n=1}^{\infty}{a_{n}\cos{n\omega t}}+\sum_{n=1}^{\infty}{b_{n}\sin{n\omega t}}${:/}
2. 직류분: {::nomarkdown}$a_{0}=\dfrac{1}{2\pi}\int_{0}^{2\pi}{f\left(\omega t\right)d\left(\omega t\right)}${:/}
3. $\cos$항: {::nomarkdown}$a_{n}=\dfrac{1}{\pi}\int_{0}^{2\pi}{f\left(\omega t\right)\cos{n\omega t}d\left(\omega t\right)}${:/}
4. $\sin$항: {::nomarkdown}$b_{n}=\dfrac{1}{\pi}\int_{0}^{2\pi}{f\left(\omega t\right)\sin{n\omega t}d\left(\omega t\right)}${:/}

# 여러 파형의 푸리에 변환
1. 기함수, 정현대칭, 원점대칭: $\sin$항($n$: 정수)
    - $f\left(t\right)=-f\left(-t\right)$
    - $a_{0}=0$, $a_{n}=0$
    - {::nomarkdown}$f\left(t\right)=\sum_{n=1}^{\infty}{b_{n}\sin{n\omega t}}${:/}
2. 우함수, 여현대칭, Y축대칭: $\cos$항($n$: 정수)
    - $f\left(t\right)=f\left(-t\right)$
    - $b_{n}=0$
    - {::nomarkdown}$f\left(t\right)=a_{0}+\sum_{n=1}^{\infty}{a_{n}\cos{n\omega t}}${:/}
3. 구형파/삼각파/반파대칭: $\sin$항과 $\cos$항($n$: 홀수)
    - $f\left(t\right)=-f\left(t+\pi\right)$
    - $a_{0}=0$
    - {::noxmarkdown}$f\left(t\right)=\sum_{n=1}^{\infty}{a_{n}\cos{n\omega t}}+\sum_{n=1}^{\infty}{b_{n}\sin{n\omega t}}${:/} ($n=1, 3, 5, ..., 2n-1$)

# 비정현파의 실효값 :arrow_right: 직류분 존재
{::nomarkdown}$V_{rms}=\sqrt{V_{0}^{2}+V_{1}^{2}+V_{2}^{2}+...+V_{n}^{2}}${:/}

# 왜형률 :arrow_right: 직류분 없음
{::nomarkdown}$\left(\text{왜형률}\right)=\dfrac{\left(\text{전고조파의 실효값}\right)}{\left(\text{기본파의 실효값}\right)}=\dfrac{\sqrt{V_{2}^{2}+V_{3}^{2}+...+V_{n}^{2}}}{V_{1}}${:/}

# 비정현파의 전력
1. 유효 전력: {::nomarkdown}$P=V_{0}I_{0}+\sum_{n=1}^{\infty}{V_{n}I_{n}\cos{\theta_{n}}} [\textsf{W}]${:/}
2. 무효 전력: {::nomarkdown}$P_{r}=\sum_{n=1}^{\infty}{V_{n}I_{n}\sin{\theta_{n}}} [\textsf{VAR}]${:/}
3. 피상 전력: {::nomarkdown}$P_{a}=VI [\textsf{VA}]${:/}

# 비정현파의 임피던스
1. $R-L$ 직렬회로<br>
    $Z_{1}=R+j\omega L=\sqrt{R^{2}+\left(\omega L\right)^2}$<br>
    $\vdots$<br>
    $Z_{n}=R+jn\omega L=\sqrt{R^{2}+\left(n\omega L\right)^{2}}$
2. $R-C$ 직렬회로<br>
    $Z_{1}=R-j\dfrac{1}{\omega C}=\sqrt{R^{2}+\left(\dfrac{1}{\omega C}\right)^{2}}$<br>
    $\vdots$<br>
    $Z_{n}=R-j\dfrac{1}{n\omega C}=\sqrt{R^{2}+\left(\dfrac{1}{n\omega C}\right)^2}$
3. $R-L-C$ 직렬회로<br>
    $Z_{1}=R+j\left(\omega L -\dfrac{1}{\omega C}\right)=\sqrt{R^{2}+\left(\omega L-\dfrac{1}{\omega C}\right)^{2}}$<br>
    $\vdots$<br>
    $Z_{n}=R+j\left(n\omega L -\dfrac{1}{n\omega C}\right)=\sqrt{R^{2}+\left(n\omega L-\dfrac{1}{n\omega C}\right)^{2}}$
- $I_{3}\left(\text{3고조파}\right)=\dfrac{V_{3}\left(\text{3고조파}\right)}{Z_{3}\left(\text{3고조파}\right)}$