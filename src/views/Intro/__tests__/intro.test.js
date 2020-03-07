import React from 'react';
import { render } from '@testing-library/react';
import Intro from '../intro';
import { messages } from '../intro.constants';

test('[Intro] view - renders properly', () => {
  const { getByText } = render(<Intro />);
  const title = getByText(messages.title);
  const buttonLabel = getByText(messages.buttonLabel);

  expect(title).toBeInTheDocument();
  expect(buttonLabel).toBeInTheDocument();
});
