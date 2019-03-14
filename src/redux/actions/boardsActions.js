import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getBoards,
  addBoard,
  clearBoards,
} = createActions({
  GET_BOARDS: subActions,
  ADD_BOARD: subActions,
  CLEAR_BOARDS: {
    CLEAR: undefined
  }
})