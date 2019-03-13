import React from 'react'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../redux/selectors/userAuthSelector';
import { logoutActions } from '../../redux/actions';

//components
import Home from '../../components/Home'

const HomeContainer = ({ isAuthenticated, logout }) => <Home isAuthenticated={isAuthenticated} handleClick={logout}/>


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = {
  logout: logoutActions.processing
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);