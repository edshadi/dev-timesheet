import alt from '../alt';
import UserActions from '../actions/user-actions';
import moment from 'moment';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.state = {
      users: [],
      errors: [],
      date: moment(),
      focused: false,
      selectedUserId: null,
    }
  }

  onSetUsers(users) {
    this.setState({ users });
  }

}

export default alt.createStore(UserStore, 'UserStore');
