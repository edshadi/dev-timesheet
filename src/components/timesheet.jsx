import React, { PropTypes } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import UserActions from '../actions/user-actions';
import UserStore from '../stores/user-store';

export default class Timesheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.handleChange = this.handleChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    UserStore.listen(this.handleChange);
    UserActions.allUsers();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.handleChange);
  }

  handleChange() {
    this.setState(UserStore.getState());
  }

  userSelectOptions() {
    return this.state.users.map(({ id, username }) => (
      { value: id, label: username }
    ));
  }

  selectUser(selectedUserId) {
    this.setState({ selectedUserId });
  }

  submit(status) {
    console.log(Object.assign({ status }, this.state));
  }

  render() {
    return (
      <div>
        <Select
          name="form-field-name"
          value={this.state.selectedUserId}
          options={this.userSelectOptions()}
          onChange={this.selectUser}
        />
        <SingleDatePicker
          id="date_input"
          date={this.state.date}
          numberOfMonths={1}
          focused={this.state.focused}
          onDateChange={(date) => { this.setState({ date }); }}
          onFocusChange={({ focused }) => { this.setState({ focused }); }}
        />

        <input type="time" onChange={({ target }) => { this.setState({ time: target.value }); }} />
        <button onClick={() => this.submit('approve')}>Approve</button>
        <button onClick={() => this.submit('reject')}>Reject</button>
      </div>
    );
  }
}

Timesheet.propTypes = {
};
