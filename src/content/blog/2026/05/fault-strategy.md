---
title: '[PowerSimCore / analysis] 전략 패턴 기반 고장 계산 알고리즘 엔진 구현'
pubDate: '2026-05-03T14:30:00+09:00'
tags: ['cpp', 'fault analysis', 'strategy pattern']
excerpt: '추상화된 전략 패턴을 활용한 고장 계산 엔진 설계. 3상 단락 고장(Three-Phase Fault) 전류 및 차단기 용량 평가 로직 구현.'
---

확장 가능한 고장 분석 모듈을 구축하기 위해 `analysis` 스코프 내에 전략 패턴(Strategy Pattern)을 기반으로 하는 계산 엔진을 설계했다. 이를 통해 단락 고장 조건을 동적으로 주입하고 차단기의 물리적 스펙을 평가할 수 있는 뼈대를 마련했다.

## 전략 패턴 기반 고장 해석 엔진 및 3상 단락 모델 구현

- 고장 분석 알고리즘의 유연한 확장을 고려하여 `FaultStrategy` 추상 클래스와 해석 결과 데이터를 담는 `FaultReport` 구조체를 정의했다.
- `FaultStrategy`를 상속받은 `ThreePhaseFault` 전략 클래스를 구현하여 평형 3상 단락 고장 발생 시의 테브난 등가 임피던스(Thevenin Impedance)를 산출했다.
- 주입된 고장 전략을 실행하고 회로 내 특정 모선(Bus)의 고장 전류 및 단락 용량을 반환하는 `FaultCalculator::calculate` 메서드를 구축했다.
- 산출된 고장 용량과 시스템에 설치된 특정 차단기의 정격 차단 용량을 비교하여 기기의 안전성을 검증하는 `evaluateBreakerSafety` 평가 로직을 추가했다.
- `FaultCalculatorTest` 단위 테스트를 작성하여 3상 단락 전류 계산의 수치적 정확성과 차단기 안전성 판별 동작이 설계 의도대로 수행되는지 검증했다.
