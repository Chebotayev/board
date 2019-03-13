import { put, takeLatest, call } from 'redux-saga/effects';
import { getListsActions } from '../actions';
import api from '../../api'

function fetchLists(id) {
  return api.lists.getLists(id)
}

function* getLists({ payload }) {
  try {
    console.log(payload)
    const response = yield call(fetchLists, payload);
    yield put(getListsActions.succeed(response.data));
  } catch (e) {
    yield put(getListsActions.failed());
  }
}

export function* getListsSagaWatcher() {
  yield takeLatest(getListsActions.processing, getLists)
}