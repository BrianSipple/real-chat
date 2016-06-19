import { validator, buildValidations } from 'ember-cp-validations';

const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,24}$/;

const messages = {
  passwordPattern: `{description} must include at least one number,
  one lowercase letter, and one uppercase letter`
};

export default buildValidations({

  'model.email': {
    debounce: 650,
    validators: [
      validator('presence', true),
      validator('format', { type: 'email' })
    ]
  },

  'model.username': {
    debounce: 650,
    validators: [
      validator('presence', true),
      validator('length', { max: 24 }),
      validator('unique-username')
    ]
  },

  'model.password': {
    debounce: 650,
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', { min: 4 }),
      validator('length', { max: 24 }),
      validator('format', {
        regex: PASSWORD_PATTERN,
        message: messages.passwordPattern
      })
    ]
  },

  'model.passwordConfirmation': {
    debounce: 650,
    validators: [
      validator('presence', true),
      validator('format', {
        regex: PASSWORD_PATTERN,
        message: messages.passwordPattern
      }),
      validator('confirmation', {
        // on: 'password',
        on: 'model.password',
        message: '{description} do not match',
        descriptions: 'Passwords'
      })
    ]
  }

  // 'model.userPrivateInfo': {
  //   validators: [
  //     validator('presence', true),
  //     validator('belongs-to')
  //   ]
  // }
});
