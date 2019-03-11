import { put, takeLatest, call } from 'redux-saga/effects';
import { getBoardsActions } from '../actions';
import api from '../../api'

function fetchGettingBoard() {
  return api.boards.getBoards()
}

function* getBoards() {
  try {
    const response = yield call(fetchGettingBoard);
    yield put(getBoardsActions.succeed(response.data));
  } catch (e) {
    yield put(getBoardsActions.failed());
  }
}

export function* getBoardsSagaWatcher(){
  yield takeLatest(getBoardsActions.processing, getBoards)
}