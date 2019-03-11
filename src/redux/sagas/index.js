import { all, call } from 'redux-saga/effects';
import registrationSagaWatcher from './registration';
import { loginSagaWatcher, googleLoginWatcher } from './login';
import { googleLogoutWatcher } from './logout';
import { addBoardWatcher } from './addBoard'

export default function* rootSaga() {
  yield all([
    call(loginSagaWatcher),
    call(registrationSagaWatcher),
    call(googleLoginWatcher),
    call(googleLogoutWatcher),
    call(addBoardWatcher)
  ])
}