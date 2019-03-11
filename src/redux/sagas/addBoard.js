import { put, takeLatest } from 'redux-saga/effects';
import { addBoard } from '../actions/actions';

function* addNewBoard({ payload }) {
  try {
    console.log(payload)
    yield put(addBoard.succeed({...payload}))
  } catch (e) {
    yield put(addBoard.failed())
  }
}

export function* addBoardWatcher() {
  yield takeLatest(addBoard.processing, addNewBoard)
}