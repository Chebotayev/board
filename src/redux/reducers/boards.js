import { handleActions } from 'redux-actions';
import { addBoard } from '../actions/actions'

const initialState = [{
  name: 'test board',
  boardId: 'qwertyuiop',
  lists: []
}]


const boards = handleActions({
  [addBoard.succeed]: (state, action) => [...state, action.payload],
  [addBoard.failed]: state => state
}, initialState)

export default boards;