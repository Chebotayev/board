import { all, call } from 'redux-saga/effects';
import { registrationSagaWatcher } from './registration';
import { loginSagaWatcher } from './login';
import { logoutSagaWatcher } from './logout'
import { addBoardWatcher } from './addBoard'
import { getBoardsSagaWatcher } from './getBoards';
import { addListWatcher } from './addList';
import { getListsSagaWatcher } from './getLists';
import { getCardsSagaWatcher } from './getCards'

export default function* rootSaga() {
  yield all([
    call(loginSagaWatcher),
    call(registrationSagaWatcher),
    call(addBoardWatcher),
    call(logoutSagaWatcher),
    call(getBoardsSagaWatcher),
    call(addListWatcher),
    call(getListsSagaWatcher),
    call(getCardsSagaWatcher)
  ])
}