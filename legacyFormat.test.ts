import { parseLegacy, legacyLabel } from './legacyFormat';

describe('legacyFormat', () => {
  it('parses legacy JSON data without executing it', () => {
    expect(parseLegacy('{"label":"Kaffee","cents":350}')).toEqual({
      label: 'Kaffee',
      cents: 350,
    });
  });

  it('rejects a non-JSON payload instead of running it', () => {
    expect(() => parseLegacy('(1 + 1)')).toThrow();
  });

  it('renders a legacy label as text for any value', () => {
    expect(legacyLabel(42)).toBe('42');
    expect(legacyLabel('Kaffee')).toBe('Kaffee');
    expect(legacyLabel(null)).toBe('null');
  });
});
