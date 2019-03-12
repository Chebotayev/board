import { handleActions, combineActions } from 'redux-actions';
import { addBoardActions } from '../actions';
import { getBoardsActions } from '../actions'

const initialState = {
  boards: [],
  fetching: false
}


const boards = handleActions({
  [combineActions(addBoardActions.processing, getBoardsActions.processing)]: state => ({ ...state, fetching: true }),
  [combineActions(addBoardActions.succeed, getBoardsActions.succeed)]: (state, { payload }) => ({ ...state, boards: payload.boards, fetching: false }),
  [combineActions(addBoardActions.failed, getBoardsActions.failed)]: state => ({...state, fetching: false})
}, initialState)

export default boards;