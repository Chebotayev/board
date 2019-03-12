import { combineReducers } from 'redux';
import userAuth from './userAuth';
import boards from './boards';
import lists from './lists'

export default combineReducers({
  userAuth,
  boards,
  lists
})