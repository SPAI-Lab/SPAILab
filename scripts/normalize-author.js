// One place that decides how an author is spelled on the site: "Given Family" (e.g. "Jongwon Seok").
// Used by import-bibtex.js, so every publication shows the same name no matter how the .bib wrote it.

// Spelling variants of the same person -> canonical name. Add a line when a new variant shows up.
const ALIASES = {
  '김동욱': 'Dongwook Kim',
  '김태환': 'Taehwan Kim',
  '석종원': 'Jongwon Seok',
  'Jin Woo Hong': 'Jin-Woo Hong',
  'Yun-Su Kim': 'Yunsu Kim',
  'Uh Yoon': 'Yoon Uh',
  'Y. Uh': 'Yoon Uh',
};

const UNICODE_HYPHENS = /[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]/g;

export function normalizeAuthor(raw) {
  let name = String(raw ?? '')
    .normalize('NFC')
    .replace(/[{}]/g, '')
    .replace(UNICODE_HYPHENS, '-')
    .replace(/\s+/g, ' ')
    .trim();
  if (!name) return '';

  // "Family, Given" -> "Given Family"
  if (name.includes(',')) {
    const [family, ...given] = name.split(',').map(p => p.trim());
    name = `${given.join(' ')} ${family}`.trim();
  }

  // "Taehwan KIM" -> "Taehwan Kim": an ALL-CAPS word of 2+ letters is title-cased.
  name = name
    .split(' ')
    .map(word => (/^[A-Z]{2,}$/.test(word) ? word[0] + word.slice(1).toLowerCase() : word))
    .join(' ');

  return ALIASES[name] ?? name;
}
