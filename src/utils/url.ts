/**
 * Prepend Astro's BASE_URL to any internal path.
 * Handles both dev (base = '/') and production (base = '/kamirim-dev/').
 *
 * Usage: u('/projects') → '/kamirim-dev/projects'
 */
const _base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash

export function u(path: string): string {
  // External URLs — return as-is
  if (!path || path.startsWith('http') || path.startsWith('//') || path.startsWith('mailto:')) {
    return path;
  }
  return `${_base}${path}`;
}

export const base = _base;
