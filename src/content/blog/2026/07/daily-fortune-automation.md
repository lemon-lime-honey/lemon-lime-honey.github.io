---
title: '[DailyFortune] 일일 운세 기록 자동화 프로젝트'
pubDate: 2026-07-21T21:43:17+09:00
tags: ['Elixir', 'Rust', 'Axum', 'Docker', 'Notion API']
excerpt: Rust 연산 엔진과 Elixir 제어 파이프라인으로 구축한 일일 운세 자동화 시스템
---

## 모노레포 기반 API 및 연산 컨테이너 인프라 셋업

- 환경변수 로딩 및 유효성 검증을 위해 `verify_env.sh` 스크립트를 작성하여 `BIRTH_DATE`, `TARGET_TZ_OFFSET` 등의 필수 파라미터 누락을 원천 차단했다.
- `docker-compose.yml`을 통해 천문 궤도 연산을 전담하는 Rust 기반의 `calc` 컨테이너와 외부 API 연동을 제어하는 Elixir 기반의 `api` 컨테이너를 내부 네트워크를 통해 통신하도록 구성했다.

## Axum 기반 Rust 천문 연산 백엔드 구축

- `handlers::calculate_chart` 함수를 구현하여 외부의 HTTP POST 요청을 받아 천문 연산 결과를 JSON 형태로 반환하도록 구성했다.
- `models.rs` 내부에 `ChartRequest`와 `ChartResponse` 구조체를 정의하여 요청 및 응답 스키마를 정의했다.
- 출생 차트(`natal_chart`)와 현재 트랜짓 차트(`transit_chart`), 그리고 대운(Dasha) 정보를 하나의 응답으로 통합 산출하는 로직을 적용했다.

## Elixir 파이프라인과 스케줄러 통합

- `Req` 클라이언트를 사용하여 Rust 백엔드와 통신하는 `CalcClient` 모듈을 구현했다.
- `Api.PromptBuilder` 모듈을 작성하여 LLM이 반드시 `score`, `keyword`, `fortune` 3개의 키를 가진 JSON 스키마를 강제하는 프롬프트를 생성하도록 구현했다.
- `GenServer`를 상속받은 `Api.Scheduler`를 구현하여 매일 지정된 시각(`TARGET_HOUR`)에 `FortuneService.run_pipeline()`이 자동 실행되도록 파이프라인을 완성했다.

## 천문 라이브러리 좌표계 결함 및 노드 연산 버그 교정

- `vedaksha` 라이브러리가 트랜짓 행성의 구역을 네이탈 차트 기준이 아닌 스냅샷 차트 기준으로 독립 계산해버리는 문제를 발견하여, Tropical 좌표계 기반 데이터만 추출한 뒤 백엔드에서 직접 오차를 일괄 차감하여 Sidereal 좌표계로 통일했다.
- 내부 노드 계산 과정에서 원하는 결과를 얻지 못해 `vedaksha::ephem::nodes::mean_node(jd)` 함수를 직접 호출하여 라후와 케투의 정확한 경도를 수동으로 주입했다.
- 수동 Tropical/Sidereal 오차 차감 과정에서 255도를 초과하는 경도 값이 훼손되는 `as u8` 정수 캐스팅 오버플로우 버그를 발견하고 적절한 정수 타입으로 변경하여 정상적으로 처리하도록 수정했다.

## 동적 트리거 도입 및 LLM 환각 현상 통제

- 방대한 대운 리스트와 불필요한 외행성 데이터가 LLM 프롬프트에 주입되어 자의적인 하우스 재배치를 유발하는 할루시네이션 메커니즘을 확인하여, 활성화된 단일 기간만 프롬프트에 전달하도록 프롬프트를 단순화했다.
- 수개월간 위치가 변하지 않는 느린 천체들로 인해 매일 동일한 운세가 반복 출력되는 현상을 억제하고자 `ActivatedTrigger` 구조체를 도입했다.
- 달 등 빠른 트랜짓 천체가 느린 천체와 특정한 각도를 맺으며 자극을 주는 날에만 해당 데이터를 프롬프트에 주입하는 양방향 aspect 연산 알고리즘을 구현했다.
- 서양 점성술 지식이 해석을 오염시키는 것을 막기 위해, 해석에 직접 사용하지 않는 부가 정보나 정량화된 점수 지표는 LLM 프롬프트에서 완전히 배제하고 `NotionClient`를 통해 데이터베이스 다중 선택 속성으로 직접 적재했다.
