import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

//HOC
import CustomRoute from '../customRoute';

//components
import RegistrationForm from '../../../containers/RegistrationForm';
import LoginForm from '../../../containers/LoginForm';
import Home from '../../../components/Home';
import ListsContainer from '../../../containers/ListsContainer'
import NotFound from '../../../components/NotFound';
import BoardContainer from '../../../containers/BoardContainer';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/signin' component={LoginForm} />
    <Route path='/signup' component={RegistrationForm} />
    <CustomRoute exact path='/boards' component={BoardContainer} />
    <CustomRoute path='/boards/:id' component={ListsContainer} />
    <CustomRoute path='/list/:id' component={NotFound} />
    <Route path='*' component={NotFound} />
  </Switch>
)



export default withRouter(Routes);