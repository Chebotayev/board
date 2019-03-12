import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';
import { logoutActions } from '../../redux/actions';

//components
import LogoutButton from '../../components/LogoutButton';

const Home = ({ isAuthenticated, logout }) => (<div>
  {
    isAuthenticated ?
      <LogoutButton handleClick={logout}/> 
      :
      <div className='auth-panel'>
        <Link className='auth-panel--link' to='/signup'>Sign up</Link>
        <Link className='auth-panel--link' to='/signin'>Sign in</Link>
      </div>
  }
</div>)


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = {
  logout: logoutActions.processing
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);