// Prefix a site-absolute path ("/team") with Astro's `base` so links keep working
// when the site is served from a sub-path (e.g. GitHub Pages project sites).
export function url(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
