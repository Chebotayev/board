import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getCards,
  addCard,
  clearCards
} = createActions({
  GET_CARDS: subActions,
  ADD_CARD: subActions,
  CLEAR_CARDS: {
    CLEAR: undefined
  }
})