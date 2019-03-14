import axios from 'axios';
import store from '../redux/store';
import { logoutActions } from '../redux/actions';

const getToken = () => localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://board-server.herokuapp.com/',
});

instance.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
}, error => Promise.reject(error))

instance.interceptors.response.use(response => response, error => {
  const res = error.response;
  if (res.status === 401) store.dispatch(logoutActions.processing());
  return Promise.reject(error)
})

const api = {
  auth: {
    login: data => instance.post('/login', data),
    registration: data => instance.post('/users', data),
  },
  boards: {
    getBoards: () => instance.get('/boards'),
    addBoard: data => instance.post('/boards', data)
  },
  lists: {
    getLists: id => instance.get(`/lists/${id}`),
    addList: data => instance.post('/lists', data)
  }
};

export default api;