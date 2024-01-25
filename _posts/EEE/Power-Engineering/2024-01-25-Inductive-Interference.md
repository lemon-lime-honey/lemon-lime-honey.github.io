---
layout: post
title:  유도장해
author: bs
date: '2024-01-25 19:05:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 전자유도장해
영상전류($I_{0}$), 상호 인덕턴스에 의해<br>
$E_{m}=j\omega Ml\left(I_{0}\right)=j\omega MlI_{g}[\textsf{V}]$

# 정전유도장해
영상전압($E_{0}$), 상호 정전 용량에 의해
1. 전력선과 통신선의 이격 거리가 동일한 경우<br>
    정전유도전압 $E_{s}=\dfrac{C_{m}}{C_{m}+C_{s}}E_{0} [\textsf{V}]$<br>
    ($C_{m}$: 상호 정전 용량, $C_{s}$: 통신선의 대지 정전 용량)
2. 전력선과 통신선의 이격 거리가 다른 경우<br>
    $E_{s}=\dfrac{\sqrt{C_{a}\left(C_{a}-C_{b}\right)+C_{b}\left(C_{b}-C_{c}\right)+C_{c}\left(C_{c}-C_{a}\right)}}{C_{a}+C_{b}+C_{c}+C_{s}}\times E_{0}[\textsf{V}]$
    - 완전 연가 시($C_{a}=C_{b}=C_{c}=C$)<br>
        $E_{s}=\dfrac{3C_{0}}{3C_{0}+C}E_{0}$

# 유도장해 방지대책
1. 전력선 측
    - 연가
    - 소호 리액터 접지
    - 고속도 차단기 설치
    - 이격 거리를 크게
    - 차폐선 설치
    - 지중 전선로
    - 상호 인덕턴스를 작게
2. 통신선 측
    - 교차 시 수직 교차
    - 연피케이블, 배류 코일 설치
    - 절연 변압기 시설 강화
    - 피뢰기 시설
    - 소호 리액터 접지