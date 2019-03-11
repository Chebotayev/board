import { put, takeLatest } from 'redux-saga/effects';
import { logoutActions } from '../actions/actions';

function* logout() {
  try {
    yield put(logoutActions.succeed());
    localStorage.setItem('token', '')
  } catch (e) {
    yield put(logoutActions.failed())
  }
}

export function* logoutSagaWatcher(){
  yield takeLatest(logoutActions.processing, logout)
}