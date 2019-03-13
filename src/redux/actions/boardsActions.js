import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getBoards,
  addBoard
} = createActions({
  GET_BOARDS: subActions,
  ADD_BOARD: subActions,
})