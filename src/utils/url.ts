export const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/**
 * Prepends the base URL to relative/internal paths for GitHub Pages subpath compatibility.
 */
export function u(path: string): string {
  if (!path) return base ? `${base}/` : '/';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#') ||
    path.startsWith('javascript:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
