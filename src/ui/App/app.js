import React from 'react';
import './styles/app.scss';
import { messages } from './app.constants';

function App() {
  return (
    <div className="app">
      <h1>{messages.title}</h1>
      <p>{messages.introduction}</p>
    </div>
  );
}

export default App;
