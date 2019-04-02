import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const AuthPanel = () => (<div className='auth-panel'>
  <Button component={Link} to='/signup' variant="contained" size="large" color="primary">
    SIGN UP
  </Button>
  <Button component={Link} to='/signin' variant="contained" size="large" color="primary">
    SIGN IN
  </Button>
</div>)

export default AuthPanel;