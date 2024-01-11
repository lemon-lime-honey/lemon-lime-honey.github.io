---
layout: post
title:  진공 중의 정자계
author: bs
date: '2024-01-11 16:57:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 정전계와 전자계의 비교

| 정전계 | 전자계 |
| --- | --- |
| 전하: $Q [\textsf{C}]$ | 자하: $m [\textsf{Wb}]$ |
| 진공의 유전율: $\varepsilon_{0}=8.855\times 10^{-12}\textsf{F/m}$ | 진공의 투자율: $\mu_{0}=4\pi\times 10^{-7} \textsf{H/m}$ |
| 쿨롱 법칙: $F=\dfrac{Q_{1}Q_{2}}{4\pi\varepsilon_{0}r^2}=9\times 10^{9}\cdot\dfrac{Q_{1}Q_{2}}{r^{2}}[\textsf{N}]$ | 쿨롱 법칙: $F=\dfrac{m_{1}m_{2}}{4\pi\mu_{0}r^2}=6.33\times 10^{4}\cdot\dfrac{m_{1}m_{2}}{r^{2}}[\textsf{N}]$ |
| 전계의 세기: $E=\dfrac{Q}{4\pi \varepsilon_{0}r^{2}}=9\times 10^{9}\cdot \dfrac{Q}{r^{2}}[\textsf{V/m}]$ | 자계의 세기: $H=\dfrac{m}{4\pi \mu_{0}r^{2}}=6.33\times 10^{4}\cdot \dfrac{m}{r^{2}}[\textsf{AT/m}]$ |
| 전위: $V=\dfrac{Q}{4\pi \varepsilon_{0}r}[\textsf{V}]$ | 자위: $u=\dfrac{m}{4\pi \mu_{0}r}[\textsf{AT}]$ |
| 전속: $\psi = Q[\textsf{C}]$ | 자속: $\phi = m[\textsf{Wb}]$ |
| 전속밀도: $D=\varepsilon E[\textsf{C/m}^{2}]$ | 자속밀도: $B=\mu H[\textsf{Wb}\cdot\textsf{m}^{2}]$ |
| 전기력선수: $N=\dfrac{Q}{\varepsilon_{0}}$ | 자기력선수: $S=\dfrac{m}{\mu_{0}}$ |
| 분극의 세기: $p=\varepsilon_{0}\left( \varepsilon_{s}-1\right) E=\left( 1-\dfrac{1}{\varepsilon_{s}}\right) D$ | 자화의 세기: $J=\mu_{0}\left( \mu_{s}-1\right) H=\left( 1-\dfrac{1}{\mu_{s}}\right) B$ |
| 전기쌍극자: $V=\dfrac{M}{4\pi \varepsilon_{0}r^{2}}\cos{\theta} $ | 자기쌍극자: $U=\dfrac{M}{4\pi \mu_{0}r^{2}}\cos{\theta} $ |
| 전계의 세기: $E=\dfrac{M}{4\pi \varepsilon_{0}r^{3}}\sqrt{1+3\cos^{2}\theta }$ | 자계의 세기: $H=\dfrac{M}{4\pi \mu_{0}r^{3}}\sqrt{1+3\cos^{2}\theta }$ |
| 쌍극자모멘트: $M=Q\cdot\delta [\textsf{C}\cdot\textsf{m}]$ | 쌍극자모멘트: $M=m\cdot\delta [\textsf{Wb}\cdot\textsf{m}]$ |
| 전기이중층: $V=\dfrac{M}{4\pi\varepsilon_{0}}\omega [\textsf{V}]$ | 자기이중층: $U=\dfrac{M}{4\pi\mu_{0}}\omega [\textsf{AT}]$ |
| 경계조건<br> - 전계의 접선성분이 연속: $E_{1}\sin{\theta_{1}}=E_{2}\sin{\theta_{2}}$<br> - 전속밀도의 법선성분이 연속: $D_{1}\cos{\theta_{1}}=D_{2}\cos{\theta_{2}}$<br> - $\dfrac{\tan{\theta_{1}}}{\tan{\theta_{2}}}=\dfrac{\varepsilon_{1}}{\varepsilon_{2}}$<br> - $\varepsilon_{1}>\varepsilon_{2}$일 경우 $E_{1}<E_{2}, D_{1}>D_{2}, \theta_{1}>\theta_{2}$ | 경계조건<br> - 자계의 접선성분이 연속: $H_{1}\sin{\theta_{1}}=H_{2}\sin{\theta_{2}}$<br> - 자속밀도의 법선성분이 연속: $B_{1}\cos{\theta_{1}}=B_{2}\cos{\theta_{2}}$<br> - $\dfrac{\tan{\theta_{1}}}{\tan{\theta_{2}}}=\dfrac{\mu_{1}}{\mu_{2}}$<br> - $\mu_{1}>\mu_{2}$일 경우 $H_{1}<H_{2}, B_{1}>B_{2}, \theta_{1}>\theta_{2}$ |

# 전류에 의한 자계의 세기
1. 원형 전류의 중심(원형 코일에 전류가 흐를 때)<br>
    $H_{0}=\dfrac{NI}{2a}[\textsf{AT/m}]$
2. 무한장 직선(원통)<br>
    반지름이 $a$인 원통도체의 전류에 의한 자계
    1. 외부($r>a$): $H=\dfrac{I}{2\pi r}[\textsf{AT/m}]$
    2. 내부($r<a$): $H=\dfrac{rI}{2\pi a^{2}}[\textsf{AT/m}]$<br>
        전류가 표면에만 분포된 경우 $H=0$
3. 유한장 직선(직선도체)<br>
    $H=\dfrac{I}{4\pi r}\left(\sin{\theta_{1}}+\sin{\theta_{2}} \right) [\textsf{AT/m}]$
4. 환상 솔레노이드
    1. 내부: $H=\dfrac{NI}{2\pi r}[\textsf{AT/m}]$ ($N$: 권수)
    2. 외부: $H=0$
5. 무한장 솔레노이드
    1. 내부: $H=nI[\textsf{AT/m}]$ ($n$: $[\textsf{m}]$당 권수)
    2. 외부: $H=0$
6. 자계 내에서 전류 도체가 받는 힘(전동기)<br>
    $F=BIl\sin{\theta}[\textsf{V}]$: 플레밍의 왼손 법칙
7. 전하가 평등자계 내를 이동할 때의 유기기전력(발전기)<br>
    $e=\left(v\times B \right)l=vBl\sin{\theta}[\textsf{V}]$: 플레밍의 오른손 법칙
8. 회전력(토크)
    1. 자성체에 의한 토크<br>
        $T=M\times H=MH\sin{\theta}=mlH\sin{\theta}[\textsf{N}\cdot\textsf{m}]$
    2. 도체의 회전에 의한 토크<br>
        $T=NBSI\cos{\theta}[\textsf{N/m}]$
    3. 일<br>
        $W=\int^{\theta}_{0} T\,d\theta\ =MH\left(1-\cos{\theta}\right)[\textsf{J}]$
9. 평행도선 사이에 작용하는 힘<br>
    $F=\dfrac{\mu_{0}I_{1}I_{2}}{2\pi r}=\dfrac{2I_{1}I_{2}}{r}\times 10^{-7}[\textsf{N/m}]$
    1. 같은 방향: 흡인력 발생
    2. 반대 방향: 반발력 발생
10. 하전입자에 작용하는 힘(로렌츠 힘)<br>
    $F=q[E+\left(v\times B \right)][\textsf{N}]$
11. 판자석
    1. 점 $P$에서의 자위: $U_{P}=\dfrac{M}{4\pi\mu_{0}}\omega [\textsf{AT}]$
    2. 판자석의 세기: $M=\sigma [\textsf{Wb/m}^2]\times\delta [\textsf{m}]$