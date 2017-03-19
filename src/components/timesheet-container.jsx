import React from 'react';
import UserActions from '../actions/user-actions';
import UserStore from '../stores/user-store';
import Loader from 'react-loader';
import Timesheet from './timesheet';

export default class TimesheetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.handleChange = this.handleChange.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.getMonthlyData = this.getMonthlyData.bind(this);
    this.onDateFocus = this.onDateFocus.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    UserStore.listen(this.handleChange);
    UserActions.allUsers();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.handleChange);
  }

  onDateFocus({ focused }) {
    this.setState({ focused });
  }

  getMonthlyData(date) {
    UserActions.getMonthlyData(
      date, this.state.selectedUserId
    );
  }

  handleChange() {
    this.setState(UserStore.getState());
  }

  selectUser({ value }) {
    UserActions.setSelectedUser(value);
  }

  submit(status) {
    const { week_id, approvers } = this.state.weekData;
    UserActions.updateStatus(week_id, status, approvers[0]);
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <Timesheet
          {...this.props}
          {...this.state}
          submit={this.submit}
          selectUser={this.selectUser}
          getMonthlyData={this.getMonthlyData}
          onDateFocus={this.onDateFocus}
        />
      </Loader>
    );
  }
}
