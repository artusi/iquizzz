import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';
import { messages } from '../app.constants';

test('renders Title react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(messages.title);
  expect(title).toBeInTheDocument();
});
