---
title: "Writing 페이지 사용법"
date: 2026-10-08
author: "SP&AI Lab"
summary: "이 폴더에 .md 파일을 추가하고 git에 push하면 글이 자동으로 목록에 나타납니다."
tags: ["guide"]
draft: false
---

## 글 올리는 법

1. `src/content/writing/` 아래에 `my-post.md` 파일을 만든다.
2. 맨 위에 frontmatter(`title`, `date`, `author`, 선택: `summary`, `tags`, `draft`)를 쓴다.
3. 본문을 마크다운으로 쓰고 commit → push.

파일명이 곧 URL(`/writing/my-post`)이 됩니다. `draft: true`면 목록과 빌드에서 제외됩니다.

```python
print("hello, lab")
```
