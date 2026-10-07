// Keyword vocabulary for the publications filter.
// A paper gets a keyword when its title or venue matches one of the patterns,
// plus any `keywords` listed in its frontmatter (or `keywords={...}` in citations.bib).
// To support a new topic, add one line here.
export const KEYWORDS: Record<string, RegExp> = {
  'Sonar': /sonar|sonobuoy|underwater|snapping shrimp|acoustic/i,
  'Deep Learning': /deep learning|neural|cnn|lstm|transformer|autoencoder|reinforcement|q-network|tacotron|transfer learning|dbn|machine learning/i,
  'Fault Detection': /fault|bearing|defect|prognostic|predictive maintenance|smart manufacturing/i,
  'Noise Reduction': /noise|musical noise|spectral subtraction/i,
  'Fractional Fourier Transform': /fractional fourier/i,
  'Speech / Audio': /speech|audio|microphone|glottal|phonocardiogram|murmur|voice/i,
  'Watermarking / Content Protection': /watermark|copyright|content protection|ipmp/i,
  'Target Classification': /classification|recognition|identification|detection|tracking/i,
  'Streaming / Broadcasting': /streaming|broadcast|television/i,
  'Biomedical': /electrocardiogram|ventricular|phonocardiogram|heart/i,
  '한글 논문': /[가-힣]/,
};

export function extractKeywords(title: string, venue: string, explicit: string[] = []): string[] {
  const text = `${title} ${venue}`;
  const found = Object.entries(KEYWORDS)
    .filter(([, re]) => re.test(text))
    .map(([k]) => k);
  return [...new Set([...explicit, ...found])];
}
