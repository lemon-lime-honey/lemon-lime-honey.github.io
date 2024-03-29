---
layout: post
title:  이상전압
author: bs
date: '2024-01-25 18:58:00 +0900'
category: [EEE, Power Engineering]
tags: [전력공학]
math: true
---

# 이상전압
1. 내부 이상전압: 직격뢰, 유도뢰를 제외한 나머지
    1. 개폐 이상전압: 무부하 충전전류 개로 시 가장 큼, 무부하 송전 선로의 개폐, 전력용 변압기 개폐, 고장전류 차단
    2. 1선 지락 사고 시 건전상의 대지전위 상승
    3. 잔류전압에 의한 전위 상승
    4. 경(무)부하 시 페란티 현상에 의한 전위 상승
2. 외부 이상전압
    1. 원인: 직격뢰, 유도뢰, 다른 송전선로와의 혼촉사고 및 유도
    2. 방호 대책
        - 기계 기구 보호(변압기 보호설비)
        - 가공지선: 직격뢰, 유도뢰 차폐, 일반적으로 $45^{\circ}$ 이하 설계
        - 매설지선: 역섬락 방지(철탑저항을 작게)
3. 파형
    1. 표준 충격파: $1.2\times 50\mu\textsf{s}$
    2. 내부, 외부 이상전압은 파두장, 파미장 모두 다름
4. 반사와 투과계수
    1. 반사계수 $\beta =\dfrac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}$ (무반사조건: $Z_{1}=Z_{2}$)
    2. 투과계수 $r=\dfrac{2Z_{2}}{Z_{2}+Z_{1}}$

# 피뢰기(L.A): 변압기 보호
1. 구성: 특성 요소, 직렬 갭
    1. 직렬 갭: 이상전압 시 대지로 방전, 속류 차단
    2. 특성 요소: 임피던스 성분 이용, 방전전류 크기 제한
    3. 실드링: 전, 자기적 충격 완화
2. 피뢰기 정격전압
    1. 속류를 차단하는 교류 최고 전압
    2. 직접접지 계통: 0.8~1.0배
    3. 저항 또는 소호 리액터접지 계통: 1.4~1.6배
3. 피뢰기 제한전압(절연 협조의 기본)
    1. 피뢰기 동작 중 단자전압의 파고값
    2. 뇌전류 방전 시 직렬 갭 양단에 나타나는 교류 최고 전압
    3. 피뢰기가 처리하고 남는 전압
    4. $\left(\text{제한전압}\right) = \left(\text{이상전압 투과전압}\right) - \left(\text{피뢰기가 처리한 전압}\right)$<br>
        $e_{a}=e_{3}-V=\left(\dfrac{2Z_{2}}{Z_{2}+Z_{1}}\right)e_{i}-\left(\dfrac{Z_{2}\cdot Z_{1}}{Z_{2}+Z_{1}}\right)i_{a}$
4. 구비조건
    1. 제한전압이 낮아야 한다.
    2. 속류 차단 능력이 우수해야 한다.
    3. 충격 방전개시전압이 낮아야 한다.
    4. 상용 주파 방전개시전압이 높아야 한다.
5. 절연 협조<br>
    피뢰기의 제한전압 < 변압기의 기준충격 절연강도(BIL) < 부싱, 차단기 < 선로애자
    - 피뢰기의 제 1보호대상: 변압기
6. 절연체계
    1. 내뢰: 견디도록 설계
    2. 외뢰: 피뢰장치로 보호 및 절연

# 단로기
1. 부하 차단 및 개폐 불가
2. 선로 기기의 접속 변경
3. 기기를 선로로부터 완전 개방
4. 무부하 선로의 개폐
5. 차단기 앞에 직렬 시설(선로 개폐유무 확인 가능)

# 차단기
1. 목적
    1. 정상 시 부하전류 안전하게 통전
    2. 사고 시 전로를 차단하여 기기나 계통 보호
2. 동작 책무
    1. 일반용
        - 갑호: O - 1분 - CO - 3분 - CO
        - 을호: CO - 15초 - CO
    2. 고속도 재투입용: O - t초 - CO - 1분 - CO
3. 차단 시간
    1. 트립코일 여자로부터 소호까지의 시간
    2. 개극 시간과 아크 시간의 합(3~8 $\textsf{Hz}$)
4. 차단 용량(3상)<br>
    $P_{s}=\sqrt{3}\times\left(\text{정격전압}\right)\times\left(\text{정격차단전류}\right)$<br>
5. 차단기 트립 방식
    1. 전압 트립 방식
    2. 콘덴서 트립 방식
    3. CT 트립 방식
    4. 부족전압 트립 방식
6. 인터록: 차단기가 열려 있어야 단로기 조작 가능
7. 차단기 종류(소호매질에 따른 분류)

| 종류 | 특징 | 소호매질 |
| :---: | :--- | :---: |
| 공기차단기<br> (ABB) | - 소음이 큼<br> - 공기압축설비 필요($10$~$20\textsf{kg/cm}^{2}$) | 압축 공기 |
| 가스차단기<br> (GCB) | - 밀폐 구조이므로 소음이 없음<br> - 공기의 $2$~$3$배 정도의 절연내력을 가짐<br> - 소호능력 우수(공기의 $100$~$200$배)<br> - 무색, 무취, 무독성, 난연성(불활성)<br> - $154\textsf{kV}$, $345\textsf{kV}$ | $SF_{6}$ |
| 유입차단기<br> (OCB) | - 방음 설비 불필요<br> - 부싱 변류기 사용 가능<br> - 화재 위험이 있음 | 절연유 |
| 자기차단기<br> (MBB) | - 보수 및 점검 용이<br> - 전류 절단에 의한 과전압이 발생하지 않음<br> - 고유 주파수에 차단 능력이 좌우되지 않음 | 전자력 |
| 진공차단기<br> (VCB) | - 소내 공급용 회로($6\textsf{kV}$급)<br> - 차단 시간이 짧고 폭발음이 없음<br> - 고유 주파수에 차단 능력이 좌우되지 않음 | 진공 |
| 기중차단기<br> (ACB) | - 소형, 저압용 차단기 | 대기 |

# 보호계전기
1. 보호 계전기의 구비조건
    1. 열적, 기계적으로 견고해야 한다.
    2. 감도가 예민해야 한다.
    3. 시간 지연이 적어야 한다.
    4. 후비 보호 능력이 있어야 한다.
2. 보호 계전기의 종류
    1. 선로 보호용
        - 거리 계전기
            - 전압, 번류를 입력량으로 한 함수값 이하가 되면 동작
            - 기억 작용(고장 후에도 고장 전 전압을 잠시 유지)
        - 지락 계전기
            - 선택접지 계전기(병렬 2회선, 다회선)
            - 지락 방향 계전기
    2. 발전기, 변압기 보호용
        - 과전류 계전기
        - 부흐홀츠 계전기
            - 변압기와 콘서베이터 연결과 도중에 설치
        - 차동 계전기: 양쪽 전류차에 의해 동작
        - 비율차동 계전기
3. 시한특성
    1. 순한시 계전기: 최소 동작전류 이상의 전류가 흐르면 즉시 동작, 고속도 계전기($0.5$~$2\textsf{Cycle}$)
    2. 정한시 계전기: 동작전류의 크기에 관계없이 일정시간에 동작
    3. 반한시 계전기: 동작전류가 적을 때에는 동작시간이 길고 동작전류가 클 때에는 동작시간이 짧음
    4. 반한시성 정한시 계전기: 반한시, 정한시 계전기의 특성을 모두 가지고 있음

# 계기용 변압기
1. 고전압을 저전압으로 변성
2. 2차 전압 110$\textsf{V}$
3. 계측기(전압계, 주파수계, 파일럿 램프)나 계전기 전원
4. 종류
    1. 전자형
        - 전자유도 원리
        - 오차가 적고 특성이 우수
        - 절연강도가 낮음($66\textsf{kV}$급 이하)
    2. 콘덴서형
        - 콘덴서의 분압회로
        - 오차가 크고 절연강도가 높음($154\textsf{kV}$급 이하)
5. 점검 시: 2차 측 개방(2차 측 과전류에 대한 보호)

# 변류기
1. 대전류를 소전류로 변성
2. 2차 전류 $5\textsf{A}$
3. 계측기(전륙0)의 전원 공급, 전류 측정
4. 종류: 권선형, 관통형, 건식, 몰드형, 유입형, 영상
5. 점검 시: 2차 측 단락(2차 측 절연보호)