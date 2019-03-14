import React from 'react';
import { connect } from 'react-redux';
import { registrationActions } from '../../redux/actions';
import { Form, Field } from 'react-final-form'

//selector
import { isFetching } from '../../redux/selectors/userAuthSelector';

//components
import Loader from '../../components/Loader';


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
        <form onSubmit={handleSubmit} className='auth-form'>
          <div className='auth-form--field'>
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='text' />
          </div>
          <div className='auth-form--field'>
            <label htmlFor="password">Password</label>
            <Field name='password' component='input' type='password' />
          </div>
          <div className='auth-form--field'>
            <label htmlFor="passRepeat">Repeat password</label>
            <Field name='passRepeat' component='input' type='password' />
          </div>
          <button type='submit' label='submit' disabled={pristine || invalid}>Submit</button>
        </form>
      )}
    />
    {fetching && <Loader/>}
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

