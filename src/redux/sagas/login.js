import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions, googleLoginActions } from '../actions/actions';
import history from '../../router/history'
import api from '../../api'

function fetchLogin(user, password) {
  return api.auth.login({
    "user": user,
    "password": password
  })
}

function* login({ payload: { email, password } }) {
  try {
    const response = yield call(fetchLogin, email, password);
    yield put(loginActions.succeed(response.data));
    history.push('/');
  } catch (e) {
    yield put(loginActions.failed());
  }
}

function* googleLogin({ payload: { profileObj } }) {
  try {
    yield put(googleLoginActions.succeed(profileObj))
  } catch (e) {
    yield put(googleLoginActions.failed())
  }
}

export function* googleLoginWatcher() {
  yield takeLatest(googleLoginActions.processing, googleLogin)
}

export function* loginSagaWatcher() {
  yield takeLatest(loginActions.processing, login)
}

