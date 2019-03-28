//@flow
import React from 'react';

//components 
import Board from './Board';

type Props = {
  boards: Array<object>
}

const BoardsList = ({ boards }: Props) => {
  return (
    <>
      {boards.map(({ name, id }) => {
        return <Board key={id} id={id} name={name} />
      })}
    </>
  )
}

export default BoardsList;