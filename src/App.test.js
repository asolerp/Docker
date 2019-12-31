import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hi there message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi there!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hi there message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi there!/i);
  expect(linkElement).toBeInTheDocument();
});
