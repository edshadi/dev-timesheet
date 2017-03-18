import axios from 'axios';
axios.defaults.baseURL = 'https://timesheet-staging-aurity.herokuapp.com';

export function getUsers(cb) {
  return axios.get('/api/users')
}
