import React from 'react';
import { connect } from 'react-redux';
import { registrationActions } from '../../redux/actions';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
//selector
import { isFetching } from '../../redux/selectors/userAuthSelector';

//components
import Loader from '../../components/Loader';
import { Button } from '@material-ui/core';



const RegistrationForm = ({ registrationProcessing, fetching }) => {

  const onSubmit = values => {
    if (values.password === values.passRepeat) registrationProcessing({
      email: values.email,
      password: values.password
    });
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: '',
          password: '',
          passRepeat: '',
        }}
        render={({ handleSubmit, pristine, invalid }) => (
          <div className='form-wrapper'>
            <form onSubmit={handleSubmit} className='auth-form'>
              <div className='auth-form--field'>
                <Field
                  name='email'
                  component={TextField}
                  type='text'
                  label='Email'
                  variant='outlined'
                />
              </div>
              <div className='auth-form--field'>
                <Field
                  name='password'
                  component={TextField}
                  type='password'
                  label='Password'
                  variant='outlined'
                />
              </div>
              <div className='auth-form--field'>
                <Field
                  name='passRepeat'
                  component={TextField}
                  type='password'
                  label='Repeat password'
                  variant='outlined'
                />
              </div>
              <Button type='submit' label='submit' variant="contained" color="primary">Submit</Button>
            </form>
          </div>
        )}
      />
      {fetching && <Loader />}
    </>
  )
}

const mapDispatchToProps = {
  registrationProcessing: registrationActions.processing
}

const mapStateToProps = state => ({
  fetching: isFetching(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

