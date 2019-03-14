import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBoardsActions, addBoardActions, clearBoardsActions } from '../../redux/actions'

//selector
import { getAllBoards, getFetchingBoards } from '../../redux/selectors/boardsSelector';


//components 
import CreateInstanceForm from '../../components/CreateInstanceForm';
import BoardsList from '../../components/BoardsList';
import Loader from '../../components/Loader'

const BoardsContainer = ({ boards, getBoards, addBoard, fetching, clearBoards }) => {

  useEffect(() => {
    getBoards();
    return () => {
      clearBoards()
    }
  }, [])

  return (
    <>
      <CreateInstanceForm handleSubmit={addBoard} name='board' />
      {fetching ? <Loader /> : <BoardsList boards={boards} />}
    </>
  )
}

const mapStateToProps = state => ({
  boards: getAllBoards(state),
  fetching: getFetchingBoards(state)
});

const mapDispatchToProps = {
  getBoards: getBoardsActions.processing,
  addBoard: addBoardActions.processing,
  clearBoards: clearBoardsActions.clear
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsContainer)