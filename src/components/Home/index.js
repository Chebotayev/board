import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';

//components
import BoardsList from '../BoardsList';
import LogoutButton from '../LogoutButton';

const Home = ({ isAuthenticated }) => (<div>
  {
    isAuthenticated ?
      <LogoutButton />
      :
      <Fragment>
        <Link to='/signup'>Sign up</Link>
        <Link to='/signin'>Sign in</Link>
      </Fragment>
  }

  <BoardsList isAuth={isAuthenticated} />
</div>)


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})


export default connect(mapStateToProps)(Home);