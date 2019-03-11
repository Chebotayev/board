import axios from 'axios';

const token = localStorage.getItem('token')

const localInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'X-Auth-Token': token },
});

const api = {
  auth: {
    login: data => localInstance.post('/api/signin', data),
    registration: data => localInstance.post('/api/signup', data),
  },
};

export default api;