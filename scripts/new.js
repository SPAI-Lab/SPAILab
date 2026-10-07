// Scaffold a new content file:  npm run new -- <kind> "<title or name>"
// kinds: member | news | activity | patent | software | honor
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

const CONTENT = path.join(process.cwd(), 'src', 'content');
const today = new Date().toISOString().split('T')[0];

const kinds = {
  member: {
    dir: 'team',
    prefix: () => '',
    body: (name) => `---
name: "${name}"
role: "Master Student"   # Principal Investigator | Professor | Associate Professor | Assistant Professor | Postdoc | Research Assistant | PhD Student | Master Student | Undergraduate | Alumni
# avatar: "../../assets/photo.jpg"   # 사진 없으면 기본 이미지가 쓰입니다
bio: ""
email: ""
github: ""
googleScholar: ""
weight: 100
---
`,
  },
  news: {
    dir: 'news',
    prefix: () => `${today.slice(0, 4)}-`,
    body: (title) => `---
title: "${title}"
date: ${today}
summary: ""
---
`,
  },
  activity: {
    dir: 'activities',
    prefix: () => `${today.slice(0, 4)}-`,
    body: (title) => `---
title: "${title}"
date: ${today}
# cover: "../../assets/your-photo.jpg"
description: ""
---
`,
  },
  patent: {
    dir: 'patents',
    prefix: () => '',
    body: (title) => `---
title: "${title}"
inventors: []
number: ""
date: ${today}
status: "Filed"   # Granted | Pending | Filed
---
`,
  },
  software: {
    dir: 'softwares',
    prefix: () => '',
    body: (title) => `---
title: "${title}"
developers: []
number: ""
date: ${today}
description: ""
---
`,
  },
  honor: {
    dir: 'honors',
    prefix: () => '',
    body: (title) => `---
title: "${title}"
award: ""
date: ${today}
year: "${today.slice(0, 4)}"
type: "Other"    # Challenge Cup | Internet+ | Other
level: "Third"   # Special | First | Second | Third
---
`,
  },
};

const [kind, ...rest] = process.argv.slice(2);
const title = rest.join(' ').trim();

if (!kinds[kind] || !title) {
  console.log('Usage: npm run new -- <kind> "<title or name>"');
  console.log('kinds:', Object.keys(kinds).join(' | '));
  console.log('Papers/books are added in citations.bib (npm run import-bibtex).');
  process.exit(1);
}

const spec = kinds[kind];
const dir = path.join(CONTENT, spec.dir);
fs.mkdirSync(dir, { recursive: true });
const slug = slugify(title, { lower: true, strict: true }) || title.trim().replace(/\s+/g, '-').replace(/[^\p{L}\p{N}-]/gu, '') || `${kind}-${Date.now()}`;
const file = path.join(dir, `${spec.prefix({})}${slug}.md`);

if (fs.existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`);
  process.exit(1);
}
fs.writeFileSync(file, spec.body(title));
console.log(`Created ${path.relative(process.cwd(), file)}`);
