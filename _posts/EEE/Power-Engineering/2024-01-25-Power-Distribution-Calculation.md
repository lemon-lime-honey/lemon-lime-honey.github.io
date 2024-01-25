---
layout: post
title:  배전계산
author: bs
date: '2024-01-25 22:45:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 부하율
$F=\dfrac{\left(\text{평균 전력}\right)}{\left(\text{최대 전력}\right)}\times 100$<br>
- 손실계수 $H=\dfrac{\left(\text{평균 전력손실}\right)}{\left(\text{최대 전력손실}\right)}\times 100$
1. 배전선의 손실계수와 부하율의 관계<br>
    $0\le F^{2}\le H\le F\le 1$
2. $H=\alpha F+\left(1-\alpha\right)F^{2}$ ($\alpha$: 보통 $0.2$~$0.5$)

# 수용률
$\text{수용률}=\dfrac{\left(\text{최대 전력}\right)}{\left(\text{설비 용량}\right)}\times 100$

# 부등률: 전기 기구의 동시 사용 정도
$\text{부등률}=\dfrac{\left(\text{개별 최대수용 전력의 합}\right)}{\left(\text{합성 최대 전력}\right)}\ge 1\left(\text{단독 수용가 시 부등률}=1\right)$
1. $\left(\text{변압기 용량}\right)=\dfrac{\left[\text{최대 전력}\textsf{(kW)}\right]}{\left(\text{역률}\right)}[\textsf{kVA}]$
    1. 단일 부하인 경우<br>
        $T_{r}=\dfrac{\left(\text{설비 용량}\right)\times\left(\text{수용률}\right)}{\left(\text{역률}\right)}$
    2. 여러 부하인 경우<br>
        $T_{r}=\dfrac{\sum{\left[\left(\text{설비 용량}\right)\times\left(\text{수용률}\right)\right]}}{\left(\text{역률}\right)\times\left(\text{부등률}\right)}$
2. 역률 개선용 콘덴서의 용량<br>
    $Q_{C}=P\left(\tan{\theta_{1}}-\tan{\theta_{2}}\right)=P\left(\dfrac{\sin{\theta_{1}}}{\cos{\theta_{1}}}-\dfrac{\sin{\theta_{2}}}{\cos{\theta_{2}}}\right)$<br>
    ($Q_{C}$: 콘덴서 용량$[\textsf{kVA}]$, $P$: 부하 전력$[\textsf{kW}]$, $\cos{\theta_{1}}$: 개선 전 역률, $\cos{\theta_{2}}$: 개선 후 역률)
    - 역률 개선의 장점
        - 전력손실 경감 $\left(P_{l}\propto\dfrac{1}{\cos^{2}{\theta}}\right)$
        - 전기요금 절감
        - 설비 용량 여유분
        - 전압 강하 경감

# 전력 조류(Power Flow) 계산

| 모선 | 기지량 | 미지량 |
| :---: | :--- | :--- |
| Swing 모선<br> (Slack 모선) | - 모선 전압 $V$<br> - 위상각 $\theta$ | - 유효 전력 $P$<br> - 무효 전력 $Q$ |
| 발전기 모선 | - 유효 전력 $P$<br> - 모선 전압 $V$ | - 무효 전력 $Q$<br> - 위상각 $\theta$ |
| 부하 모선 | - 유효 전력 $P$<br> - 무효 전력 $Q$ | - 모선 전압 $V$<br> - 위상각 $\theta$ |