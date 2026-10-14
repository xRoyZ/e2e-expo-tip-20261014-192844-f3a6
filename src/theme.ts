import { Platform } from 'react-native';

/**
 * Design tokens from DESIGN.md. Every screen styles from here — never from an
 * improvised hex value or spacing number.
 */

export const colors = {
  bg: '#F6F7F9',
  surface: '#FFFFFF',
  fg: '#16181D',
  muted: '#6B7280',
  border: '#E4E7EB',
  accent: '#0E9F6E',
  accentPressed: '#0B7D56',
  accentSoft: '#E6F5EF',
  danger: '#D64545',
  dangerSoft: '#FDECEC',
  focusRing: '#9BE3C6',
} as const;

/**
 * DESIGN.md names a system font stack. React Native cannot consume a CSS stack
 * on iOS/Android, so the design intent maps to each platform's system face and
 * to the full stack on the web build.
 */
export const fontFamily = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  default:
    "System, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
});

export const typography = {
  fontFamily,
  headingWeight: '700',
  bodyWeight: '400',
  labelWeight: '600',
  sizeTitle: 28,
  sizeLabel: 15,
  sizeInput: 20,
  sizeResult: 17,
  sizeResultEmphasis: 22,
  sizeError: 14,
  lineHeight: 1.4,
} as const;

/** Spacing scale — the only rhythm source. Indices match DESIGN.md `--space-N`. */
export const spacing = {
  space0: 4,
  space1: 8,
  space2: 12,
  space3: 16,
  space4: 24,
  space5: 32,
  space6: 48,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 20,
  pill: 999,
} as const;
