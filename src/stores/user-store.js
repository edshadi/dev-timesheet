import alt from '../alt';
import UserActions from '../actions/user-actions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.state = {
      users: [],
      errors: [],
      date: null,
      focused: false,
      selectedUserId: null,
      selectedDate: null,
      monthlyData: {},
      weekData: {},
      loaded: false,
    };
  }

  onSetUsers(users) {
    const monthlyData = users.reduce((monthly, user) => {
      monthly[user.id] = {};
      return monthly;
    }, {});
    this.setState({ users, monthlyData, loaded: true });
  }

  onSetMonthlyData({ monthlyData, selectedDate }) {
    this.state.monthlyData[this.state.selectedUserId] = {
      [monthlyData.year]: {
        [monthlyData.month]: monthlyData,
      },
    };
    this.setState({
      monthlyData: this.state.monthlyData,
      weekData: this.extractWeekData(selectedDate),
      selectedDate,
      loaded: true,
    });
  }

  onSetSelectedUser(selectedUserId) {
    this.setState({ selectedUserId, selectedDate: null, monthlyData: {}, weekData: {} });
  }

  extractWeekData(selectedDate) {
    let weekData;
    const {
      monthlyData,
      selectedUserId,
    } = this.state;

    const month = selectedDate.month() + 1; // it returns 0-11;
    const year = selectedDate.year();
    const week = selectedDate.week();
    const yearData = monthlyData[selectedUserId][year];
    if (yearData && yearData[month]) {
      weekData = yearData[month].weeks.filter(
        ({ week_number }) => week_number === week
      );
    }
    return weekData[0];
  }

  onUpdateWeekStatus({ week_number, status }) {
    const { selectedDate, monthlyData, selectedUserId } = this.state;
    const month = selectedDate.month() + 1; // it returns 0-11;
    const year = selectedDate.year();

    const yearData = monthlyData[selectedUserId][year];
    yearData[month].weeks
      .filter((week) => week_number === week.week_number )[0]
      .status = status;
    this.setState({ monthlyData: this.state.monthlyData, loaded: true });
  }

  onLoading() {
    this.setState({ loaded: false });
  }
}

export default alt.createStore(UserStore, 'UserStore');
