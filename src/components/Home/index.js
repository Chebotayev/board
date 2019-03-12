import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';

//components
import Boards from '../Boards';
import LogoutButton from '../LogoutButton';

const Home = ({ isAuthenticated }) => (<div>
  {
    isAuthenticated ?
      <LogoutButton /> 
      :
      <div className='auth-panel'>
        <Link className='auth-panel--link' to='/signup'>Sign up</Link>
        <Link className='auth-panel--link' to='/signin'>Sign in</Link>
      </div>
  }

  <Boards isAuth={isAuthenticated} />
</div>)


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})


export default connect(mapStateToProps)(Home);