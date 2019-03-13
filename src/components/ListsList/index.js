import React from 'react';
import List from './List';

const ListsList = ({ lists }) => {
  return (
    <>
      {lists.map(({ id, name }) => (<List key={id} name={name} id={id} />))}
    </>
  )
};

export default ListsList;