import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getCards,
  addCard
} = createActions({
  GET_CARDS: subActions,
  ADD_CARD: subActions,
})