import alt from '../alt';
import { getUsers } from '../api/aurity';

class UserActions {
  constructor() {
    this.generateActions(
      'setUsers',
      'setErrors',
    );
  }

  allUsers() {
    return getUsers()
      .then(res => this.setUsers(res.data))
      .catch(error => this.setErrors(error));
  }
}

export default alt.createActions(UserActions);
