import React from 'react';
import './Day.css';

const Day = (props) => (
  <button className="day" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Day;
