---
title: '[DailyFortune] 일일 운세 기록 자동화 프로젝트'
pubDate: '2026-07-21T21:43:17+09:00'
tags: ['Elixir', 'Rust', 'Axum', 'Docker', 'Notion API']
excerpt: 'Rust 연산 엔진과 Elixir 제어 파이프라인으로 구축한 일일 운세 자동화 시스템'
---

## 모노레포 기반 API 및 연산 컨테이너 인프라 셋업

- 환경변수 로딩 및 유효성 검증 전용 `verify_env.sh` 스크립트를 작성해 `BIRTH_DATE`, `TARGET_TZ_OFFSET` 등 필수 파라미터 누락을 원천 차단했다.
- `docker-compose.yml`을 구성해 천문 궤도 연산 전담 Rust 기반 `calc` 컨테이너와 외부 API 연동 제어 Elixir 기반 `api` 컨테이너가 내부 네트워크를 매개로 통신하도록 인프라를 구축했다.

## Axum 기반 Rust 천문 연산 백엔드 구축

- `handlers::calculate_chart` 함수를 구현해 외부 HTTP POST 요청을 접수하고 천문 연산 결과를 JSON 형태로 반환하도록 구성했다.
- `models.rs` 내부에 `ChartRequest` 및 `ChartResponse` 구조체를 정의해 요청·응답 스키마를 규격화했다.
- 출생 차트(`natal_chart`), 현재 트랜짓 차트(`transit_chart`), 대운(Dasha) 정보를 단일 응답으로 통합 산출하는 로직을 적용했다.

## Elixir 파이프라인과 스케줄러 통합

- `Req` 클라이언트를 기반으로 Rust 백엔드와 통신하는 `CalcClient` 모듈을 구현했다.
- `Api.PromptBuilder` 모듈을 신설해 LLM이 `score`, `keyword`, `fortune` 3개 키를 갖춘 JSON 스키마를 뱉어내도록 프롬프트 제약을 강제했다.
- `GenServer`를 상속한 `Api.Scheduler`를 구현해 매일 지정 시각(`TARGET_HOUR`)에 `FortuneService.run_pipeline()`이 자동 구동하는 파이프라인을 완성했다.

## 천문 라이브러리 좌표계 결함 및 노드 연산 버그 교정

- `vedaksha` 라이브러리가 트랜짓 행성 구역을 네이탈 차트 대신 스냅샷 차트 기준으로 독단 계산하는 결함을 적발했다. 이에 Tropical 좌표계 데이터만 우선 추출한 뒤 백엔드에서 직접 오차를 일괄 차감해 Sidereal 좌표계로 통일하는 워크어라운드를 적용했다.
- 내부 노드 산출 과정 중 원치 않는 결괏값이 도출되어, `vedaksha::ephem::nodes::mean_node(jd)` 함수를 직접 호출함으로써 라후와 케투의 정확한 경도를 수동 주입했다.
- 수동 Tropical/Sidereal 오차 차감 연산 중 255도를 초과하는 경도 값이 파손되는 `as u8` 정수 캐스팅 오버플로우 버그를 발견해, 적합한 정수 타입으로 변경 조치했다.

## 동적 트리거 도입 및 LLM 환각 현상 통제

- 방대한 대운 리스트와 불필요한 외행성 데이터가 LLM 프롬프트에 주입될 시 자의적 하우스 재배치를 유발하는 할루시네이션(환각) 기제를 확인했다. 이를 억제하고자 활성화된 단일 기간 데이터만 프롬프트에 전달하도록 입력을 단순화했다.
- 수개월간 위치 변동이 없는 느린 천체 탓에 매일 판박이 운세가 출력되는 현상을 저지할 목적으로 `ActivatedTrigger` 구조체를 도입했다.
- 달 등 빠른 트랜짓 천체가 느린 천체와 특정 각도를 맺으며 자극을 발산하는 날에 한해 해당 데이터를 프롬프트에 주입하는 양방향 aspect 연산 알고리즘을 탑재했다.
- 서양 점성술 사전 지식이 해석을 오염시키는 사태를 방지하고자, 해석에 직접 가담하지 않는 부가 정보 및 정량 점수 지표는 LLM 프롬프트에서 전면 배제하고 `NotionClient`를 거쳐 데이터베이스 다중 선택 속성으로 직접 적재시켰다.
