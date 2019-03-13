import { createActions } from 'redux-actions';
import { subActions } from './subActions'

export const {
  getLists,
  addList
} = createActions({
  GET_LISTS: subActions,
  ADD_LIST: subActions,
})