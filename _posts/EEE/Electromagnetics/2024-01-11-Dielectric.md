---
layout: post
title:  유전체
author: bs
date: '2024-01-11 15:06:00 +0900'
category: [EEE, Electromagnetics]
tags: [전자기학]
math: true
---

# 분극의 세기
유전체의 단위 체적당 전기쌍극자 모멘트<br>

$P=D-\varepsilon_{0}E=\varepsilon_{0}\left(\varepsilon_{s}-1\right)E=\left(1-\dfrac{1}{\varepsilon_{s}}\right)D [\textsf{C/m}^2]$<br>
분극률: $\chi =\varepsilon_{0}\left(\varepsilon_{s}-1 \right)$

# 전속밀도
$D=\varepsilon_{0}\varepsilon_{s}E=\varepsilon_{0}E+\varepsilon_{0}\left(\varepsilon_{s}-1\right)E=\varepsilon_{0}E+P [\textsf{C/m}^2]$

# 비유전율과의 관계
1. 전하량이 일정한 경우(힘, 전계, 전위, 전기력선수 감소, 전속 불변)
    1. 힘: $F=\dfrac{1}{\varepsilon_{s}}F_{0}$
    2. 전계: $E=\dfrac{1}{\varepsilon_{s}}E_{0}$
    3. 전위: $V=\dfrac{1}{\varepsilon_{s}}V_{0}$
    4. 전기력선수: $N=\dfrac{1}{\varepsilon_{s}}N_{0}$
2. 전위가 일정한 경우(전속밀도, 총전하량 증가)
    1. 전속밀도: $D=\varepsilon_{s}D_{0}$
    2. 총전하량: $Q=\varepsilon_{s}Q_{0}$
3. 항상 성립하는 경우(비유전율에 항상 비례)<br>
    정전 용량: $C=\varepsilon_{s}C_{0}$

# 경계조건
1. 경계조건(굴절법칙)
    1. 전속밀도의 법선성분이 연속<br>
        $D_{1}\cos{\theta_{1}}=D_{2}\cos{\theta_{2}}$<br>
        $\varepsilon_{1}E_{1}\cos{\theta_{1}}=\varepsilon_{2}E_{2}\cos{\theta_{2}}$
    2. 전계의 접선성분이 연속<br>
        $E_{1}\sin{\theta_{1}}=E_{2}\sin{\theta_{2}}$
    3. $\dfrac{\tan{\theta_{1}}}{\tan{\theta_{2}}}=\dfrac{\varepsilon_{1}}{\varepsilon_{2}}$
    4. $\varepsilon_{1}>\varepsilon_{2}$일 경우: $\theta_{1}>\theta_{2}, E_{1}<E_{2}, D_{1}>D_{2}$
2. 맥스웰 응력: 유전체의 경계면에 작용하는 힘은 유전율이 큰 쪽에서 작은 쪽으로 발생<br>
    $\rightarrow$ 수직: 인장응력, 수평: 압축응력
    1. 수직으로 입사($\theta =0^\circ$)
        - $E=0$: 전계는 불연속
        - $D=D_{1}=D_{2}$
        - 전계, 전속은 굴절하지 않는다.
        - 경계면에서의 힘: $f=\dfrac{1}{2}\left(\dfrac{1}{\varepsilon_{2}}-\dfrac{1}{\varepsilon_{1}} \right)D^2 [\textsf{N/m}^2]$ 
    2. 평행으로 입사($\theta =90^\circ$)
        - $D=0, E=E_{1}=E_{2}$
        - 경계면에서의 힘: $f=\dfrac{1}{2}\left(\varepsilon_{1}-\varepsilon_{2} \right)E^2$

# 유전체 연결
1. 직렬연결 $C=\dfrac{\varepsilon_{1}\varepsilon_{2}S}{\varepsilon_{1}d_{2}+\varepsilon_{2}d_{1}}=\dfrac{S}{\dfrac{d_{1}}{\varepsilon_{1}}+\dfrac{d_{2}}{\varepsilon_{2}}}$
2. 병렬연결 $C=\dfrac{1}{d}\left(\varepsilon_{1}S_{1}+\varepsilon_{2}S_{2}+\varepsilon_{3}S_{3}\right)$
3. 간격의 $\dfrac{1}{2}$에 물질 삽입<br>
    $C=\dfrac{2C_{0}}{1+\dfrac{1}{\varepsilon_{s}}}$ ($C_{o}$~$2C_{o}$ 사이의 값)

# 패러데이관의 특징
1. 패러데이관 내의 전속선 수는 일정하다.
2. 패러데이관 양단에는 정, 부의 단위 전하가 없다.
3. 진전하가 없는 점에서 패러데이관은 연속적이다.
4. 패러데이관의 밀도는 전속밀도와 같다.
5. 패러데이관의 수와 전속선의 수는 같다.

# 분극의 종류
1. 전자분극: 단결정 매질에서 전자구름과 핵의 상대적인 변위
2. 이온분극: 화합물에서 (+) 이온과 (-) 이온의 상대적 변위
3. 쌍극자분극: 유극성 분자가 전계 방향에 의해 재배열한 분극
4. 원자분극: 원자가 전계에 의해 이동해 생기는 분극