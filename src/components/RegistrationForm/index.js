import React from 'react';
import { connect } from 'react-redux';
import { registrationActions } from '../../redux/actions/actions';
import { Form, Field } from 'react-final-form'



const RegistrationForm = ({ registrationProcessing }) => {

  const onSubmit = values => {
    registrationProcessing({
      email: values ? values.email : '',
      password: values ? values.password : ''
    });
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        email: '',
        password: ''
      }}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='text' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name='password' component='input' type='password' />
          </div>
          <div>
            <label htmlFor="passRepeat">Repeat password</label>
            <Field name='passRepeat' component='input' type='password' />
          </div>
          <button type='submit' label='submit' disabled={pristine || invalid}>Submit</button>
        </form>
      )}

    />
  )
}

const mapDispatchToProps = {
  registrationProcessing: registrationActions.processing
}

export default connect(null, mapDispatchToProps)(RegistrationForm)

