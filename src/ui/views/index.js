import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/header';
import Intro from './Intro/intro';
import Quiz from './Quiz/quiz';

export default function Views() {
  return (
    <>
      <Header />
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
    </>
  );
}
