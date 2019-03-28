import React from 'react';
import { connect } from 'react-redux';

import { addCardActions, getCardsActions, clearCardsActions } from '../../redux/actions';

//components
import CreateInstanceForm from '../../components/CreateInstanceForm';
import CardsList from '../../components/CardsList'

const CardContainer = ({ addCard, getCards, clearCard }) => {



  return (<div>
    <CreateInstanceForm name='card' />
    <CardsList />
  </div>)
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  addCard: addCardActions.processing,
  getCards: getCardsActions.processing,
  clearCard: clearCardsActions.clear
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)