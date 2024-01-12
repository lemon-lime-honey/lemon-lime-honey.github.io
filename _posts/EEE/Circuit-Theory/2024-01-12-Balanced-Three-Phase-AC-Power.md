---
layout: post
title:  대칭 3상 교류
author: bs
date: '2024-01-12 19:44:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# $Y \leftrightarrow \Delta$ 회로의 상호 변환

| $Y \rightarrow \Delta$ 변환 | $\Delta \rightarrow Y$ 변환 |
| --- | --- |
| $Z_{ab}=\dfrac{Z_{a}Z_{b}+Z_{b}Z_{c}+Z_{c}Z_{a}}{Z_{c}} [\Omega]$ | $Z_{a}=\dfrac{Z_{ab}Z_{ca}}{Z_{ab}+Z_{bc}+Z_{ca}} [\Omega]$ |
| $Z_{bc}=\dfrac{Z_{a}Z_{b}+Z_{b}Z_{c}+Z_{c}Z_{a}}{Z_{a}} [\Omega]$ | $Z_{b}=\dfrac{Z_{ab}Z_{bc}}{Z_{ab}+Z_{bc}+Z_{ca}} [\Omega]$ |
| $Z_{ca}=\dfrac{Z_{a}Z_{b}+Z_{b}Z_{c}+Z_{c}Z_{a}}{Z_{b}} [\Omega]$ | $Z_{c}=\dfrac{Z_{bc}Z_{ca}}{Z_{ab}+Z_{bc}+Z_{ca}} [\Omega]$ |

- 저항, 선전류, 소비 전력
    - $Y \rightarrow \Delta$: $3$배
    - $\Delta \rightarrow Y$: $\dfrac{1}{3}$배

# $Y$, $\Delta$ 회로의 특징(대칭 3상)

| $Y$ 결선 특징 | $\Delta$ 결선 특징 |
| --- | --- |
| $V_{l}=\sqrt{3}V_{p}\angle 30^{\circ}$ | $V_{l}=V_{p}$ |
| $I_{l}=I_{p}$ | $I_{l}=\sqrt{3}I_{p}\angle -30^{\circ}$ |

# 3상 전력 계산
1. 유효 전력<br>
    {::nomarkdown}$P=3V_{p}I_{p}\cos\theta =\sqrt{3}V_{l}I_{l}\cos\theta =3I^{2}_{p}R [\textsf{W}]${:/}
2. 무효 전력<br>
    {::nomarkdown}$P_{r}=3V_{p}I_{p}\sin\theta =\sqrt{3}V_{l}I_{l}\sin\theta =3I^{2}_{p}X [\textsf{Var}]${:/}
3. 피상 전력<br>
    {::nomarkdown}$P=3V_{p}I_{p} =\sqrt{3}V_{l}I_{l} =3I^{2}_{p}Z [\textsf{VA}]${:/}
- 주의
    - 3상 회로의 모든 계산은 상을 기준으로 계산하는 것이 일반적이다.
    - 임피던스는 각 상에 있는 것으로 계산한다.
    - 부하에 주는 전압은 대부분 선간전압이다.

# 2전력계법
1. $P=W_{1}+W_{2}$
2. $P_{r}=\sqrt{3}\left(W_{1}-W_{2} \right)$
3. {::nomarkdown}$P_{a}=2\sqrt{W_{1}^{2}+W_{2}^{2}-W_{1}W_{2}}${:/}
4. {::nomarkdown}$\cos\theta=\dfrac{P}{P_{a}}=\dfrac{W_{1}+W_{2}}{2\sqrt{W_{1}^{2}+W_{2}^{2}-W_{1}W_{2}}}${:/}
- 참고
    - $P_{1}=P_{2}$: $\cos\theta = 1$
    - $P_{1}=2P_{2}$: $\cos\theta = 0.866$
    - $P_{1}=3P_{2}$: $\cos\theta = 0.756$

# 대칭 전류와 비대칭 전류
1. 대칭 전류: 원형 회전자계 형성
2. 비대칭 전류: 타원 회전자계 형성

# $V$ 결선
1. 출력: $P=\sqrt{3}VI\cos\theta [\textsf{W}]$
2. 변압기 이용률: $P=\dfrac{\sqrt{3}VI\cos\theta}{2VI\cos\theta}=0.866$
3. 출력비: $P=\dfrac{\sqrt{3}VI\cos\theta}{3VI\cos\theta}=0.577$