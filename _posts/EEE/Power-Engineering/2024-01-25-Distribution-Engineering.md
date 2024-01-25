---
layout: post
title:  배전공학
author: bs
date: '2024-01-25 22:29:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 배전방식
1. 가지식(수지상식)
    1. 전압 변동률이 큼 :arrow_right: 플리커 현상 발생
    2. 전력 손실이 큼
    3. 고장 범위가 넓음
    4. 전력 공급 신뢰도가 낮다.
    5. 수요가 증가할 떄마다 간선이나 분기선을 쉽게 시설할 수 있음
    6. 농어촌 지역 등 부하가 적은 지역에 적절함
2. 루프식(환상식)
    1. 비교적 수용 밀도가 큰 지역에서 많이 사용
    2. 고장 발생 시 빠른 분리 가능
    3. 공급 신뢰도가 높음
    4. 비싼 설비비
    5. 부하 증설이 어려움
3. 저압 뱅킹 방식
    1. 전압 변동, 전력 손실이 적음
    2. 저압선의 동량 저감
    2. 플리커 현상 감소
    3. 부하의 증설 용이
    4. 변압기의 용량 저감
    5. 캐스케이딩 현상 발생
        - 저압선의 일부 고장으로 건전한 변압기 일부 또는 전부가 차단되는 현상
        - 대책: 뱅킹 퓨즈 사용
    7. 부하가 밀집된 시가지 계통에서 사용
4. 저압 네트워크 방식
    1. 무정전 공급 방식
    2. 공급 신뢰도가 가장 좋음
    3. 전압 강하 적음
    4. 설비비가 높음
    5. 접지 사고가 많음
    8. 고장 시 고장전류 역류가 발생<br>
        :arrow_right: 대책: 네트워크 프로텍터(차단기, 퓨즈, 방향성 계전기)

# 방식별 비교

| 종별 | 전력 | 손실 | 1선당 공급전력 | 1선당 공급전력 비교 | 중량비 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $1\phi 2W$ | $P=VI\cos{\theta}$ | $2^{I}R$ | $1/2P$ | $1$ | $1$ |
| $1\phi 3W$ | $P=2VI\cos{\theta}$ | $2^{I}R$ | $2/3P$ | $1.33$ | $3/8=0.375$ |
| $3\phi 3W$ | $P=\sqrt{3}VI\cos{\theta}$ | $3^{I}R$ | $\sqrt{3}/3P$ | $1.15$ | $3/4=0.75$ |
| $3\phi 4W$ | $P=3VI\cos{\theta}$ | $3^{I}R$ | $3/4P$ | $1.5$ | $1/3=0.33$ |

- 단상 3선식의 특징
    - 전선 소모량이 단상 2선식에 비해 $37.5\%$ 적음
    - $110\textsf{V}/220\textsf{V}$ 두 종의 전원 사용
    - 전압 불평형 :arrow_right: 저압 밸런서 설치
        - 여자 임피던스가 크고, 누설 임피던스가 작음
        - 권수비가 $1:1$인 단권 변압기
    - 단상 2선식에 비해 효율이 높고 전압 강하가 작음
    - 중성선에 퓨즈 설치 금지

# 말단 집중 부하와 분산 분포 부하의 비교

| 구분 | 전압 강하 | 전력 손실 |
| :---: | :---: | :---: |
| 말단 집중 부하 | $I\cdot R$ | $I^{2}R$ |
| 분산 분포 부하 | $\dfrac{1}{2}I\cdot R$ | $\dfrac{1}{3}I^{2}\cdot R$ |