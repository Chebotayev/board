import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//selectors
import { isAuthenticated } from '../../../redux/selectors/userAuthSelector'
import { logoutActions } from '../../../redux/actions';

//components 
import LogoutButton from '../../../components/LogoutButton';


const CustomRoute = ({ path, component: Component, isAuth, logout }) => (
  isAuth ?
    <>
      <LogoutButton handleClick={logout}/>
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

const mapDispatchToProps = {
  logout: logoutActions.processing,
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);
