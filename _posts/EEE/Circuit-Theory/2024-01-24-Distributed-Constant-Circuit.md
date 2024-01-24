---
layout: post
title:  분포정수회로
author: bs
date: '2024-01-24 15:41:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# 분포정수회로
1. 직렬 임피던스: $Z=R+j\omega L$
2. 병렬 어드미턴스: $Y=G+j\omega C$
3. 특성 임피던스: $Z_{0}=\sqrt{\dfrac{Z}{Y}}=\sqrt{\dfrac{R+j\omega L}{G+j\omega C}}$
4. 전파정수: $\gamma =\sqrt{ZY}=\sqrt{\left(R+j\omega L\right)\left(G+j\omega C\right)}=\alpha +j\beta$ ($\alpha$: 감쇠정수, $\beta$: 위상정수)

# 무손실 선로와 무왜형 선로

| 구분 | 무손실 선로 | 무왜형 선로 |
| --- | :---: | :---: |
| 조건 | $R=G=0$ | $RC=LG$ |
| 특성 임피던스 | $Z_{0}=\sqrt{\dfrac{Z}{Y}}=\sqrt{\dfrac{L}{C}}$ | $Z_{0}=\sqrt{\dfrac{Z}{Y}}=\sqrt{\dfrac{L}{C}}$ |
| 전파정수 | $\gamma=\sqrt{ZY}$<br> $\alpha=0$<br> $\beta=\omega\sqrt{LC}[\textsf{rad/m}]$<br> $\qquad \qquad \quad [\textsf{rad/km}]$ | $\gamma =\sqrt{ZY}$<br> $\alpha=\sqrt{RG}$<br> $\beta =\omega\sqrt{LC} [\textsf{rad/m}]$<br> $\qquad \qquad \quad [\textsf{rad/km}]$ |
| 위상속도 | $v=\dfrac{\omega}{\beta}=\dfrac{\omega}{\omega\sqrt{LC}}=\dfrac{1}{\sqrt{LC}}$ | $v=\dfrac{\omega}{\beta}=\dfrac{\omega}{\omega\sqrt{LC}}=\dfrac{1}{\sqrt{LC}}$ |

# 반사계수와 투과계수
1. 반사계수: $\dfrac{\left(\text{반사파}\right)}{\left(\text{입사파}\right)}=\dfrac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}}=\dfrac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}$
2. 투과계수: $\dfrac{\left(\text{투과파}\right)}{\left(\text{입사파}\right)}=\dfrac{2Z_{L}}{Z_{0}+Z_{L}}=\dfrac{2Z_{2}}{Z_{1}+Z_{2}}$
3. 정재파비: $\dfrac{1+\|\rho\|}{1-\|\rho\|}$ ($\rho$: 반사계수)