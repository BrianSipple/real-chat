import Ember from 'ember';

const { Route, inject: { service }, Logger: { log } } = Ember;


export default Route.extend({
  store: service(),
  flashMessages: service(),

  model() {
    return this.get('store').createRecord('user');
  },


  actions: {

    async registerUser(user) {
      log('Registering user: ', user);

      try {
        const newUser = await user.save();
        this.transitionTo('auth.login');
        this.get('flashMessages').success(`Welcome to RealChat, ${newUser.get('email')}`);

      } catch (resp) {
        const { errors } = resp;

        this.get('flashMessages').danger(errors.mapBy('detail').join(', '));
      }

    }
  }
});
