import React from 'react';
import { Form, Field } from 'react-final-form';
import { addBoardActions, addListActions } from '../../redux/actions';
import { connect } from 'react-redux';


const CreateInstanceForm = ({ handleSubmit, name }) => {
  const onSubmit = values => {
    handleSubmit({
      name: values['form-name'],
    })
  };

  return (<div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="form-name">Type {name} name</label>
            <Field name='form-name' component='input' type='text' />
          </div>
          <button type='submit'>Add</button>
        </form>
      )} />

  </div>)
}

const mapDispatchToProps = {
  addBoard: addBoardActions.processing,
  addList: addListActions.processing
}

export default connect(null, mapDispatchToProps)(CreateInstanceForm);