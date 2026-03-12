import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Memory from './Number';

test('renders learn react link', () => {
  render(<Memory />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeDefined();
});
