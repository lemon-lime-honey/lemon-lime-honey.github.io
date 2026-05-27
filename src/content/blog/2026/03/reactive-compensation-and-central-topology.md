---
title: '[PowerSimCore / Models] 무효전력 보상 장치 추가 및 PowerSystem 중앙 위상 관리 구축'
pubDate: '2026-03-22T20:55:30+09:00'
tags: ['cpp', 'reactor', 'capacitor']
excerpt: 'Reactor 및 Capacitor 컴포넌트 구현과 Bus 의존성 제거를 통한 PowerSystem 중심의 연결 토폴로지 설계 적용'
---

무효전력 보상을 위한 능동 기기를 모델링하고, 기존 분산형으로 관리되던 위상 연결 구조를 중앙 집중식 시스템 레지스트리로 전면 리팩토링하여 위상 검증의 안정성을 확보했다.

## Reactor 및 Capacitor 무효전력 보상 모델 추가

- 무효전력 제어를 수행하는 `Reactor` 및 `Capacitor` 객체를 새롭게 구현하여 전력망의 보상 요소로 활용하도록 설계했다.
- 직렬 및 병렬 연결을 모두 유연하게 지원하도록 `fromBus`와 `toBus` 구조를 채택했으며, 병렬 연결의 편의성을 고려해 `toBus`를 기본값 0(대지)으로 설정하는 오버로딩 생성자를 추가했다.
- `BaseSystem`의 `getBaseImpedance()`를 참조하되, 리액터는 양수(+j), 커패시터는 음수(-j)의 허수부 기호를 가지도록 복소 임피던스 출력 로직을 차별화했다.

## PowerSystem 중앙 집중형 위상 관리 아키텍처 구축

- 개별 `Bus` 객체가 직접 하위 `Load`, `Line` 포인터를 소유하여 결합도가 높았던 기존 분산 토폴로지를 완전히 제거하고, 모선을 순수 데이터 전송 객체(DTO) 형태로 축소했다.
- 토폴로지 관리를 전담하는 `PowerSystem` 클래스를 도입하여 시스템 내의 모든 버스, 라인, 변압기 등을 단일 레지스트리에 등록하고 관리하는 방식으로 아키텍처를 개편했다.
- `Load` 객체 내에 `connectedBus_` 멤버 변수를 새롭게 추가하여 기기 자신이 접속된 위치를 능동적으로 식별하도록 수정했다.
- `PowerSystem`에 기기가 등록될 때 `validateBuses()` 메서드가 호출되도록 설계하여, 출발 모선과 도착 모선이 실제 등록되었는지 점검하고 누락 시 예외(`std::invalid_argument`)를 던지도록 안전망을 구축했다.
- 특정 모선(`busId`)에 연결된 인접 기기 포인터들을 식별하여 반환하는 `getConnectedEquipment()` 인터페이스를 구현하고, 그 결과를 `ConnectedEquipment` 구조체로 그룹화하여 제공하도록 설계했다.

## 전력 시스템 명명 규칙 표준화

- 표준 용어에 부합하도록 소스코드 전반에서 교차점을 지칭하던 'Node' 명칭을 'Bus'로 일괄 치환했다.
- 이에 맞추어 모델 인터페이스인 `getConnectedNodes()`를 `getConnectedBuses()`로, 위상 검증 로직인 `validateNodes()`를 `validateBuses()`로 변경하여 도메인 언어 일관성을 크게 향상시켰다.
