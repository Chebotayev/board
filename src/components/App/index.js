import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import history from '../../router/history';

import Routes from '../../router/components/routes';

import '../../assets/main.scss'
export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router >
    );
  }
}

