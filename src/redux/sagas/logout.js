import { put, takeLatest } from 'redux-saga/effects';
import { googleLogoutActions } from '../actions/actions';

function* googleLogout() {
  try {
    yield put(googleLogoutActions.succeed())
  } catch (e) {
    yield put(googleLogoutActions.failed())
  }
}

export function* googleLogoutWatcher(){
  yield takeLatest(googleLogoutActions.processing, googleLogout)
}