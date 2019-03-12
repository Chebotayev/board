import React from 'react';
import { Form, Field } from 'react-final-form';
import { addBoardActions } from '../../redux/actions';
import { connect } from 'react-redux';


const BoardForm = ({ addBoard }) => {

  const onSubmit = values => {
    addBoard({
      name: values['form-name'],
    })
  };

  return (<div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="form-name">Type board name</label>
            <Field name='form-name' component='input' type='text' />
          </div>
          <button type='submit'>Add</button>
        </form>
      )} />

  </div>)
}

const mapDispatchToProps = {
  addBoard: addBoardActions.processing
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);