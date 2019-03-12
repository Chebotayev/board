import React from 'react';

//components 
import Board from './Board';

const BoardsList = ({ boards }) => {
  return (
    <>
      {boards.map(({ name, id }) => {
        return <Board key={id} id={id} name={name} />
      })}
    </>
  )
}

export default BoardsList;