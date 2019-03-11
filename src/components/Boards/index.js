import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBoardsActions } from '../../redux/actions'

//selector
import { getAllBoards } from '../../redux/selectors/boardsSelector';

const useFetching = getBoards => {
  useEffect(()=>{
    getBoards();
  }, [])
}

const Boards = ({ boards, getBoards }) => {
 
  useFetching(getBoards);

  return (
    <>
      {boards.map(({ name, id }) => {
        return <Link key={id} to={`/board/:${id}`}>
          <div className='board'>
            <h3>{name}</h3>
          </div>
        </Link>
      })}
    </>
  )
}

const mapStateToProps = state => ({
  boards: getAllBoards(state)
});

const mapDispatchToProps = {
  getBoards: getBoardsActions.processing
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards)