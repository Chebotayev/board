import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getLists,
  addList,
  clearLists
} = createActions({
  GET_LISTS: subActions,
  ADD_LIST: subActions,
  CLEAR_LISTS: {
    CLEAR: undefined
  }
})