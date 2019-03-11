import { combineReducers } from 'redux';
import userAuth from './userAuth';
import boards from './boards'

export default combineReducers({
  userAuth,
  boards
})