import Ember from 'ember';
import UserValidations from 'real-chat/validations/user';

const {
  Route,
  Object: EmberObject,
  getOwner,
  inject: { service },
  get
} = Ember;

const User = EmberObject.extend(UserValidations, {
  email: null,
  password: null
});


export default Route.extend({
  SessionService: service('session'),
  flashMessages: service(),

  model () {
    return User.create(getOwner(this).ownerInjection());  // inject owner to accomadate container access needs of validations: https://github.com/offirgolan/ember-cp-validations#basic-usage---objects
  },

  actions: {
    async loginUser (userModel) {
      // const user = this.get('currentModel');
      const credentials = {
        identification: userModel.get('email'),
        password: userModel.get('password')
      };

      try {
        const currentUser = await this
          .get('SessionService')
          .authenticate('authenticator:oauth2', credentials);  // TODO: Properly format credentials object?

        this.get('flashMessages').success('Successfully logged in');
        this.get('SessionService').set('currentUser', currentUser);

      } catch (response) {
        const { errors } = response;

        // Check if any errors have a 401 (Unauthorized) code
        if (errors.some(e => get(e, 'code') === 401)) {
          this
            .get('flashMessages')
            .danger('There was a problem with your username or password. Please try again.');

        } else {
          this
            .get('flashMessages')
            .danger('A server error has occurred. Please try again.');
          // throw new Error(e);
        }
      }
    }
  }
});
