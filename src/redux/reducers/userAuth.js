import { handleActions, combineActions } from 'redux-actions';
import { registrationActions, loginActions, googleLoginActions, logoutActions } from '../actions'

const initialState = {
  user: '',
  fetching: false,
  isAuthenticated: false
}

const userAuth = handleActions({
  [combineActions(registrationActions.processing, loginActions.processing, googleLoginActions.processing, logoutActions.processing)]:
    state => ({ ...state, fetching: true }),
  [combineActions(registrationActions.succeed, googleLoginActions.succeed, loginActions.succeed)]: (
    state,
    { payload: { email } }
  ) => ({ ...state, user: email, isAuthenticated: true, fetching: false }),
  [combineActions(registrationActions.failed, loginActions.failed, googleLoginActions.failed, logoutActions.succeed)]:
    () => ({ ...initialState }),
  [logoutActions.failed]: state => ({ ...state, fetching: false })
}, initialState)

export default userAuth;