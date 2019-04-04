import React from 'react';
import { Form, Field } from 'react-final-form';
import { addBoardActions, addListActions } from '../../redux/actions';
import { connect } from 'react-redux';

import { TextField } from 'final-form-material-ui';
import { required } from '../../validation'
import { Button } from '@material-ui/core';


const CreateInstanceForm = ({ handleSubmit, name, id }) => {
  const onSubmit = values => {
    const instanceSubmit = {
      board: () => handleSubmit({
        name: values['form-name'],
      }),
      list: () => handleSubmit({
        name: values['form-name'],
        id
      }),
      card: () => handleSubmit({
        name: values['form-name'],
        description: values['form-description'],
        id
      })
    }

    instanceSubmit[name]();
  };

  return (<div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form: { reset } }) => (
        <form
          onSubmit={async (event) => {
            await handleSubmit(event);
            reset();
          }}
          className='instance-form'
        >
          <div>
            <Field
              name='form-name'
              label={`Type ${name} name`}
              component={TextField}
              validate={required}
              type='text'
            />
          </div>
          {name === 'card' && <div>
            <Field
              name='form-description'
              label={`Type ${name} name`}
              component={TextField}
              type='text'
            />
          </div>}
          <Button color='primary' type='submit'>Add</Button>
        </form>
      )} />

  </div>)
}

const mapDispatchToProps = {
  addBoard: addBoardActions.processing,
  addList: addListActions.processing
}

export default connect(null, mapDispatchToProps)(CreateInstanceForm);