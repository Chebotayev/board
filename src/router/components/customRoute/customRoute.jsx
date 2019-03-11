import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//selectors
import { isAuthenticated } from '../../../redux/selectors/userAuthSelector'


const CustomRoute = ({ path, component: Component, isAuth }) => (
  isAuth ?
    <Route
      path={path}
      component={Component}
    /> : <Redirect to="/" />
);

const mapStateToProps = state => ({
  isAuth: isAuthenticated(state)
});

export default connect(mapStateToProps)(CustomRoute);
