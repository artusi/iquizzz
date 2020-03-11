import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Intro from '../intro';
import { messages } from '../intro.constants';

test('[Intro] view - renders properly', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Intro />
    </Router>
  );
  const introduction = getByText(messages.introduction);
  const linkLabel = getByText(messages.linkLabel);

  expect(introduction).toBeInTheDocument();
  expect(linkLabel).toBeInTheDocument();
});
