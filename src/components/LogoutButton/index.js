import React from 'react';

const LogoutButton = ({ handleClick }) => <button onClick={handleClick} type='submit' className='button'>
  Logout
</button>;

export default LogoutButton;