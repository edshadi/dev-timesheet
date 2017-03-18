import React, { PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

export default class Timesheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <SingleDatePicker
        id="date_input"
        date={this.state.date}
        numberOfMonths={1}
        focused={this.state.focused}
        onDateChange={(date) => { this.setState({ date }); }}
        onFocusChange={({ focused }) => { this.setState({ focused }); }}
      />
    );
  }
}

Timesheet.propTypes = {
};
