import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  registration,
  login,
  googleLogin,
  logout,
} = createActions({
  REGISTRATION: subActions,
  LOGIN: subActions,
  GOOGLE_LOGIN: subActions,
  LOGOUT: subActions,
})