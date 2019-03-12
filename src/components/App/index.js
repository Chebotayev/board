import React from 'react';
import { Router } from 'react-router-dom';

import history from '../../router/history';

import Routes from '../../router/components/routes';

import '../../assets/main.scss'
const App = () => (
  <Router history={history}>
    <Routes />
  </Router >
);

export default App;
