import alt from '../alt';
import {
  getUsers,
  getMonthlyTime,
  updateStatus,
} from '../api/aurity';

class UserActions {
  constructor() {
    this.generateActions(
      'setUsers',
      'setMonthlyData',
      'setSelectedUser',
      'setErrors',
      'updateWeekStatus',
      'loading',
    );
  }

  allUsers() {
    this.loading();
    return getUsers()
      .then(({ data }) => this.setUsers(data))
      .catch(error => this.setErrors(error));
  }

  getMonthlyData(selectedDate, userId) {
    this.loading();

    const month = selectedDate.month() + 1;
    const year = selectedDate.year();

    return getMonthlyTime(month, year, userId)
      .then(({ data }) => this.setMonthlyData({ monthlyData: data.data, selectedDate }))
      .catch(error => this.setErrors(error));
  }

  updateStatus(weekId, status, approverId) {
    this.loading();
    return updateStatus(weekId, status, approverId)
      .then(({ data }) => this.updateWeekStatus(data));
  }
}

export default alt.createActions(UserActions);
