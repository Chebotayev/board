import { all, call } from 'redux-saga/effects';
import { registrationSagaWatcher } from './registration';
import { loginSagaWatcher } from './login';
import { logoutSagaWatcher } from './logout'
import { addBoardWatcher } from './addBoard'
import { getBoardsSagaWatcher } from './getBoards';

export default function* rootSaga() {
  yield all([
    call(loginSagaWatcher),
    call(registrationSagaWatcher),
    call(addBoardWatcher),
    call(logoutSagaWatcher),
    call(getBoardsSagaWatcher)
  ])
}