import React from 'react';
import { Button } from '@material-ui/core';


const LogoutButton = ({ handleClick }) => <Button onClick={handleClick} variant="outlined" color="primary">
  Logout
</Button>;

export default LogoutButton;