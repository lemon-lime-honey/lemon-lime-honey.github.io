---
layout: post
title:  변압기
author: bs
date: '2024-01-23 21:18:00 +0900'
category: [EEE, Electric Machines]
tags: [전기기기]
math: true
---

# 변압기의 유기기전력과 권수비
1. $E_{1}=4.44fN_{1}\phi_{m} [\textsf{V}]$, $E_{2}=4.44fN_{2}\phi_{m} [\textsf{V}]$
2. 권수비: $a=\dfrac{E_{1}}{E_{2}}=\dfrac{V_{1}}{V_{2}}=\dfrac{I_{2}}{I_{1}}=\dfrac{N_{1}}{N_{2}}=\sqrt{\dfrac{Z_{1}}{Z_{2}}}=\sqrt{\dfrac{R_{1}}{R_{2}}}$

# 변압기의 구조
1. 분류<br>
    내철형, 외철형, 권철심형
2. 냉각 방식에 따른 분류<br>
    건식자냉식, 건식풍냉식, 유입자냉식(주상변압기), 유입풍냉식, 유입수냉식, 송유풍냉식, 송유수냉식
3. 변압기 절연유의 구비조건
    1. 절연내력이 커야 한다.
    2. 점도가 작고 비열이 커서 냉각효과가 커야 한다.
    3. 인화점은 높고, 응고점은 낮아야 한다.
    4. 고온에서 산화하지 않고, 침전물이 생기지 않아야 한다.
4. 변압기의 호흡작용
    1. 외기의 온도 변화, 부하의 변화에 따라 내부기름의 온도가 변화
    2. 기름과 대기압 사이에 차가 생겨 공기가 출입하는 작용
- 절연열화: 변압기의 호흡작용으로 절연유의 절연내력이 저하하고 냉각효과가 감소하며 침전물이 생기는 현상
- 절연열화 방지책
    - 콘서베이터 설치
    - 질소 봉입 방식
    - 흡착제 방식

# 변압기의 등가회로
2차를 1차로 환산한 등가회로<br>
![변압기 등가회로]({{"assets/img/post/electric_machines/transformer-2-to-1-equivalent.png"| relative_url}})
1. $V_{2}'=V_{1}=aV_{2}$
2. $I_{2}'=I_{1}=\dfrac{I_{2}}{a}$
3. $Z_{2}'=\dfrac{V_{2}'}{I_{2}'}=\dfrac{aV_{2}}{\dfrac{I_{2}}{a}}=a^{2}\dfrac{V_{2}}{I_{2}}=a^{2}Z_{2}$ (단, $r_{2}'=a^{2}r_{2}$, $x_{2}'=a^{2}x_{2}$)
4. 2차를 1차로 환산한 임피던스<br>
    $Z_{21}=r_{21}+jx_{21}=\left(r_{1}+a^{2}r_{2}\right)+j\left(x_{1}+a^{2}x_{2}\right)$

# 백분율 강하
1. % 저항 강하<br>
    $p=\dfrac{I_{1n}r_{21}}{V_{1n}}\times 100=\dfrac{I_{2n}r_{12}}{V_{2n}}\times 100$<br>
    {::nomarkdown}$\quad =\dfrac{I_{1n}r_{21}}{V_{1n}}\times\dfrac{I_{1n}}{I_{1n}}=\dfrac{I_{1n}^{2}r_{21}}{V_{1n}I_{1n}}\times 100${:/}<br>
    $\quad =\dfrac{P_{s}}{P_{n}}\times 100$
2. % 리액턴스 강하<br>
    $q=\dfrac{I_{1n}\chi_{21}}{V_{1n}}\times 100=\dfrac{I_{2n}\chi_{21}}{V_{2n}}\times 100$
3. % 임피던스 강하<br>
    $Z=\dfrac{I_{1n}Z_{21}}{V_{1n}}\times 100=\dfrac{V_{1s}}{V_{1n}}\times 100=\dfrac{I_{1n}\left(r_{21}+jx_{21}\right)}{V_{1n}}\times 100=\dfrac{I_{n}}{I_{s}}\times 100$<br>
    ($P_{n}$: 변압기 용량, $P_{s}$: 임피던스 와트(동손), $V_{1s}$: 임피던스 전압, $I_{n}$: 정격전류, $I_{s}$: 단락전류)
    1. 임피던스 전압($V_{1s}=I_{1n}\cdot Z_{21}$)
        - 정격전류가 흐를 때 변압기 내 임피던스 전압 강하
        - 변압기 2차측을 단락한 상태에서 1차 측에 정격전류($I_{1n}$)가 흐르도록 1차 측에 인가하는 전압
    2. 임피던스 와트($P_{s}=I_{1n}^{2}\cdot r_{21}$): 임피던스 전압을 인가한 상태에서 발생하는 와트(동손)

# 전압 변동률
1. $\epsilon =p\cos{\theta}+q\sin{\theta}$ (지상)<br>
    $\epsilon =p\cos{\theta}-q\sin{\theta}$ (진상)
2. 최대 전압 변동률과 역률
    1. $\cos{\theta}=\rho$
    2. $\cos{\theta}\neq 1$
        - 최대 전압 변동률 $\epsilon_{max}=Z=\sqrt{p^{2}+q^{2}}$
        - 최대 전압 변동률일 때 역률 $\cos{\theta_{max}}=\dfrac{p}{Z}=\dfrac{p}{\sqrt{p^{2}+q^{2}}}$

# 변압기의 결선
1. $\Delta -\Delta$ 결선
    1. 1, 2차 전압에 위상차가 없음. 상전류는 선전류의 $\dfrac{1}{\sqrt{3}}$ 배
    2. 제 3고조파 여자 전류가 통로를 가지게 되므로 기전력은 사인파 전압을 유기함
    3. 변압기 외부에 제 3고조파가 발생하지 않으므로 통신선의 유도장해가 없음
    4. 변압기 1대 고장 시 $V-V$ 결선으로 변경하여 3상 전력 공급이 가능
    5. 비접지 방식이므로 이상전압 및 지락 사고에 대한 보호가 어려움
    6. 선간전압과 상전압이 같으므로 고압인 경우 절연이 어려움
2. $Y-Y$ 결선
    1. 1, 2차 전압에 위상차가 없음
    2. 중성점을 접지할 수 있으므로 이상전압으로부터 변압기를 보호할 수 있음
    3. 상전압이 선간전압의 $\dfrac{1}{\sqrt{3}}$ 배이므로 절연이 용이하여 고전압에 유리
    4. 중성점 접지 시 접지선을 통해 제 3고조파가 흐르므로 통신선에 유도장해가 발생
    5. 보호 계전기 동작이 확실함
    6. 역 $V$ 결선 운전이 가능
3. $\Delta -Y$ 결선(승압용), $Y-\Delta$ 결선(강압용)
    1. $Y$ 결선으로 중성점을 접지할 수 있으므로 이상전압으로부터 변압기를 보호할 수 있음
    2. $\Delta$ 결선에 의한 여자 전류의 제 3고조파 통로가 형성되므로 기전력의 파형이 사인파가 됨
    3. $\Delta -Y$ 는 송전단에, $Y-\Delta$ 는 수전단에 설치
    4. 1, 2차 전압 및 전류 간에는 $30^{\circ}$ 의 위상차가 발생
    5. 1대 고장 시 송선 불가능
4. $V-V$ 결선
    1. 출력 $P_{V}=\sqrt{3}P_{1}$
    2. 4대의 경우 출력 $P_{V}=2\sqrt{3}P_{1}$
    3. (이용률) $=\dfrac{\sqrt{3}P_{1}}{2P_{1}}\times 100\fallingdotseq 86.6\%$
    4. (출력비) $=\dfrac{\sqrt{3}P_{1}}{3P_{1}}\times 100\fallingdotseq 57.7\%$
5. 상수의 변환
    1. 3상 :arrow_right: 2상 변환
        - Scott 결선($T$ 결선)
            - 이용률: $86.6\%$
            - $T$ 좌 변압기의 권수비: $a_{T}=\dfrac{\sqrt{3}}{2}\times a$
        - Meyer 결선
        - Wood Bridge 결선
    2. 3상 :arrow_right: 6상 변환
        - Fork 결선
        - 이중 성형 결선
        - 환상 결선, 대각 결선, 이중 $\Delta$ 결선, 이중 $Y$ 결선

# 병렬 운전
1. 병렬 운전 조건
    1. 극성, 권수비, 1, 2차 정격 전압이 같아야 한다(용량 무관).
    2. 각 변압기의 저항과 리액턴스비가 같아야 한다.
    3. 부하분담 시 용량에 비례하고 임피던스 강하에는 반비례해야 한다.
    4. 상회전 방향과 각 변위가 같아야 한다($3\phi$ 변압기).

    | 가능 | 불가능 |
    | --- | --- |
    | $Y-Y$와 $Y-Y$ | $Y-Y$와 $Y-\Delta$ |
    | $Y-\Delta$와 $Y-\Delta$ | $Y-\Delta$와 $\Delta-\Delta$ |
    | $Y-\Delta$와 $Y-\Delta$ | $\Delta -Y$와 $Y-Y$ |
    | $\Delta -\Delta$와 $\Delta -\Delta$ | $\Delta -Y$와 $Y-Y$ |
    | $\Delta -Y$와 $\Delta -Y$ | - |
    | $\Delta -\Delta$와 $Y-Y$ | - |

2. 부하분담
    1. $\dfrac{I_{a}}{I_{b}}=\dfrac{I_{A}}{I_{B}}\times\dfrac{\% Z_{b}}{\% Z_{a}}$<br>
        분담 전류는 정격 전류에 비례하고 누설 임피던스에 반비례
    2. $\dfrac{P_{a}}{P_{b}}=\dfrac{P_{A}}{P_{B}}\times\dfrac{\% Z_{b}}{\% Z_{a}}$<br>
        분담 용량은 정격 용량에 비례하고 누설 임피던스에 반비례
        - $I_{a}$: A기 분담 전류, $I_{A}$: A기 정격 전류, $P_{a}$: A기 분담 용량, $P_{A}$: A기 정격 용량
        - $I_{b}$: B기 분담 전류, $I_{B}$: B기 정격 전류, $P_{b}$: B기 분담 용량, $P_{B}$: B기 정격 용량

# 특수 변압기
1. 단권 변압기
    1. 특징
        - 코일 권수 절약
        - 손실이 적음
        - 효율이 좋름
        - 누설 리액턴스가 작음
        - 1차와 2차 절연이 어려움
        - 단락전류가 큼
        - 고압용, 대용량에 적절
    2. $\dfrac{V_{h}}{V_{l}}=\dfrac{N_{1}+N_{2}}{N_{1}}=1+\dfrac{N_{2}}{N_{1}}$ <br>
        $V_{h}=\left(1+\dfrac{1}{a}\right)V_{l}=\left(1+\dfrac{N_{2}}{N_{1}}\right)V_{l}$
    3. 부하 용량(2차 출력): $W=V_{h}I_{2}$
    4. 자기 용량(변압기 용량): $\omega =eI_{2}=\left(V_{h}-V_{l}\right)I_{2}$
    5. $\dfrac{\left(\text{자기 용량}\right)}{\left(\text{부하 용량}\right)}=\dfrac{V_{h}-V_{l}}{V_{h}}$

    | 구분 | 단상 | $Y$ 결선 | $\Delta$ 결선 | $V$ 결선 |
    | --- | --- | --- | --- | --- |
    | $\dfrac{\left(\text{자기 용량}\right)}{\left(\text{부하 용량}\right)}$ | $\dfrac{V_{h}-V_{l}}{V_{h}}$ | $\dfrac{V_{h}-V_{l}}{V_{h}}$ | $\dfrac{V_{h}^{2}-V_{l}^{2}}{\sqrt{3}V_{h}V_{l}}$ | $\dfrac{2}{\sqrt{3}}\cdot\left(\dfrac{V_{h}-V_{l}}{V_{h}}\right)$ |

2. 누설 변압기
    1. 수하특성(정전류 특성)
    2. 전압 변동이 큼
    3. 누설 리액턴스가 큼
    4. 용도: 용접용 변압기
3. 3상 변압기(내철형, 외철형)
    1. 사용 철심양이 감소하여 철손이 감소하므로 효율이 좋음
    2. 값이 싸고 설치 면적이 작음
    3. $Y$, $\Delta$ 결선을 변압기 외함 내에서 하므로 부싱 절약
    4. 단상 변압기로의 사용이 불가능(각 권선마다 독립된 자기 회로가 없기 때문)
    5. 1상만 고장이 발생해도 사용할 수 없고 보수가 어려움
4. 3권선 변압기
    1. $Y-Y-\Delta$ 결선을 하여 제 3고조파를 제거 가능
    2. 조상 설비를 시설하여 송전선의 전압과 역률을 조정 가능
    3. 발전소에서 소내용 전력공급이 가능
5. 계기용 변압기(PT)
    1. 고전압을 저전압으로 변성, 2차측 정격전압($110\textsf{V}$)
    2. 2차측 단락 금지
6. 계기용 변류기(CT)
    1. 대전류를 소전류로 변성, 2차 정격전류($5\textsf{A}$)
    2. CT 점검 시 2차측 단락(2차측 개방 금지): 2차측 절연보호, 2차측에 고압 유기되는 것을 방지
7. 변압기 보호 계전기
    1. 전기적인 보호장치: 차동 계전기, 비율차동 계전기
    2. 기계적인 보호장치: 부흐홀츠 계전기, 서든 프레서(압력 계전기), 유위계, 유온계
    - 부흐홀츠 계전기: 변압기 내부 고장 검출, 수소 검출
    - 콘서베이터: 변압기 절연유의 열화 방지

# 변압기의 손실 및 효율
1. 손실: [무부하손(무부하시험)] + [부하손(단락시험)]
    1. 동손(부하손)
    2. 철손: 히스테리시스손, 와류손
2. 변압기 효율
    1. 전부하 효율<br>
        $\eta =\dfrac{P_{n}\cos{\theta}}{P_{n}\cos{\theta}+P_{i}+P_{c}}\times 100$
    2. $\dfrac{1}{m}$ 부하 시 효율<br>
        $\eta_{\frac{1}{m}}=\dfrac{\dfrac{1}{m}P_{n}\cos{\theta}}{\dfrac{1}{m}P_{n}\cos{\theta}+P_{i}+\left(\dfrac{1}{m}\right)^{2}P_{c}}\times 100$
    3. 최대 효율 조건
        - 전부하 시: $P_{i}=P_{c}$
        - $\dfrac{1}{m}$ 부하 시: $P_{i}=\left(\dfrac{1}{m}\right)^{2}P_{c}$, $\dfrac{1}{m}=\sqrt{\dfrac{P_{i}}{P_{c}}}$
        - 최대 효율: $\eta_{max}=\dfrac{\dfrac{1}{m}P_{n}\cos{\theta}}{\dfrac{1}{m}P_{n}\cos{\theta}+2P_{i}}\times 100$
        - 전일 효율: $\eta_{day}=\dfrac{\left(\text{24시간 출력 전력량}\right)}{\left(\text{24시간 입력 전력량}\right)}\times 100$
    4. 일정시간 운전 시의 최대 효율 조건<br>
        $24P_{i}=\sum{hP_{c}}$: 전부하 운전 시간이 짧은 경우 철손을 작게 한다.

# 변압기의 시험
1. 권선의 저항 측정 시험
2. 단락 시험 :arrow_right: 임피던스 전압, 임피던스 와트(동손) 측정
3. 무부하 시험 :arrow_right: 여자 전류, 철손 측정