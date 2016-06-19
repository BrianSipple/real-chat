import Ember from 'ember';
import UserValidations from 'real-chat/validations/user';

const { Route, Object: EmberObject, getOwner } = Ember;

const User = EmberObject.extend(UserValidations, {
  email: null,
  password: null
});

export default Route.extend({

  model () {
    return User.create(getOwner(this).ownerInjection());  // inject owner to accomadate container access needs of validations: https://github.com/offirgolan/ember-cp-validations#basic-usage---objects
  },

  actions: {
    loginUser () {
      console.log('Login');
    }
  }
});
