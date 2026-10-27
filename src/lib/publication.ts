// Groups a publication by where it appeared, the way Korean lab sites list them:
// international journal / domestic journal / conference. Derived from the venue string,
// so nothing extra has to be written in the markdown.
export type PubCategory = 'intl-journal' | 'kr-journal' | 'conference' | 'other';

const CONFERENCE = /conference|symposium|workshop|proceedings|학술대회|학술발표|강연회|심포지엄/i;
const KOREAN = /korea|한국|대한|ikeee|ieie|kiice|kics|kiise/i;

export function publicationCategory(venue: string): PubCategory {
  if (!venue || /unavailable|unknown/i.test(venue)) return 'other';
  if (CONFERENCE.test(venue)) return 'conference';
  return KOREAN.test(venue) ? 'kr-journal' : 'intl-journal';
}

export const PUB_CATEGORIES: Array<{ id: PubCategory; label: string; key: string }> = [
  { id: 'intl-journal', label: 'International journals', key: 'pub.intlJournal' },
  { id: 'kr-journal', label: 'Domestic journals', key: 'pub.krJournal' },
  { id: 'conference', label: 'Conferences', key: 'pub.conference' },
  { id: 'other', label: 'Other', key: 'pub.other' },
];
