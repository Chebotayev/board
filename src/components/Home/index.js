import React from 'react';
import { Link } from 'react-router-dom';

//components 
import LogoutButton from '../LogoutButton';

const Home = ({ isAuthenticated, handleClick }) => (<div>
  {
    isAuthenticated ?
      <LogoutButton handleClick={handleClick} />
      :
      <div className='auth-panel'>
        <Link className='auth-panel--link' to='/signup'>Sign up</Link>
        <Link className='auth-panel--link' to='/signin'>Sign in</Link>
      </div>
  }
</div>)


export default Home;