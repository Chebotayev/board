import React from 'react';
import { connect } from 'react-redux';
import { getBoardsActions, addBoardActions } from '../../redux/actions'

//selector
import { getAllBoards } from '../../redux/selectors/boardsSelector';

//effects
import { didMountEffect } from '../../effects/didMountEffect';

//components 
import CreateInstanceForm from '../../components/CreateInstanceForm';
import BoardsList from '../../components/BoardsList'

const BoardsContainer = ({ boards, getBoards, addBoard }) => {

  didMountEffect(getBoards);

  return (
    <>
      <CreateInstanceForm handleSubmit={addBoard} name='board'/>
      <BoardsList boards={boards} />
    </>
  )
}

const mapStateToProps = state => ({
  boards: getAllBoards(state)
});

const mapDispatchToProps = {
  getBoards: getBoardsActions.processing,
  addBoard: addBoardActions.processing,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsContainer)