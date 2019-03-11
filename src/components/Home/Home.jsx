import React from 'react'
import { Link } from 'react-router-dom';
import { googleLoginActions, googleLogoutActions } from '../../redux/actions/actions';
import { connect } from 'react-redux'

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';


//components
import BoardsList from '../BoardsList';

const Home = ({ googleLoginProcessing, googleLogoutProcessing, isAuthenticated }) => (<div>
  <Link to='/signup'>Sign up</Link>
  <Link to='/signin'>Sign in</Link>

  {isAuthenticated ?
    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={googleLogoutProcessing}
    />
    :
    <GoogleLogin
      clientId="778768231819-v5cutbja7jjcnb7uc9i8cu9d5dsp6sms.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      onSuccess={googleLoginProcessing}
    />
  }
  <BoardsList isAuth={isAuthenticated} />
</div>)

const mapDispatchToProps = {
  googleLoginProcessing: googleLoginActions.processing,
  googleLogoutProcessing: googleLogoutActions.processing
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);