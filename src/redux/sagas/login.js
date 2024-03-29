import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions } from '../actions';
import history from '../../router/history'
import api from '../../api'

function fetchLogin(email, password) {
  return api.auth.login({
    email,
    password
  })
}

function* login({ payload: { email, password } }) {
  try {
    const response = yield call(fetchLogin, email, password);
    yield put(loginActions.succeed(response.data));
    localStorage.setItem('token', response.data.token);
    history.push('/boards');
  } catch (e) {
    yield put(loginActions.failed());
  }
}

export function* loginSagaWatcher() {
  yield takeLatest(loginActions.processing, login)
}

