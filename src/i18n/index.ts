import en from './en.json';
import th from './th.json';

export type Lang = 'en' | 'th';
export type TranslationKey = string;

const translations: Record<Lang, typeof en> = { en, th };

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  if (typeof value === 'string') return value;
  // Fallback to English
  let fallback: any = translations['en'];
  for (const k of keys) {
    fallback = fallback?.[k];
  }
  return typeof fallback === 'string' ? fallback : key;
}

export function getLang(langFromCookie?: string | null): Lang {
  if (langFromCookie === 'th') return 'th';
  return 'en';
}

export function localized(
  obj: { en: string; th: string } | undefined,
  lang: Lang
): string {
  if (!obj) return '';
  return obj[lang] || obj['en'] || '';
}

export function localizedArray(
  obj: { en: string[]; th: string[] } | undefined,
  lang: Lang
): string[] {
  if (!obj) return [];
  return obj[lang] || obj['en'] || [];
}
