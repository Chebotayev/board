import React from 'react';
import { Form, Field } from 'react-final-form'
import { loginActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { TextField } from 'final-form-material-ui';
import Button from '@material-ui/core/Button';

//selector
import { isFetching } from '../../redux/selectors/userAuthSelector';
import Loader from '../../components/Loader';

//validators 
import {composeValidators, required, emailValidation} from '../../validation'

const LoginForm = ({ loginProcessing, fetching }) => {
  const onSubmit = values => {
    loginProcessing({ email: values.email, password: values.password });
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, invalid, pristine }) => (<div className='form-wrapper'>
          <form className='auth-form' onSubmit={handleSubmit}>
            <div className='auth-form--field'>
              <Field
                name='email'
                component={TextField}
                validate={composeValidators(required, emailValidation)}
                label='Email'
                type='text'
                variant='outlined'
              />
            </div>
            <div className='auth-form--field'>
              <Field
                name='password'
                component={TextField}
                label='Password'
                type='password'
                variant='outlined'
                validate={required}
              />
            </div>
            <Button type='submit' variant="contained" color="primary" disabled={invalid || pristine}>Submit</Button>
          </form>
        </div>
        )} />
      {fetching && <Loader />}
    </>
  )
}

const mapDispatchToProps = {
  loginProcessing: loginActions.processing
}

const mapStateToProps = state => ({
  fetching: isFetching(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

