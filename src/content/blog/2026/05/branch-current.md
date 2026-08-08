---
title: '[PowerSimCore / analysis] 선로별 고장 전류 분배 및 OCGR 지락 보호 모델링'
pubDate: '2026-05-19T22:30:15+09:00'
tags: ['cpp', 'fault distribution', 'ocgr']
excerpt: 'Z-Bus 행렬과 키르히호프 법칙을 활용한 선로별 분기 고장 전류 산출. 지락과전류계전기(OCGR) 모델링 및 위상 변환 알고리즘 적용.'
---

고장 발생 지점의 총 전류뿐만 아니라 네트워크를 구성하는 개별 송전선로로 흐르는 분기 고장 전류를 추적하는 분배 알고리즘을 구현했다. 산출한 상별 전류 및 영상 전류를 토대로 지락 사고 보호 로직을 연계했다.

## 위상별 분기 전류 산출 및 지락 보호 분석 알고리즘 통합

- 고장 시 각 송전선로에 분배되는 전류를 상별(A/B/C) 및 영상분으로 세분화해 보관하는 `BranchCurrentInfo` 구조체를 도입했다.
- `ThreePhaseFault`, `LineToLineFault`, `SingleLineToGroundFault` 분석 전략 내 Z-Bus 역행렬을 활용해 고장 중 모선 전압을 역산출하는 수식을 적용했다.
- 계산된 모선 전압과 선로 임피던스 간 차이를 바탕으로 키르히호프 법칙에 따른 각 분기 선로 전류를 도출해 `FaultReport` 구조체에 매핑했다.
- 복소수 위상 연산자(`a`, `a^2`)를 활용해 대칭분 전류를 실제 A/B/C 상 전류로 변환하는 좌표계 역변환 알고리즘을 비대칭 고장 전략 내 구현했다.
- `RelayType` 열거형에 지락과전류계전기를 의미하는 `OCGR`을 추가하고, `ProtectionCoordinator`가 계전기 타입에 맞춰 상 전류 최대값(OCR) 또는 영상 전류(OCGR)를 선택적으로 스캔하도록 분기 처리했다.
- `FaultCalculatorTest` 테스트 코드에 분기 전류 계산 결과와 개별 상 전류 매트릭스를 정밀 검증하는 assertion을 추가했다.
