import { call, put, takeLatest } from 'redux-saga/effects';
import { registrationActions } from '../actions/actions';
import history from '../../router/history';
import api from '../../api';

function fetchRegistration(email, password) {
  return api.auth.registration({
    email,
    password,
  });
}

function* registration({ payload: { email, password } }) {
  try {
    const response = yield call(fetchRegistration, email, password);
    yield put(registrationActions.succeed(response.data));
    history.push('/');
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    yield put(registrationActions.failed());
  }
}

export function* registrationSagaWatcher() {
  yield takeLatest(registrationActions.processing, registration);
}
