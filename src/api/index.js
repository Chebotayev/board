import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://board-server.herokuapp.com/',
  headers: { 'Authorization': `Bearer ${token}` },
});

const api = {
  auth: {
    login: data => instance.post('/login', data),
    registration: data => instance.post('/users', data),
  },
};

export default api;