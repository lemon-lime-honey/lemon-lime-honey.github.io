---
layout: post
title:  중성점 접지 방식
author: bs
date: '2024-01-24 19:41:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 비접지 방식(3.3kV, 6.6kV)
1. 저전압 단거리, $\Delta -\Delta$ 결선을 많이 사용
2. 1상 고장 시 $V-V$ 결선 가능(고장 중 운전 가능)
3. 1선 지락 시 전위는 $\sqrt{3}$배 상승

# 직접접지 방식(154kV, 345kV, 765kV)
1. 유효접지: 1선 지락 사고 시 건전상의 대지전위 상승이 상규 대지전압의 1.3배 이하로 유지되는 접지방식. 직접접지가 이에 해당함.
2. 장점
    - 1선 지락 시 건전상의 대지 전위 상승 최소 :arrow_right: 전로나 기기의 절연레벨 경감
    - 단절연 가능
    - 보호계전기의 신속 동작(고속 차단) 가능
    - 정격이 낮은 피뢰기 사용 가능
3. 단점
    - 지락전류가 커서 통신 유도장해가 큼
    - 과도 안정도가 낮음
    - 지락전류가 저역률 대전류이므로 기기의 충격이 큼
    - 송전선로 사고의 대부분이 1선 지락 사고 :arrow_right: 차단기의 빈번한 동작으로 수명 경감

# 저항접지 방식
1. 고저항 접지(100~1,000 $\Omega$)
2. 저저항 접지(30 $\Omega$)

# 소호 리액터 방식
병렬 공진 이용 :arrow_right: 지락전류 최소, 예전 66kV
1. 소호 리액터의 인덕턴스: $L=\dfrac{1}{3\omega^{2}C_{s}}=\dfrac{1}{3\left(2\pi f\right)^{2}C_{s}}[\textsf{H}]$
2. 소호 리액터의 용량(3선 일괄의 대지 충전용량)<br>
    $Q_{L}=EI_{L}=E\dfrac{E}{\omega L}=3\omega CE^{2} [\textsf{kVA}]$
3. 장점
    - 지락전류 최소
    - 안정도 최대
    - 고장 중 운전 가능
    - 유도장해 최소
4. 단점
    - 보호 계전기 동작 불확실
    - 설비비 고가
    - 1선 지락 시 건전상의 전위 상승 최대