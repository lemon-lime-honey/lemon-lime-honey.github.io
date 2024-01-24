---
layout: post
title:  송전 선로 특성값 계산
author: bs
date: '2024-01-24 17:22:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 단거리 송전 선로(50km 이하)
임피던스 $Z$ 존재, 어드미턴스 $Y$는 무시, 집중 정수 회로
1. 3상 송전전압: $V_{S}\fallingdotseq V_{R}+\sqrt{3}I\left(R\cos{\theta}+X\sin{\theta}\right) [\textsf{V}]$
2. 단상 송전전압: $E_{S}\fallingdotseq E_{R}+I\left(R\cos{\theta}+X\sin{\theta}\right) [\textsf{V}]$
3. 전압 강하
    1. $1\phi\left(E=V\right)$: 단상<br>
        $e=E_{s}-E_{r}=V_{s}-V_{r}=RI\cos{\theta}+IX\sin{\theta}=I\left(R\cos{\theta}+X\sin{\theta}\right)$
    2. $3\phi\left(V=\sqrt{3}E\right)$: 3상<br>
        $e=E_{s}-E_{r}=I\left(R\cos{\theta}+X\sin{\theta}\right)=\sqrt{3}E_{s}-\sqrt{3}E_{r}$<br>
        $\quad =V_{s}-V_{r}=\sqrt{3}I\left(R\cos{\theta}+X\sin{\theta}\right)$<br>
        $\quad =\dfrac{P}{V_{r}}\left(R+X\tan{\theta}\right)$
4. 전압 강하율<br>
    $\varepsilon =\dfrac{V_{s}-V_{r}}{V_{r}}\times 100$<br>
    $\quad =\dfrac{e}{V_{r}}\times 100$<br>
    $\quad =\dfrac{P}{V_{r}^{2}}\left(R+X\tan{\theta}\right)\times 100$
5. 전압 변동률<br>
    $\delta =\dfrac{V_{r0}-V_{r}}{V_{r}}\times 100$ ($V_{r0}$: 무부하 수전단 전압, $V_{r}$: 수전단 전압)
6. 전력 손실(선로 손실)<br>
    $P_{l}=3I^{2}R=3\left(\dfrac{P}{\sqrt{3}V\cos{\theta}}\right)^{2}R$ $\left(R=\rho\dfrac{l}{A}\right)$<br>
    $\quad =3\dfrac{P^{2}R}{3V^{2}\cos^{2}{\theta}}=\dfrac{P^{2}R}{V^{2}\cos^{2}{\theta}}=\dfrac{P^{2}\rho l}{V^{2}\cos^{2}{\theta}A}$
7. 전력 손실률<br>
    $K=\dfrac{P_{l}}{P}\times 100=\dfrac{\dfrac{P^{2}R}{V^{2}\cos^{2}{\theta}}}{P}\times 100=\dfrac{PR}{V^{2}\cos^{2}{\theta}}\times 100$

# 중거리 송전 선로(50 ~ 100km)
$Z$, $Y$ 존재, 4단자 정수에 의해 해석, 집중 정수 회로
1. 4단자 정수<br>
    $\begin{bmatrix}E_{s} \\ I_{s} \end{bmatrix}=\begin{bmatrix} A & B \\ C & D \end{bmatrix}\begin{bmatrix} E_{r} \\ I_{r} \end{bmatrix} = \begin{matrix}AE_{r}+BI_{r} \\ CE_{r}+DI_{r}\end{matrix}$<br>
    $E_{s}=AE_{r}+BI_{r}$<br>
    $I_{s}=CE_{r}+DI_{r}$<br>
2. $T$형 회로와 $\pi$형 회로의 4단자 정수값

| 구분 | $T$형 | $\pi$형 |
| :--: | :--: | :--: |
| A: {::nomarkdown}$\dfrac{V_{s}}{V_{r}}\rvert_{I_{r}=0}${:/} | $A=1+\dfrac{ZY}{2}$ | $A=1+\dfrac{ZY}{2}$ |
| B: {::nomarkdown}$\dfrac{V_{s}}{I_{r}}\rvert_{V_{r}=0}${:/} | $B=Z\left(1+\dfrac{ZY}{4}\right)$ | $B=Z$ |
| C: {::nomarkdown}$\dfrac{I_{s}}{V_{r}}\rvert_{I_{r}=0}${:/} | $C=Y$ | $C=Y\left(1+\dfrac{ZY}{4}\right)$ |
| D: {::nomarkdown}$\dfrac{I_{s}}{I_{r}}\rvert_{V_{r}=0}${:/} | $D=1+\dfrac{ZY}{2}$ | $D=1+\dfrac{ZY}{2}$ |

# 장거리 송전 선로(100km 초과)
분포 정수 회로(어느 위치에서 보아도 특성 임피던스가 같은 회로)
1. 특성(파동) 임피던스: 거리와 무관<br>
    $Z_{0}=\sqrt{\dfrac{Z}{Y}}\fallingdotseq\sqrt{\dfrac{L}{C}}=138\log{\dfrac{D}{r}}[\Omega]$ ($Z$: 단락 임피던스, $Y$: 개방 어드미턴스)
2. 전파 정수<br>
    $\gamma =\sqrt{ZY}=\sqrt{\left(R+j\omega L\right)\left(G+j\omega C\right)}=\alpha +j\beta$ ($\alpha$: 감쇠정수, $\beta$: 위상정수)
3. 전파 속도<br>
    $v=\dfrac{\omega}{\beta}=\dfrac{1}{\sqrt{LC}}=3\times 10^{5}[\textsf{km/s}]=3\times 10^{8}[\textsf{m/s}]$