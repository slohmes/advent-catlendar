import React from 'react';
import './App.css';
import Calendar from './Calendar';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Advent Cat-lendar 2017</h1>
    </header>
    <div className="calendar">
      <Calendar/>
    </div>
  </div>
);

export default App;
