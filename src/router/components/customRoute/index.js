import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//selectors
import { isAuthenticated } from '../../../redux/selectors/userAuthSelector'
import LogoutButton from '../../../components/LogoutButton';


const CustomRoute = ({ path, component: Component, isAuth }) => (
  isAuth ?
    <>
      <LogoutButton />
      <Route
        path={path}
        component={Component}
      />
    </>
    : <Redirect to="/" />
);

const mapStateToProps = state => ({
  isAuth: isAuthenticated(state)
});

export default connect(mapStateToProps)(CustomRoute);
