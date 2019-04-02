import { put, takeLatest, call } from 'redux-saga/effects';
import { getCardsActions } from '../actions';
import api from '../../api'

function fetchCards(id) {
  return api.lists.getLists(id)
}

function* getCards({ payload }) {
  try {
    const response = yield call(fetchCards, payload);
    yield put(getCardsActions.succeed(response.data));
  } catch (e) {
    yield put(getCardsActions.failed());
  }
}

export function* getCardsSagaWatcher() {
  yield takeLatest(getCardsActions.processing, getCards)
}