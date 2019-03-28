// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number,
  name: string
}

const Board = ({ id, name }: Props) => (<Link to={`/boards/${id}`}>
  <div className='board'>
    <h3>{name}</h3>
  </div>
</Link>)

export default Board;