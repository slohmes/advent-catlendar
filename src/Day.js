import React from 'react';

const Day = (props) => (
  <button className="day" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Day;
