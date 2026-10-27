import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT = path.join(ROOT, 'src', 'content', 'achievements.md');

function readField(source, key) {
  const quoted = source.match(new RegExp(`^${key}:\\s*"([^"]*)"`, 'm'));
  if (quoted) return quoted[1];
  return source.match(new RegExp(`^${key}:\\s*([^\\r\\n]+)`, 'm'))?.[1].trim() ?? '';
}

function readArray(source, key) {
  const value = source.match(new RegExp(`^${key}:\\s*\\[([^\\]]*)\\]`, 'm'))?.[1] ?? '';
  return [...value.matchAll(/"([^"]*)"/g)].map((match) => match[1]);
}

function readCollection(name, mapper) {
  const directory = path.join(ROOT, 'src', 'content', name);
  return fs.readdirSync(directory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => mapper(fs.readFileSync(path.join(directory, file), 'utf8')));
}

const publications = readCollection('publications', (source) => ({
  title: readField(source, 'title'),
  authors: readArray(source, 'authors'),
  year: Number(readField(source, 'year')),
  venue: readField(source, 'venue'),
})).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

const patents = readCollection('patents', (source) => ({
  title: readField(source, 'title'),
  titleEn: readField(source, 'titleEn'),
  number: readField(source, 'number'),
  date: readField(source, 'date'),
  status: readField(source, 'status'),
})).sort((a, b) => b.date.localeCompare(a.date));

const lines = [
  '# 연구 성과 전체 목록',
  '',
  '> `src/content/publications`와 `src/content/patents`의 성과 페이지 표시 항목을 정리한 목록입니다.',
  '',
  `## 발표 논문 (${publications.length}건)`,
  '',
  ...publications.map((item, index) =>
    `${index + 1}. **${item.title}** — ${item.authors.join(', ')}; ${item.venue} (${item.year})`
  ),
  '',
  `## 발명 특허 (${patents.length}건)`,
  '',
  ...patents.map((item, index) => {
    const titleEn = item.titleEn ? ` / ${item.titleEn}` : '';
    return `${index + 1}. **${item.title}**${titleEn} — ${item.number || '번호 미기재'}; ${item.date}; ${item.status}`;
  }),
  '',
];

fs.writeFileSync(OUTPUT, lines.join('\n'), 'utf8');
console.log(`Generated ${path.relative(ROOT, OUTPUT)} (${publications.length} publications, ${patents.length} patents)`);
