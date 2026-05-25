# Progress Report

## Current Status

- **UI 프레임워크 마이그레이션 (Svelte → React)**: 기존 `Navbar.astro`, `Footer.astro`, `BlogCard.astro`, `Welcome.astro`를 삭제하고 React 기반 컴포넌트(`Navbar.tsx`, `Footer.tsx`, `BlogCard.tsx`)로 성공적으로 변환 완료.
- **DaisyUI 및 테마 적용**: 하드코딩된 `dark:` 유틸리티 클래스와 커스텀 CSS 변수를 걷어내고 DaisyUI 시맨틱 클래스(`bg-base-100`, `text-base-content` 등)를 적용. 로컬 스토리지를 활용하는 `<ThemeToggle />` 구현 완료. `src/styles/global.css` 최적화.
- **의존성 최신화 및 Astro 6 마이그레이션**:
  - `package.json`에서 Astro를 v6, TypeScript를 v6, Tailwind를 v4.3.0 최신 버전으로 업그레이드 완료.
  - Astro 6 Breaking Change 대응: `src/content/config.ts`를 `src/content.config.ts`로 이동하고 `glob` 로더 API로 스키마 구조 변경.
  - `src/pages/blog/[slug].astro`, `src/pages/index.astro`, `src/pages/blog/index.astro` 내에서 `post.render()`를 `render(post)`로 대체하고, `post.slug` 식별자 참조를 `post.id`로 전면 교체 완료.
  - `src/components/GithubCode.astro`의 스타일링을 HTML 인라인 클래스로 수정하고, 타입 오류(`lang`)를 `as any` 캐스팅으로 해결.
- **기타 코드 개선**: TypeScript 린트 경고(`tag` implicitly `any` 타입 문제) 해결 및 Tailwind CSS 클래스 최적화(`flex-shrink-0` -> `shrink-0`).
- **배포 파이프라인 업데이트**: `.github/workflows/deploy.yml`을 수정하여 GitHub Actions가 Node.js 26 환경에서 빌드되도록 명시.

## Known Issues

- `[DEP0205] DeprecationWarning: module.register() is deprecated` 경고가 Node 26 환경에서 `pnpm build` 또는 `dev` 시 터미널에 출력됨. 이는 업스트림 패키지 내부 로직 문제로, 실제 빌드 및 런타임 결과물에는 영향을 주지 않아 `package.json`의 스크립트 실행 명령어에서 억지로 숨기지 않고 그대로 두었음.

- **블로그 최신순 정렬 및 페이지네이션 개선**: `src/pages/index.astro` 메인 페이지의 게시글 최신순 정렬 및 노출 개수 제한(5개) 적용. `src/pages/blog/[...page].astro`를 도입하여 블로그 전체 목록 페이지 정적 페이지네이션 구현 완료.

## Next TODO (Prioritized)

1. **블로그 디자인(UI/UX) 전면 개편**: React + DaisyUI 환경이 완비되었으므로, 이를 기반으로 블로그 메인 페이지(`src/pages/index.astro`) 및 개별 포스트 페이지(`src/pages/blog/[slug].astro`)의 레이아웃과 디자인을 개선.
2. **React 컴포넌트 고도화**: 디자인 변경 사항에 맞추어 `BlogCard.tsx` 등 기존 컴포넌트의 스타일링 조정 및 애니메이션 효과 검토.
3. **Typography 플러그인 최적화**: 블로그 본문 가독성을 높이기 위해 Tailwind `@tailwindcss/typography`의 `prose` 관련 설정(DaisyUI 기본 테마와의 조화) 튜닝.
