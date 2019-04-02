import React from 'react';
import CardsContainer from '../../../containers/CardsContainer'

const List = ({ id, name }) => (
  <div>
    <h3>{name}</h3>
    <CardsContainer id={id}/>
  </div>
)

export default List;