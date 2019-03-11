import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

//selector
import { getAllBoards } from '../../redux/selectors/boardsSelector';

const Boards = ({ boards }) => {
  console.log(boards);
  return (
    <>
      {boards.map(({ name, boardId }) => {
        return <Link key={boardId} to={`/board/:${boardId}`}>
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

export default connect(mapStateToProps)(Boards)