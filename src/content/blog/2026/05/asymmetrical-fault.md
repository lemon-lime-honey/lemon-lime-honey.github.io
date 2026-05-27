---
title: '[PowerSimCore / analysis] 대칭 좌표법 기반 불평형 고장 해석기 및 네트워크 모델 고도화'
pubDate: '2026-05-18T21:15:30+09:00'
tags: ['cpp', 'symmetrical components', 'asymmetrical fault']
excerpt: '대칭 좌표법을 적용한 1선 지락 및 선간 단락 고장 해석 전략 추가. 정상 및 영상 임피던스를 반영한 Y-Bus 동적 구성 로직 개편.'
---

다양한 비대칭(불평형) 고장 조건에서의 전력망 해석을 지원하기 위해 토폴로지 모델과 수학적 기반 알고리즘을 고도화했다. 대칭 좌표법을 시스템 전반에 적용하여 컴포넌트별로 시퀀스 임피던스 특성을 정확하게 반영하도록 재설계했다.

## 대칭 좌표법 토폴로지 적용 및 비대칭 고장 해석 전략 구현

- 전력망의 불평형 고장 해석을 지원하기 위해 정상(Positive), 역상(Negative), 영상(Zero)분을 명시하는 `SequenceType` 열거형을 `models` 스코프에 도입했다.
- `YBusBuilder::build` 메서드에 시퀀스 타입 파라미터를 추가하여, 요구되는 시퀀스(정상/영상)에 따라 독립적인 어드미턴스 행렬을 어셈블리하도록 조립 로직을 재구성했다.
- `Line` 모델에 정상 및 영상의 직렬 임피던스와 병렬 어드미턴스(Shunt Admittance) 속성을 분리하여 저장하도록 모델 구조를 확충했다.
- 송전선의 병렬 어드미턴스를 pi-등가 회로 모델에 맞춰 Y-bus의 양단 대각 성분에 분할 가산하도록 `YBusBuilder` 알고리즘을 보완했다.
- `Transformer` 모델에 `WindingConnection` 열거형(Delta, Wye, WyeGrounded)을 도입하고, 각 결선 방식에 따라 영상 전류의 흐름을 차단하거나 통과시키는 토폴로지 구성 로직을 구현했다.
- `LineToLineFault` 및 `SingleLineToGroundFault` 전략 클래스를 추가하여 선간 단락과 1선 지락 고장 시의 대칭분 등가 임피던스 합성 및 단락 용량 산출 로직을 완성했다.
