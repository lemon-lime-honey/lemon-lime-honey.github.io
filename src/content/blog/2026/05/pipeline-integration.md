---
title: '[PowerSimCore / analysis] 보호 계전 파이프라인 통합 및 시스템 아키텍처 문서화'
pubDate: '2026-05-25T23:15:40+09:00'
tags: ['cpp', 'integration', 'pipeline']
excerpt: '전체 고장 해석 리포트를 활용한 보호 계전 시뮬레이션 파이프라인 연결. 예외 처리 강화'
---

고장 계산 알고리즘 엔진과 보호 협조 모듈을 엔드투엔드(End-to-End) 파이프라인으로 통합했다. 모듈 간 연결 시 발생하는 휴먼 에러를 방지하기 위해 방어적 예외 처리 로직을 적용했다.

## 고장 해석 및 보호 협조 시뮬레이션 통합 파이프라인 완성

- `models` 스코프의 `PowerSystem` 클래스에 특정 CT 식별자로부터 해당 장비가 소속된 선로 이름을 역추적하는 `getLineByCT` 헬퍼 함수를 추가했다.
- `ProtectionCoordinator::simulate` 메서드의 입력 파라미터를 개별 분기 전류 객체에서 전체 `FaultReport` 데이터 구조로 변경하여 컴포넌트 간 결합 유연성을 높였다.
- 시뮬레이션 과정에서 `getLineByCT`를 호출해 타깃 선로를 식별하고, 전달받은 `FaultReport` 내부에서 해당 선로의 고장 전류 데이터를 자동 추출하도록 내부 로직을 개선했다.
- CT 매핑이 누락되었거나 리포트 내 선로 데이터가 존재하지 않을 경우 `std::invalid_argument` 및 `std::runtime_error`를 명시적으로 던지는 Fail-Fast 예외 처리 구조를 확립했다.
- `ProtectionCoordinatorTest`에 모의 선로와 CT 맵핑 환경을 구성하고, 영상 전류 기반의 `OCGR` 계전기가 정상적으로 차단기를 트립시키는 통합 단위 테스트를 작성했다.
