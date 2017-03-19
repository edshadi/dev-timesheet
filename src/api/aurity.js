import axios from 'axios';
axios.defaults.baseURL = 'https://timesheet-staging-aurity.herokuapp.com/api';

export function getUsers() {
  return axios.get('/users');
}

export function getMonthlyTime(month, year, userId) {
  return axios.get(
    `training/weeks/${month}/${year}/${userId}`
  );
}

export function updateStatus(weekId, status, approverId) {
  return axios.put(
    `training/weeks/${weekId}/users/${approverId}`,
    { status }
  );
}
