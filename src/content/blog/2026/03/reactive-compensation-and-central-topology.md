---
title: '[PowerSimCore / Models] 무효전력 보상 장치 추가 및 PowerSystem 중앙 위상 관리 구축'
pubDate: '2026-03-22T20:55:30+09:00'
tags: ['cpp', 'reactor', 'capacitor']
excerpt: 'Reactor 및 Capacitor 컴포넌트 구현과 Bus 의존성 제거를 통한 PowerSystem 중심의 연결 토폴로지 설계 적용'
---

무효전력 보상 기기를 모델링하고, 기존 분산형 위상 연결 구조를 중앙 집중식 시스템 레지스트리로 변경해 위상 검증 안정성을 확보했다.

## Reactor 및 Capacitor 무효전력 보상 모델 추가

- 무효전력 제어를 수행하는 `Reactor` 및 `Capacitor` 객체를 새로 구현해 전력망 보상 요소로 활용하도록 설계했다.
- 직렬과 병렬 연결을 지원하도록 `fromBus`와 `toBus` 구조를 적용했으며, 병렬 연결 편의성을 고려해 `toBus`를 기본값 0(대지)으로 설정하는 오버로딩 생성자를 추가했다.
- `BaseSystem` 내 `getBaseImpedance()`를 참조하되 리액터는 양수(+j), 커패시터는 음수(-j) 허수부 기호를 갖도록 복소 임피던스 출력 로직을 구현했다.

## PowerSystem 중앙 집중형 위상 관리 아키텍처 구축

- 개별 `Bus` 객체가 직접 하위 `Load`, `Line` 포인터를 소유하던 강결합 분산 토폴로지를 제거하고, 모선을 순수 데이터 전송 객체(DTO) 형태로 변경했다.
- 토폴로지 관리 전담 `PowerSystem` 클래스를 적용해 시스템 내 모든 버스, 라인, 변압기 등을 단일 레지스트리에 등록·관리하는 구조로 아키텍처를 변경했다.
- `Load` 객체 내부에 `connectedBus_` 멤버 변수를 새로 추가해 기기 자신이 접속된 위치를 스스로 식별하도록 수정했다.
- `PowerSystem`에 기기가 등록될 때 `validateBuses()` 메서드가 호출되도록 설계해, 출발 모선과 도착 모선 등록 여부를 점검하고 누락 시 예외(`std::invalid_argument`)를 처리하도록 구현했다.
- 특정 모선(`busId`)에 연결된 인접 기기 포인터들을 식별·반환하는 `getConnectedEquipment()` 인터페이스를 구현하고, 해당 결과를 `ConnectedEquipment` 구조체로 그룹화해 제공하도록 설계했다.

## 전력 시스템 명명 규칙 표준화

- 전력 공학 표준 용어에 부합하도록 소스코드 전반에서 교차점을 지칭하던 'Node' 명칭을 'Bus'로 변경했다.
- 이에 맞춰 모델 인터페이스 `getConnectedNodes()`를 `getConnectedBuses()`로, 위상 검증 로직 `validateNodes()`를 `validateBuses()`로 각각 변경해 도메인 언어 일관성을 개선했다.
