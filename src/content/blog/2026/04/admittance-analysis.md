---
title: '[PowerSimCore / analysis] 어드미턴스 행렬 구성 및 복소수 행렬 연산 유틸리티 구현'
pubDate: '2026-04-23T23:45:10+09:00'
tags: ['cpp', 'matrix math', 'admittance']
excerpt: '동적 어드미턴스 행렬(Y-Bus) 생성을 위한 math 및 analysis 모듈 구축. 외부 라이브러리 없는 가우스-조르당 역행렬 알고리즘 적용.'
---

전력망 토폴로지를 수식적으로 표현하는 어드미턴스 행렬(Y-Bus)을 동적으로 구성하기 위해 `math` 및 `analysis` 스코프 내 핵심 유틸리티를 개발했다. 외부 의존성 없이 독립적으로 구동 가능한 복소수 기반 선형 대수 연산 코드를 구축했다.

## 복소수 행렬 연산 모듈 및 동적 Y-Bus 생성 알고리즘 구현

- 2차원 `std::vector<std::complex<double>>`을 활용하여 N x N 복소수 행렬을 표현하는 `ComplexMatrix` 클래스를 `core::math` 스코프에 추가했다.
- 가우스-조르당 소거법(Gauss-Jordan Elimination) 알고리즘을 활용하여 외부 수학 라이브러리 없이 행렬의 역행렬을 직접 계산하도록 구현했다.
- 전력망 토폴로지 모델들을 순회하며 모선(Bus)의 개수에 맞는 어드미턴스 행렬을 자동 생성하는 `YBusBuilder`를 `core::analysis` 스코프에 설계했다.
- 송전선(`Line`)과 변압기(`Transformer`)의 임피던스 역수를 산출하여 자가 어드미턴스(대각 성분) 및 상호 어드미턴스(비대각 성분)에 가산하는 로직을 적용했다.
- 발전원(`PowerSource`)의 내부 임피던스를 동적으로 파싱하여 어드미턴스 행렬의 모선 대각 성분에 병합하도록 구현했다.
- `YBusBuilderTest` 및 `ComplexMatrixTest` 단위 테스트를 작성하여 역행렬 계산 시 발생하는 특이 행렬 오류 판별과 복소수 연산의 수치적 정확성을 검증했다.
