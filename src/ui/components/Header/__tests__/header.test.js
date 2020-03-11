import React from 'react';
import { render } from '@testing-library/react';
import Header from '../header';

test('[Header] - renders properly', () => {
  const { getByAltText } = render(<Header />);
  const logoImg = getByAltText('iClinic');

  expect(logoImg).toBeInTheDocument();
});
