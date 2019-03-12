import { put, takeLatest, call } from 'redux-saga/effects';
import { addBoardActions } from '../actions';
import api from '../../api';

function fetchAddBoard(name) {
  return api.boards.addBoard({
    name
  })
}

function* addBoard({ payload: { name } }) {
  try {
    const response = yield call(fetchAddBoard, name)
    yield put(addBoardActions.succeed(response.data))
  } catch (e) {
    yield put(addBoardActions.failed())
  }
}

export function* addBoardWatcher() {
  yield takeLatest(addBoardActions.processing, addBoard)
}