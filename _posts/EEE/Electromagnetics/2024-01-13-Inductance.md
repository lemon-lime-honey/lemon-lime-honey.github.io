---
layout: post
title:  인덕턴스
author: bs
date: '2024-01-13 18:04:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 자기 인덕턴스와 상호 인덕턴스
1. 자기 인덕턴스<br>
    {::nomarkdown}$L_{1}=\dfrac{N_{1}^{2}}{R_{m}}$, $L_{2}=\dfrac{N_{2}^{2}}{R_{m}}${:/}
2. 상호 인덕턴스<br>
    $M=\dfrac{N_{1}N_{2}}{R_{m}}$

# 유기기전력
$e=-L\dfrac{dI}{dt}=-N\dfrac{d\phi}{dt} [\textsf{V}]$, $LI=N\phi$ (단자전압 $v_{L}=L\dfrac{dI}{dt} [\textsf{V}]$)

# 상호 인덕턴스
$M=k\sqrt{L_{1}L_{2}}$ ($M$: 상호 인덕턴스$[\textsf{H}]$, $k$: 결합계수, $L_{1}$, $L_{2}$: 자기 인덕턴스$[\textsf{H}]$)

# 인덕턴스 계산
1. 환상 솔레노이드<br>
    $L=\dfrac{\mu SN^{2}}{l} [\textsf{H}]$ ($S$: 단면적$[\textsf{m}^{2}]$, $l$: 길이$[\textsf{m}]$, $N$: 권수)
2. 무한장 솔레노이드<br>
    $L=\mu\pi a^{2}N^{2}=\mu SN^{2} [\textsf{H/m}]$
3. 원통도체의 내부 인덕턴스<br>
    $L=\dfrac{\mu}{8\pi} [\textsf{H/m}]=\dfrac{\mu l}{8\pi} [\textsf{H}]$
4. 동축 케이블<br>
    $L=\dfrac{\mu_{1}}{2\pi}\ln{\dfrac{b}{a}}+\dfrac{\mu_{2}}{8\pi} [\textsf{H/m}]$
5. 평행 왕복도선<br>
    $L=\dfrac{\mu_{1}}{\pi}\ln{\dfrac{d}{a}}+\dfrac{\mu_{2}}{4\pi} [\textsf{H/m}]$

# 합성 인덕턴스
1. 상호 인덕턴스가 없는 경우
    1. 직렬접속: 자속과 같은 방향<br>
        $L=L_{1}+L_{2}$
    2. 병렬접속: 자속과 반대 방향<br>
        $L=\dfrac{L_{1}L_{2}}{L_{1}+L_{2}}$
2. 상호 인덕턴스가 있는 경우
    1. 직렬접속
        - 자속과 같은 방향: $L=L_{1}+L_{2}+2M$
        - 자속과 반대 방향: $L=L_{1}+L_{2}-2M$
    2. 병렬접속
        - 자속과 같은 방향: $L=\dfrac{L_{1}L_{2}-M^{2}}{L_{1}+L_{2}-M^{2}}$
        - 자속과 반대 방향: $L=\dfrac{L_{1}L_{2}-M^{2}}{L_{1}+L_{2}+M^{2}}$

# 자기에너지
{::nomarkdown}$W=\dfrac{1}{2}LI^{2} [\textsf{J}]=\dfrac{1}{2}L_{1}I_{1}^{2}+\dfrac{1}{2}L_{2}I_{2}^{2}\pm MI_{1}I_{2}${:/}