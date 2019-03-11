import { handleActions, combineActions } from 'redux-actions';
import { registrationActions, loginActions, googleLoginActions, googleLogoutActions } from '../actions/actions'

const initialState = {
  user: {},
  fetching: false,
  isAuthenticated: false
}

const userAuth = handleActions({
  [combineActions(registrationActions.processing, loginActions.processing, googleLoginActions.processing, googleLogoutActions.processing)]:
    state => ({ ...state, fetching: true }),
  [combineActions(registrationActions.succeed, googleLoginActions.succeed, loginActions.succeed)]: (
    state,
    { payload }
  ) => (
      { ...state, user: payload, isAuthenticated: true, fetching: false }
    ),
  [combineActions(registrationActions.failed, loginActions.failed, googleLoginActions.failed)]:
    state => ({ ...state, fetching: false, isAuthenticated: false }),
  [googleLogoutActions.succeed]: state => ({ ...state, fetching: false, isAuthenticated: false }),
  [googleLogoutActions.failed]: state => ({ ...state, fetching: false })
}, initialState)

export default userAuth;