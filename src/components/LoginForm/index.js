import React from 'react';
import { Form, Field } from 'react-final-form'
import { loginActions } from '../../redux/actions';
import { connect } from 'react-redux'

const LoginForm = ({ loginProcessing }) => {
  const onSubmit = values => {
    loginProcessing({ email: values.email, password: values.password });
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name='password' component='input' type='password' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      )} />
  )
}

const mapDispatchToProps = {
  loginProcessing: loginActions.processing
}

export default connect(null, mapDispatchToProps)(LoginForm)

