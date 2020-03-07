import React from 'react';
import { render } from '@testing-library/react';
import Quiz from '../quiz';
import { messages } from '../quiz.constants';

test('[Quiz] view - renders properly', () => {
  const { getByText } = render(<Quiz />);
  const warning = getByText(messages.warning);

  expect(warning).toBeInTheDocument();
});
