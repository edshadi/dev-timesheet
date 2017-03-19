import React, { PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Week from './week';

export default class Timesheet extends React.Component {
  userSelectOptions() {
    return this.props.users.map(({ id, username }) => (
      { value: id, label: username }
    ));
  }

  renderDatePicker() {
    let select;
    if (this.props.selectedUserId) {
      select = (
        <SingleDatePicker
          id="dev_time"
          date={this.props.selectedDate}
          numberOfMonths={1}
          focused={this.props.focused}
          onDateChange={this.props.getMonthlyData}
          onFocusChange={this.props.onDateFocus}
        />
      );
    }
    return select;
  }

  render() {
    const disableSubmit = Object.keys(this.props.weekData).length === 0;
    return (
      <div>
        <h3>1. Select a User</h3>
        <Select
          name="form-field-name"
          value={this.props.selectedUserId}
          options={this.userSelectOptions()}
          onChange={this.props.selectUser}
        />
        {this.renderDatePicker()}
        <Week {...this.props.weekData} />
        <button
          onClick={() => this.props.submit('approved')}
          disabled={disableSubmit}
        >
          Approve
        </button>
        <button
          onClick={() => this.props.submit('rejected')}
          disabled={disableSubmit}
        >
          Reject
        </button>
      </div>
    );
  }
}

Timesheet.propTypes = {
  users: PropTypes.array,
  errors: PropTypes.array,
  date: PropTypes.object,
  focused: PropTypes.bool,
  selectedUserId: PropTypes.number,
  selectedDate: PropTypes.object,
  monthlyData: PropTypes.object,
  weekData: PropTypes.object,
  getMonthlyData: PropTypes.func.isRequired,
  onDateFocus: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
