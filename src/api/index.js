import axios from 'axios';
import store from '../redux/store';
import { logoutActions } from '../redux/actions'

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://board-server.herokuapp.com/',
  headers: { 'Authorization': `Bearer ${token}` },
});

instance.interceptors.response.use(response => response, error => {
  const res = error.response;
  if (res.status === 401) store.dispatch(logoutActions.processing());
  return error
})

const api = {
  auth: {
    login: data => instance.post('/login', data),
    registration: data => instance.post('/users', data),
  },
  boards: {
    getBoards: () => instance.get('/boards'),
    addBoard: data => instance.post('/boards', data)
  }
};

export default api;