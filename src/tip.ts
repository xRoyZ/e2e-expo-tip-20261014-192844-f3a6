/**
 * Pure tip calculation contract.
 *
 * The shared sprint interface: every symbol here is real and complete. The
 * calculation ticket fills the body of `calculateTip`; until then the body is
 * inert. Do not change these names or signatures — sibling tickets build
 * against them.
 */

export type TipField = 'amount' | 'percent' | 'people';

/** Raw text exactly as the user typed it. */
export type TipInput = { amount: string; percent: string; people: string };

export type TipErrorCode =
  | 'empty'
  | 'not-numeric'
  | 'amount-not-positive'
  | 'percent-negative'
  | 'people-below-one';

export type TipResult =
  | { ok: true; tipCents: number; totalCents: number; perPersonCents: number }
  | { ok: false; errors: Partial<Record<TipField, TipErrorCode>> };

export function calculateTip(_input: TipInput): TipResult {
  return { ok: false, errors: {} };
}
