---
layout: post
title:  기본 교류회로
author: bs
date: '2024-01-11 21:08:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# R, L, C (단일소자)
1. 저항 $R$
    1. 전압, 전류 동위상
    2. $Z=R$
2. 인덕턴스 $L$
    1. 전압의 위상이 전류의 위상보다 $90^\circ$ 앞선다. (유도성)
    2. $Z=j\omega L$
    3. $V_{L}=L\dfrac{di}{dt}$, $i=\dfrac{1}{L}\int V_{L} \,dt $: 전류가 급격하게 변하지 않는다.
3. 커패시턴스 $C$
    1. 전류의 위상이 전압의 위상보다 $90^\circ$ 앞선다. (용량성)
    2. $Z=\dfrac{1}{j\omega C}$
    3. $i=C\dfrac{dv}{dt}$, $v=\dfrac{1}{C}\int i \,dt $: 전압이 급격하게 변하지 않는다.

# R-L-C 직렬회로

| 종류 | 임피던스 | 임피던스의 크기 | 임피던스의 위상 | 전압 |
| --- | --- | --- | --- | --- |
| $R-L$ 직렬회로 | $Z=R+j\omega L=R+jX_{L}$ | $Z=\sqrt{R^{2}+X_{L}^{2}}=\sqrt{R^{2}+\left(\omega L \right)^{2}}$ | $\theta =\tan^{-1}{\dfrac{\omega L}{R}}$ | $V=V_{R}+V_{L}$ |
| $R-C$ 직렬회로 | $Z=R-j\dfrac{1}{\omega C}=R-jX_{C}$ | $Z=\sqrt{R^{2}+X_{C}^{2}}=\sqrt{R^{2}+\left(\dfrac{1}{\omega C}\right)^{2}}$ | $\theta =-\tan^{-1}{\dfrac{1}{\omega RC}}$ | $V=V_{R}+V_{C}$ |
| $R-L-C$ 직렬회로 | $Z=R+j\left(X_{L}-X_{C} \right)=R+j\left(\omega L-\dfrac{1}{\omega C}\right)$ | $Z=\sqrt{R^{2}+\left(X_{L}-X_{C} \right)^{2}}=\sqrt{R^{2}+\left(\omega L-\dfrac{1}{\omega C} \right)^{2}}$ | $\theta =\tan^{-1}{\dfrac{\left(\omega L-\dfrac{1}{\omega C} \right)}{R}}$ | $V=V_{R}+V_{L}+V_{C}$ |

# R-L-C 병렬회로

| 종류 | 어드미턴스 | 어드미턴스의 크기 | 어드미턴스의 위상 | 전류 |
| --- | --- | --- | --- | --- |
| $R-L$ 병렬회로 | $Y=\dfrac{1}{R}-j\dfrac{1}{X_{L}}=\dfrac{1}{R}-j\dfrac{1}{\omega L}$ | $Y=\sqrt{\left(\dfrac{1}{R} \right)^{2}+\left(\dfrac{1}{\omega L} \right)^{2}}$ | $\theta =-\tan^{-1}{\dfrac{R}{\omega L}}$ | $I=I_{R}+I_{L}$ |
| $R-C$ 병렬회로 | $Y=\dfrac{1}{R}+j\dfrac{1}{X_{C}}=\dfrac{1}{R}+j\omega C$ | $Y=\sqrt{\left(\dfrac{1}{R} \right)^{2}+\left(\dfrac{1}{\omega C} \right)^{2}}=\sqrt{\left(\dfrac{1}{R}\right)^{2}+\left(\omega C \right)^{2}}$ | $\theta =\tan^{-1}{\omega RC}$ | $I=I_{R}+I_{C}$ |
| $R-L-C$ 병렬회로 | $Y=\dfrac{1}{R}+j\left(\omega C-\dfrac{1}{\omega L} \right)$ | $Y=\sqrt{\left(\dfrac{1}{R} \right)^{2}+\left(\omega C-\dfrac{1}{\omega L} \right)^{2}}$ | $\theta =\tan^{-1}{R\left(\omega C-\dfrac{1}{\omega L}\right)}$ | $I=I_{R}+I_{L}+I_{C}$ |

# 공진회로

| 구분 | 직렬공진 | 병렬공진(반공진) |
| --- | --- | --- |
| 공진조건 | $\omega_{r}L=\dfrac{1}{\omega_{r}C}$ | $\omega_{r}C=\dfrac{1}{\omega_{r}L}$ |
| 공진주파수 | $f_{r}=\dfrac{1}{2\pi\sqrt{LC}}$ | $f_{r}=\dfrac{1}{2\pi\sqrt{LC}}$ |
| 임피던스 | 최소 | 최대 |
| 전류 | 최대 | 최소 |

- 일반적인 병렬공진회로 ($R-L$ 직렬, $C$ 병렬)
    - $Y=\dfrac{R}{R^{2}+\left(\omega L\right)^{2}}=\dfrac{RC}{L}$
    - $f_{r}=\dfrac{1}{2\pi}\sqrt{\dfrac{1}{LC}-\left(\dfrac{R}{L} \right)^{2}}$
    - $X_{C}=\dfrac{R^{2}+\left(\omega L \right)^2}{\omega L}$

# 선택도(첨예도)
1. 직렬공진: $Q=\dfrac{1}{R}\sqrt{\dfrac{L}{C}}$
2. 병렬공진: $Q=R\sqrt{\dfrac{C}{L}}$