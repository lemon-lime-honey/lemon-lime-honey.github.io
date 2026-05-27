---
title: '[PowerSimCore / models] 차단기 및 계측 장비 상세 파생 모델 구현'
pubDate: '2026-04-15T22:30:15+09:00'
tags: ['cpp', 'power system']
excerpt: '기반 클래스를 상속받은 차단기, 단로기, CT, PT 등의 상세 전력망 기기 모델 작성. MOF의 컴포지션 패턴 적용 및 보호 계전기용 DTO 정의.'
---

이전 주차에 작성한 기반 클래스를 상속받아 실제 전력망을 구성하는 구체적인 개폐 장치 및 계측 장비 모델들을 추가했다. 코어 엔진과 분리된 순수 DTO(Data Transfer Object) 형태로 모델들을 설계했다.

## 전력망 상세 개폐 장치 및 계측기 컴포넌트 추가

- `Switch` 클래스를 상속받아 정격 전압과 정격 차단 전류 속성을 포함하는 `CircuitBreaker` 모델을 구현했다.
- `CircuitBreaker` 내부에 3상 표준 공식(`sqrt(3) * V * I`)을 적용하여 차단 용량을 반환하는 `getBreakingCapacity` 메서드를 추가했다.
- 상태 정보만을 저장하는 순수 DTO 형태의 `DisconnectingSwitch` 모델을 정의하여 단순 개폐기 역할을 수행하도록 설계했다.
- `InstrumentTransformer`를 상속받은 `CT` 및 `PT` 클래스를 구현하고, 각각 표준 2차 측 정격인 5A와 110V를 기본값으로 지정했다.
- 컴포지션(Composition) 기법을 활용하여 내부적으로 `PT`와 `CT` 인스턴스를 동시에 캡슐화하는 `MOF` 모델을 추가했다.
- 보호 협조 및 절연 조정을 위해 탭(Tap)과 타임 레버(Time Lever)를 기록하는 `Relay` 모델과 잔류 전압을 저장하는 `LightningArrester` 모델을 도입했다.
