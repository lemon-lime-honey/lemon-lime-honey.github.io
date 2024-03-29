---
layout: post
title:  선형회로망
author: bs
date: '2024-01-12 19:23:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# 전압원과 전류원
1. 전압원: 내부저항 $0$
2. 전류원: 내부저항 $\infty$

# 회로망의 기본 해석법
1. 지로(Branch) 해석법
    1. 지로전류 선정
    2. 접속점에 키르히호프의 전류 법칙 적용
    3. 망로(Mesh)에 키르히호프의 전압 법칙 적용
    4. 연립방정식 해법
2. 폐로(Loop, Mesh) 해석법
    1. 망로전류 선정
    2. 망로에 키르히호프의 전압 법칙 적용
        - 자기망로의 저항: 자기저항
        - 이웃망로와 걸쳐있는 저항: 상호저항
    3. 연립방정식 해법
3. 절점(Node) 해석법
    1. 기준절점 및 기준전위 선정
    2. 절점에 키르히호프의 전류 법칙 적용
    3. 연립방정식 해법

# 회로망의 여러 정리
1. 중첩의 정리: 선형회로
    1. 다수의 독립 전압원 및 전류원을 포함하는 회로
    2. 어떤 지로에 흐르는 전류는 각 전원이 단독으로 존재할 때 그 지로에 흐르는 전류의 대수합과 같다.
    3. 전압원은 단락, 전류원은 개방
2. 테브난의 정리: 전압과 전류의 비례관계
    1. 등가 전압원의 원리
    2. 임의의 회로망에 대한 개방 단자전압이 $V_{0}$, 부하측 개방단자 $a$, $b$에서 회로망 방향으로 본 합성 임피던스가 $Z_{0}$인 경우의 회로는 $V_{0}$에 하나의 임피던스가 부하 임피던스 $Z_{L}$과 직렬로 연결된 회로와 같다는 원리
    3. 테브난 등가회로 구성
        - 회로에서 부하저항 $R_{L}$을 분리한다.
        - 개방단자 $a$, $b$에 나타나는 전압: 테브난 전압($V_{TH}$)
        - 전압원 단락, 전류원 개방 후 개방단자에서 본 임피던스: 테브난 임피던스($Z_{TH}$)
3. 노턴의 정리
    1. 등가 전류원의 정리
    2. 전원을 포함하고 있는 회로망에서 임의의 두 단자 $a$, $b$를 단락했을 때 부하 측 개방단자 $a$, $b$에서 회로망 방향으로 본 개방단 임피던스를 $R_N$이라 할 경우 단자 $a$, $b$에 대하여 하나의 전류원 $I_{N}$에 하나의 임피던스 $R_{N}$이 병렬로 연결된 회로와 같다는 원리
    3. 노턴 등가회로 구성
        - 회로에서 부하저항 $R_{L}$을 분리한다.
        - 절점 $a$, $b$를 단락시켰을 때 단락점에 흐르는 전류: 노턴 전류원($I_{N}$)
        - 전압원 단락, 전류원 개방 후 개방단자에서 본 임피던스: 노턴 임피던스($R_{L}$)
    4. 태브난 회로와 노턴 회로 변환
        - $V_{TH}=I_{N}R_{N}$
        - $I_{N}=\dfrac{V_{TH}}{R_{TH}}$
        - $R_{TH}=R_{N}$
4. 밀만의 정리
    1. 내부 임피던스를 가지는 여러 개의 전압원이 병렬로 접속되어 있을 때 그 병렬 접속점에 나타나는 합성전압
    2. 각각의 전원을 단락했을 때 흐르는 전류의 대수합을 각각의 전원의 내부 임피던스의 대수합으로 나눈 것과 같다는 원리<br>
    $V_{ab}=\dfrac{\dfrac{E_{1}}{Z_{1}}+\dfrac{E_{2}}{Z_{2}}+...+\dfrac{E_{n}}{Z_{n}}}{\dfrac{1}{Z_{1}}+\dfrac{1}{Z_{2}}+...+\dfrac{1}{Z_{n}}}=\dfrac{I_{1}+I_{2}+...+I_{n}}{Y_{1}+Y_{2}+...+Y_{n}}=\dfrac{Y_{1}E_{1}+Y_{2}E_{2}+...+Y_{n}E_{n}}{Y_{1}+Y_{2}+...+Y_{n}}$
5. 가역의 정리, 상반의 정리
    1. 임의의 선형 수동 회로망에서 회로망의 한 지로에 전원 전압을 삽입한다.
    2. 다른 임의의 지로에 흐르는 전류는 후자의 지로에 동일한 전압 전원을 삽입할 때 전자의 지로에 흐르는 전류와 동일하다는 원리
6. 쌍대회로

| 원회로 | 변환회로 |
| --- | --- |
| 직렬회로 | 병렬회로
| 전압원 $V$ | 전류원 $I$ |
| 저항 $R$ | 컨덕턴스 $G$ |
| 인덕턴스 $L$ | 정전용량 $C$ |
| 리액턴스 $X$ | 서셉턴스 $B$ |
| 개방회로 | 단락회로 |
| $Y$형 | $\Delta$형 |
| 키르히호프의 전압 법칙 | 키르히호프의 전류 법칙 |
| 폐로 방정식 | 절점 방정식 |
| 테브난의 정리 | 노턴의 정리 |