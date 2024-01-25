---
layout: post
title:  선로정수와 코로나
author: bs
date: '2024-01-24 16:46:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 선로정수
1. 인덕턴스
    1. 단도체: $L=0.05+0.4605\log_{10}{\dfrac{D}{r}} [\textsf{mH/km}]$ ($D$: 선간 거리, $r$: 전선의 반지름)
    2. 다도체: $L=\dfrac{0.05}{n}+0.4605\log_{10}{\dfrac{D}{r_{e}}}[\textsf{mH/km}]$ ($r_{e}=\sqrt[n]{r\cdot s^{n-1}}$)
    3. 작용 인덕턴스: (자기 인덕턴스) + (상호 인덕턴스)
2. 정전 용량
    1. 정전 용량
        - 단도체: $C=\dfrac{0.02413}{\log_{10}{\dfrac{D}{r}}} [\mu\textsf{F/km}]$
        - 다도체: $C=\dfrac{0.02413}{\log_{10}{\dfrac{D}{r_{e}}}} [\mu\textsf{F/km}]$
    2. 작용 정전 용량(1선당) = (대지 정전 용량) + (상호 정전 용량)
        - 단상 2선식: $C=C_{s}+2C_{m}$
        - 3상 3선식: $C=C_{s}+3C_{m}$
        - 연가(Transposition)
            - 목적: 선로정수 평형
            - 효과: 선로정수 평형, 정전 유도 장해 방지, 직렬 공진에 의한 이상 전압 상승 방지
    3. 충전전류: $I_{c}=2\pi fC_{w}\dfrac{V}{\sqrt{3}} [\textsf{A}]$ ($C_{w}$: 작용 정전 용량)

# 코로나
전선 주위 공기에 부분적인 절연 파괴가 일어나 빛과 소리가 발생하는 현상
1. 임계전압<br>
    $E=24.3m_{0}m_{1}\delta d\log_{10}{\dfrac{D}{r}} [\textsf{kV}]$<br>
    [$m_{0}$: 전선의 표면 상태(단선: 1, 연선: 0.8), $m_{1}$: 날씨 계수(맑은 날: 1, 우천 시: 0.8), $\delta$: 상대공기밀도$\left(\dfrac{0.386b}{273+t}\right)$ :arrow_right: $b$: 기압, $t$: 온도, $d$: 전선의 지름, $r$: 전선의 반지름, $D$: 선간 거리]
2. 코로나의 영향과 대책
    1. 영향
        - 통신선 유도 장해
        - 코로나 손실 :arrow_right: 송전 손실 :arrow_right: 송전효율 저하
        - 코로나 잡음 및 소음
        - 오존($O_{3}$)에 의한 전선의 부식
        - 소호 리액터에 대한 영향(소호 불능의 원인)
        - 진행파의 파고값 감소
    2. 대책
        - 전선의 지름을 크게 한다.
        - 복도체(다도체)를 사용한다.
3. 코로나 손실<br>
    $P_{c}=\left(f+25\right)\sqrt{\dfrac{d}{2D}}\left(E-E_{0}\right)^{2}\times 10^{-5} [\textsf{kW/km/line}]$<br>
    ($\delta$: 상대공기밀도, $f$: 주파수, $D$: 선간 거리, $d$: 전선의 지름, $E_{0}$: 코로나 임계전압, $E$: 전선의 대지전압)