const regExpEmail = /\S+@\S+\.\S+/

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => (value ? undefined : "Required");

export const emailValidation = value => (regExpEmail.test(value.toLowerCase()) ? undefined : 'Invalid email address');

export const passValidation = value => (value.length >= 5 ? undefined : 'Password should contains more than 5 symbols');


