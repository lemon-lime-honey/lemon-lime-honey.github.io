# Project Context

## 프로젝트 개요 (Project Overview)

이 프로젝트는 GitHub Pages에 호스팅되는 개인 블로그 및 포트폴리오 웹사이트(`lemon-lime-honey.github.io`)입니다. 정적 사이트 생성(SSG)을 기반으로 빠른 로딩 속도와 최적화된 성능을 제공하며, MDX를 활용한 블로그 포스트 작성 및 관리를 목적으로 합니다.

## 기술 스택 (Tech Stack)

- **Core Framework**: Astro (v6)
- **UI Framework**: React (v19)
- **Styling**: Tailwind CSS (v4) + Vite Plugin, DaisyUI (Semantic Theming)
- **Content**: MDX (Markdown + JSX)
- **Language**: TypeScript (v6, Strict Mode)
- **Package Manager**: pnpm (v10)
- **Syntax Highlighting**: Shiki (Theme: `github-light-high-contrast`)

## 디렉토리 구조 (Directory Structure)

- `src/pages/`: 파일 기반 라우팅을 담당하는 페이지 폴더 (`index.astro`, `about.astro`, `blog/` 등)
- `src/components/`: 재사용 가능한 UI 컴포넌트 폴더. 주로 React (`.tsx`) 컴포넌트들(`Navbar`, `Footer`, `ThemeToggle` 등)로 구성되며, 일부 Astro 내장 컴포넌트를 사용하는 경우 `.astro`로 작성됩니다.
- `src/content/`: 블로그 포스트 등 콘텐츠 컬렉션이 저장되는 폴더 (MD/MDX 파일)
- `src/layouts/`: 페이지의 공통 레이아웃을 정의하는 폴더
- `src/styles/`: 글로벌 CSS 및 Tailwind/DaisyUI 설정과 관련된 스타일 폴더
- `src/assets/`: 빌드 시 최적화가 필요한 이미지 등의 에셋 폴더
- `public/`: 빌드 과정 없이 그대로 서빙되는 정적 파일 (파비콘 등)
- `dist/`: 최종 프로덕션 빌드 결과물이 생성되는 폴더

## 코딩 컨벤션 (Coding Conventions)

- **타입스크립트 (TypeScript)**: `astro/tsconfigs/strict`를 상속받아 엄격한 타입 체킹(Strict Mode)을 적용합니다.
- **스타일링 (Styling)**: Tailwind CSS 유틸리티 클래스와 DaisyUI의 시맨틱 클래스(`bg-base-100`, `text-primary` 등)를 우선적으로 사용합니다. 하드코딩된 `dark:` 속성을 피하고 `data-theme` 기반의 테마 시스템을 사용합니다.
- **컴포넌트 분리**: 라우팅 로직(Astro)과 인터랙티브 UI(React)를 분리하여 구현하며, 상태 관리나 클라이언트 사이드 로직(예: 모바일 메뉴, 테마 토글)이 필요한 경우 React를 적극 활용합니다.
- **모듈 시스템**: Node.js 환경에서 ESM(`"type": "module"`)을 기본으로 사용합니다.
- **마크다운 설정**: MDX 코드 블록은 Shiki를 통해 구문 강조되며, 긴 코드는 자동 줄바꿈(`wrap: true`) 되도록 설정되어 있습니다.
