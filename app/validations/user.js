import { validator, buildValidations } from 'ember-cp-validations';

const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,24}$/;

const messages = {
  passwordPattern: `{description} must include at least one number,
  one lowercase letter, and one uppercase letter`
};


export default buildValidations({

  email: {
    debounce: 650,
    validators: [
      validator('presence', true),
      validator('format', { type: 'email' })
    ]
  },

  username: {
    debounce: 650,
    validators: [
      validator('presence', true),
      validator('length', { max: 24 }),
      validator('unique-username')
    ]
  },

  password: {
    debounce: 650,
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', { min: 8 }),
      validator('length', { max: 24 }),
      validator('format', {
        regex: PASSWORD_PATTERN,
        message: messages.passwordPattern
      })
    ]
  },

  passwordConfirmation: {
    debounce: 650,
    description: 'Comfirmation password',
    validators: [
      validator('presence', true),
      validator('confirmation', {
        on: 'password',
        message: '{description} does not match',
        descriptions: 'Passwords'
      })
    ]
  }

  // userPrivateInfo: {
  //   validators: [
  //     validator('presence', true),
  //     validator('belongs-to')
  //   ]
  // }
});
