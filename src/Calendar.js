import React, { Component } from 'react';
import Day from './Day';
import './Calendar.css';
import surpriseForDay from './surprises';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [...Array(26).keys()]
    };
  }

  handleClick(i) {
    const currentDay = new Date().getDate();
    if (i <= currentDay) {
      const days = this.state.days.slice();
      days[i] = surpriseForDay(i);
      this.setState({days: days})
    }
  }

  renderDay(i) {
    return (
      <Day
        value={this.state.days[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="month">{"Click on the square matching today's date each day in December for a little holiday surprise!"}</div>
        <div className="calendar-row">
          {this.renderDay(1)}
          {this.renderDay(2)}
          {this.renderDay(3)}
          {this.renderDay(4)}
          {this.renderDay(5)}
        </div>
        <div className="calendar-row">
          {this.renderDay(6)}
          {this.renderDay(7)}
          {this.renderDay(8)}
          {this.renderDay(9)}
          {this.renderDay(10)}
        </div>
        <div className="calendar-row">
          {this.renderDay(11)}
          {this.renderDay(12)}
          {this.renderDay(13)}
          {this.renderDay(14)}
          {this.renderDay(15)}
        </div>
        <div className="calendar-row">
          {this.renderDay(16)}
          {this.renderDay(17)}
          {this.renderDay(18)}
          {this.renderDay(19)}
          {this.renderDay(20)}
        </div>
        <div className="calendar-row">
          {this.renderDay(21)}
          {this.renderDay(22)}
          {this.renderDay(23)}
          {this.renderDay(24)}
          {this.renderDay(25)}
        </div>
      </div>
    );
  }
}

export default Calendar;
