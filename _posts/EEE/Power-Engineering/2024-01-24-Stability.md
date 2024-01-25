---
layout: post
title:  안정도
author: bs
date: '2024-01-24 18:02:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 의미
전력 계통에서 상호협조 하에 동기 이탈하지 않고 안정되게 운전할 수 있는 정도

# 종류
1. 정태 안정도: 부하가 불변하는 경우 또는 극히 서서히 증가하는 경우의 안정운전 여부
2. 동태 안정도: AVR(자동 전압 조정기)나 조속기 등의 제어 효과까지 고려한 안정도
3. 과도 안정도: 부하가 급변하는 경우나 사고 발생 시 탈조하지 않고 운전할 수 있는 안정 상태

# 안정도 향상 대책
1. 직렬 리액턴스를 작게 한다.
    - 발전기, 변압기의 리액턴스를 작게 한다.
    - 변행회선 수를 늘린다.
    - 복도체, 또는 다도체를 도입한다.
    - 직렬 콘덴서를 사용한다.
2. 전압 변동을 작게 한다.
    - 단락비를 크게 한다.
    - 속응 여자 방식을 채택한다.
    - 중간 조상 방식을 채택한다.
    - 계통 연계
3. 고장 구간을 신속히 차단한다.
    - 적당한 중성점 접지 방식을 채용한다.
    - 고속 재폐로 방식을 채용한다.
    - 차단기 고속화
4. 고장 시 발전기 입출력의 불평형을 작게 한다.

# 전력원선도
1. 전력원선도 작성 시 필요한 것: 송, 수전단 전압, 일반회로 정수(ABCD)
2. 원선도 반지름: $\rho =\dfrac{V_{s}V_{r}}{B}$ ($V_{s}$: 송전단 전압, $V_{r}$: 수전단 전압, $B$: 리액턴스)
3. 알 수 있는 것
    - 최대 출력
    - 조상 설비 용량
    - 4단자 정수에 의한 손실
    - 선로 손실과 송전 효율
    - 선로의 일반회로 정수
4. 알 수 없는 것
    - 과도 안정 극한 전력
    - 코로나 손실

# 조상 설비
1. 동기조상기: 무부하로 운전하는 동기전동기
    1. 과여자 운전: 콘덴서로 작용, 진상
    2. 부족 여자 운전: 리액터로 작용, 지상
    3. 증설이 어려움, 손실 최대(회전기)
2. 콘덴서: 충전 전류, 진상전류
    - 직렬 콘덴서: 유도성 리액턴스에 의한 전압 강하 보상, 안정도 개선용
    - 병렬 콘덴서: 부하의 역률 개선

# 송전 용량
1. 고유부하법: $P=\dfrac{V_{r}^{2}}{Z_{0}}[\textsf{MW/}\text{회선}]$
2. 용량계수법: $P=k\dfrac{V_{r}^{2}}{l}[\textsf{kW}]$ ($k$: 용량계수, $l$: 송전거리$[\textsf{km}]$)
3. 리액턴스법: $P=\dfrac{V_{s}V_{r}}{X}\sin{\delta}[\textsf{MW}]$ ($\delta$: 송수전단 전압의 위상차)

# 경제적인 송전 전압의 결정
$V_{s}=5.5\sqrt{0.6l+\dfrac{P}{100}}[\textsf{kV}]$ ($l$: 송전거리$[\textsf{km}]$, $P$: 송전전력$[\textsf{kW}]$)