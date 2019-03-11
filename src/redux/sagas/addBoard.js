import { put, takeLatest } from 'redux-saga/effects';
import { addBoardActions } from '../actions';

function* addBoard({ payload }) {
  try {
    yield put(addBoardActions.succeed({...payload}))
  } catch (e) {
    yield put(addBoardActions.failed())
  }
}

export function* addBoardWatcher() {
  yield takeLatest(addBoardActions.processing, addBoard)
}