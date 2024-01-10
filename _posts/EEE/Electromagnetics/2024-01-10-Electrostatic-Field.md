---
layout: post
title:  진공 중의 정전계
author: bs
date: '2024-01-10 23:04:00 +0900'
last_modified_at: '2024-01-10 23:33:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 쿨롱 법칙

$
F=\dfrac{Q_{1}Q_{2}}{4\pi \varepsilon _{0}r^{2}}=9\times 10^{9}\times \dfrac{Q_{1}Q_{2}}{r^{2}} [\textsf{N}]
$

$Q$: 전하량$[\textsf{C}]$, $r$: 거리$[\textsf{m}]$, $\varepsilon_{0}$(진공에서의 유전율)$= 8.855\times 10^{-12} \textsf{F/m}$

# 전계의 세기
1. 단위 점전하($+1\textsf{C}$)와 전하 사이에 미치는 쿨롱 힘<br>
    $E=\dfrac{Q}{4\pi \varepsilon _{0}r^{2}} \textsf{[V/m]} = 9 \times 10^{9} \times \dfrac{Q}{r^{2}}$
2. 전계의 세기 단위 표시<br>
    $E=\dfrac{F}{Q} \textsf{[V/m]}$ (단위: $\textsf{[N/C]}=\left[\dfrac{\textsf{N}\cdot \textsf{m}}{\textsf{C}\cdot \textsf{m}}\right] =\left[ \dfrac{\textsf{J}}{\textsf{C}\cdot \textsf{m}}\right]= [\textsf{V/m}]$)
- 전계의 세기가 0이 되는 지점
    - 두 점전하의 극성이 동일한 경우: 두 전하 사이
    - 두 점전하의 극성이 다른 경우: 두 전하의 외곽 부분(전하의 절대값이 작은 전하의 외측)

# 전기력선의 성질
1. 전기력선의 방향은 전계의 방향과 같다.
2. 전기력선의 밀도는 전계의 세기와 같다(가우스 법칙).
3. 전기력선은 전위가 높은 곳에서 낮은 곳으로, (+)에서 (-)로 이동한다.
4. 전하가 없는 곳에서 발생하거나 소멸하지 않는다.(연속적)
5. 단위전하에서는 $\dfrac{1}{\varepsilon_{0}}=1.13\times 10^{11}$개의 전기력선이 출입한다. (전기력선의 수 $N=\dfrac{Q}{\varepsilon _{0}}$)
6. 전기력선은 자신만으로 폐곡선을 이루지 않는다.
7. 두 개의 전기력선은 서로 교차하지 않는다.(전계가 0이 아닌 곳)
8. 전기력선은 등전위면과 수직으로 교차한다.

# 전기력선 방정식

$\dfrac{dx}{E_{x}}=\dfrac{dy}{E_{y}}=\dfrac{dz}{E_{z}}$

1. $V=x^{2}+y^{2}$ (전기력선 방정식: $y=Ax$ 형태)
2. $V=x^{2}-y^{2}$ (전기력선 방정식: $xy = A 형태$)

# 전계의 세기 구하는 방법: 가우스 법칙

$\oint E\cdot ds=\dfrac{Q}{\varepsilon _{0}}\cdot E=\dfrac{Q}{\varepsilon _{0}S}=\dfrac{\sigma }{\varepsilon _{0}}$

1. 구도체(점전하)
    1. 표면($r>a$): $E=\dfrac{Q}{4\pi\varepsilon _{0} r^2}[\textsf{V/m}]$
    2. 내부($r<a$): $E = 0$
        - 내부에 전하가 균일하게 분포(강제조항): $E=\dfrac{rQ}{4\pi\varepsilon_{0} a^3} [\textsf{V/m}]$
2. 축 대칭(선전하밀도: $\lambda [\textsf{C/m}]$, 원통)
    1. 표면($r>a$): $E=\dfrac{\lambda}{2\pi\varepsilon _{0} r} [\textsf{V/m}]$
    2. 내부($r<a$): $E = 0$
        - 내부에 전하가 균일하게 분포(강제조항): $E=\dfrac{r\lambda}{2\pi\varepsilon _{0} a^{2}} [\textsf{V/m}]$
3. 표면전하밀도: $\sigma [\textsf{C/} \textsf{m}^2]$
    1. 도체표면: $E=\dfrac{\sigma}{\varepsilon _{0}} [\textsf{V/m}]$
    2. 무한평면: $E=\dfrac{\sigma}{2\varepsilon _{0}} [\textsf{V/m}]$
    3. 두 개의 무한평면(평행판 콘덴서): $E=\dfrac{\sigma}{\varepsilon _{0}} [\textsf{V/m}]$, 전위 $V=Ed=\dfrac{\sigma}{\varepsilon _{0}}d$
4. 푸아송 방정식 ($\rho$: 체적전하밀도$[\textsf{C/m}^3]$)
    1. $\textsf{div}E=\dfrac{\rho}{\varepsilon _{0}}$ (가우스 미분형)
        - 적분형: $\int E\,ds\ =\dfrac{Q}{\varepsilon _{0}}$
    2. $\nabla ^{2}V=-\dfrac{\rho}{\varepsilon _{0}}$ (푸아송 방정식)
    3. $\nabla ^{2}V=0$ (라플라스 방정식)

# 전기쌍극자
1. 쌍극자 모멘트<br>
    $M=Q\cdot \delta [\textsf{C}\cdot\textsf{m}]$<br>
    (미소전하 $\pm Q[\textsf{C}]$, 미소거리 $\delta$)
2. 전기쌍극자의 전위<br>
    $V=\dfrac{M}{4\pi \varepsilon _{0}r^{2}}\cos \theta $<br>
    ($\theta = 0^\circ$(최대), $90^\circ$(최소))
3. 전기쌍극자의 전계 세기<br>
    $E=\dfrac{M}{4\pi \varepsilon _{0}r^{3}}\sqrt{1+3\cos ^{2}\theta }$<br>
    ($\theta = 0^\circ$(최대), $90^\circ$(최소))

# 정전응력(면적당 힘)

$f=\dfrac{\sigma ^{2}}{2\varepsilon _{0}}=\dfrac{1}{2}\varepsilon _{0}E^{2}=\dfrac{D^{2}}{2\varepsilon _{0}} [\textsf{J/m}^3], [\textsf{N/m}^2]$

# 전기이중층
1. 이중층의 세기<br>
    $M=\sigma\cdot\delta [\textsf{C/m}]$
2. 이중층의 전위<br>
    $V_{P}=\dfrac{M}{4\pi\varepsilon _{0}}\omega [\textsf{V}]$<br>
    (입체각 $\omega = 2\pi (1-\cos{\theta})$)