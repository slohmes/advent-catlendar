import React from 'react';
import './App.css';
import Calendar from './Calendar';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Advent Cat-lendar</h1>
    </header>
    <div className="calendar">
      <Calendar/>
    </div>
    <p>Happy Holidays from <a href='https://github.com/slohmes'>@slohmes</a> | <a href='https://github.com/slohmes/advent-catlendar'>source code</a></p>
  </div>
);

export default App;
