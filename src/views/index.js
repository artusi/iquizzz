import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './Intro/intro';
import Quiz from './Quiz/quiz';

export default function Views() {
  return (
    <Router>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </Router>
  );
}
