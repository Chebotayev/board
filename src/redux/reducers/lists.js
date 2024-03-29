import { handleActions, combineActions } from 'redux-actions';
import { addListActions, getListsActions, clearListsActions } from '../actions';


const initialState = {
  lists: [],
  fetching: false
}


const lists = handleActions({
  [combineActions(addListActions.processing, getListsActions.processing)]: state => ({ ...state, fetching: true }),
  [combineActions(addListActions.succeed, getListsActions.succeed)]: (state, { payload }) => ({ ...state, lists: payload.lists, fetching: false }),
  [combineActions(addListActions.failed, getListsActions.failed)]: state => ({...state, fetching: false}),
  [clearListsActions.clear]: () => initialState
}, initialState)

export default lists;