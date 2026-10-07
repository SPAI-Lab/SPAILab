# SP&AI Lab Website

Astro 5 + SCSS 기반 연구실 홈페이지입니다. [Scholar-Lite](https://github.com/fjd2004711/scholar-lite) (MIT) 템플릿을 바탕으로 만들었습니다.

## 시작하기

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # BibTeX 변환 → 빌드 → 검색 인덱스(dist/)
```

Node 22.12 이상이 필요합니다.

## 내용 추가하는 법 (코드 수정 없음)

모든 내용은 `src/content/` 아래 마크다운 파일 하나가 항목 하나입니다. 파일을 추가하면 목록과 상세 페이지가 자동으로 생깁니다.

| 하고 싶은 일 | 방법 |
|---|---|
| 학생/교수 추가 | `npm run new -- member "홍길동"` 후 생성된 `src/content/team/*.md` 편집 |
| 뉴스 추가 | `npm run new -- news "제목"` |
| 활동 추가 | `npm run new -- activity "제목"` (사진은 `src/assets/`에 넣고 `cover:`에 경로) |
| 특허 / 소프트웨어 / 수상 | `npm run new -- patent\|software\|honor "제목"` |
| 논문 / 도서 추가 | `citations.bib`에 BibTeX 항목을 붙여 넣기 (빌드 시 `src/content/publications`, `books`가 **자동 생성**됨) |
| 졸업생 처리 | 해당 멤버 파일의 `role:`을 `Alumni`로 변경 |
| 사이트 이름, 메뉴, 메인 문구 | `src/config.ts` |
| 번역 문구 | `src/i18n/ui.ts` |

`publications/`, `books/` 안의 파일은 `citations.bib`에서 다시 만들어지므로 직접 고치지 말고 bib 파일을 고치세요.

## 스타일

Tailwind 없이 SCSS를 씁니다.

```
src/styles/_tokens.scss   색상, 중단점 (색은 CSS 변수 --c-blue-600 등으로도 노출)
src/styles/_mixins.scss   up(md), container, surface, pill 등 공통 mixin
src/styles/global.scss    reset, 기본 타이포
src/components/ui/        Container, PageHeader, Badge, Card, EmptyState 등 공용 컴포넌트
```

컴포넌트/페이지의 스타일은 각 `.astro` 파일의 `<style lang="scss">`에 있습니다(자동으로 해당 컴포넌트에만 적용).

## 라이선스와 출처

MIT 라이선스입니다. 원본 템플릿의 저작권 고지(`LICENSE`)는 반드시 유지해야 합니다.
이미지, 아바타, 책 표지는 템플릿의 샘플이므로 실제 사진·표지로 교체하세요.
