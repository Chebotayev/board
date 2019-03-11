import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomRoute from '../customRoute'

import { withRouter } from 'react-router';

//components
import RegistrationForm from '../../../components/RegistrationForm';
import LoginForm from '../../../components/LoginForm';
import Home from '../../../components/Home';
import Board from '../../../components/Board' 

const Routes = (props) => {
  console.log(props.history)
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={LoginForm} />
      <Route path='/signup' component={RegistrationForm} />
      <CustomRoute path='/board/:id' component={Board}/>
    </Switch>
  )
}



export default withRouter(Routes);