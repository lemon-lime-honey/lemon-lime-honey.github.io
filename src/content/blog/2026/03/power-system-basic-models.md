---
title: '[PowerSimCore / Models] 전력망 기초 컴포넌트(Load, Line, Bus) 구조 설계'
pubDate: '2026-03-08T18:45:12+09:00'
tags: ['cpp', 'power system', 'simulation', 'modeling']
excerpt: 'C++ 기반 전력망 시뮬레이터를 위한 부하, 선로, 모선 객체 기본 구조 설계 및 교류 전력 계산 로직 구현'
---

전력망 시뮬레이터 핵심 연산을 위해 기본 단위인 부하(Load), 송전 선로(Line), 모선(Bus) 객체의 초기 구조를 설계하고 위상 연결성을 구현했다.

## 전력망 물리 요소 및 교류 계산 로직 구현

- `Load` 클래스를 설계해 유효 전력(`activePower`)과 무효 전력(`reactivePower`)을 토대로 `std::complex<double>` 형태의 피상 전력을 반환하는 `getComplexPower()` 연산과 역률 연산(`getPowerFactor()`) 로직을 구현했다.
- 추후 단락 사고 계산 시 기여도를 분리할 목적으로 일반 부하와 전동기 부하를 구분하는 `LoadType` 열거형(`General`, `Motor`)을 도입했다.
- `Line` 클래스는 송전 선로 분포 정수 파라미터(저항, 인덕턴스, 컨덕턴스, 커패시턴스)를 입력받아 교류 임피던스와 어드미턴스를 도출하도록 모델링했다.
- 주파수 종속 리액턴스와 서셉턴스를 정확히 계산하고자 C++20 표준 상수 `std::numbers::pi`를 적용했다.

## 초기 토폴로지 구성을 위한 모선 객체 설계

- 전력망 내 위상수학적 연결 거점 역할을 수행할 `Bus` 객체를 설계해 고유 식별자(`id`)와 공칭 전압(`nominalVoltage`) 데이터를 관리하도록 구성했다.
- 초기 아키텍처 단계에서는 개별 `Bus` 객체가 직접 `std::vector<std::shared_ptr<models::Load>>` 및 `Line` 포인터 컨테이너(`loads_`, `lines_`)를 내부적으로 소유해 인접 하위 컴포넌트 위상 연결을 스스로 관리하는 방식을 채택했다.
