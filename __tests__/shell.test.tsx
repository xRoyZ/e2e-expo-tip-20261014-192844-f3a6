import { render, screen, fireEvent } from '@testing-library/react-native';

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default
);

import App from '../App';
import { calculateTip } from '../src/tip';
import { formatEuro } from '../src/format';

/**
 * Structure-only tests for the scaffold shell. They assert what the scaffold
 * itself delivers: the screen is wired, the amount field really holds what the
 * user types, and the shared contract modules expose their signatures. The
 * stub's own placeholder output is deliberately never asserted — the feature
 * tickets replace the bodies.
 */
describe('app shell', () => {
  it('renders the calculator screen', async () => {
    await render(<App />);
    expect(screen.getByTestId('screen-calculator')).toBeTruthy();
  });

  it('shows what the user types into the amount field', async () => {
    await render(<App />);
    const input = screen.getByTestId('input-amount');
    await fireEvent.changeText(input, '12,50');
    expect(input.props.value).toBe('12,50');
  });

  it('exposes the shared tip and format contract signatures', () => {
    expect(typeof calculateTip).toBe('function');
    expect(typeof formatEuro).toBe('function');
  });
});
