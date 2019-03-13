import { put, takeLatest, call } from 'redux-saga/effects';
import { addListActions } from '../actions';
import api from '../../api';

function fetchAddList(name, id) {
  const boardID = parseInt(id)
  return api.lists.addList({
    name,
    boardID
  })
}

function* addList({ payload: { name, id } }) {
  try {
    console.log(name)
    const response = yield call(fetchAddList, name, id)
    yield put(addListActions.succeed(response.data))
  } catch (e) {
    yield put(addListActions.failed())
  }
}

export function* addListWatcher() {
  yield takeLatest(addListActions.processing, addList)
}