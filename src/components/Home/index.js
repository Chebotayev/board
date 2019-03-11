import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';


//components
import BoardsList from '../BoardsList';

const Home = ({ isAuthenticated }) => (<div>
  <Link to='/signup'>Sign up</Link>
  <Link to='/signin'>Sign in</Link>
  <BoardsList isAuth={isAuthenticated} />
</div>)


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})


export default connect(mapStateToProps)(Home);