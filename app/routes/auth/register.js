import Ember from 'ember';

const { Route, inject: { service }, Logger: { log } } = Ember;


export default Route.extend({
  store: service(),

  model() {
    return this.get('store').createRecord('user');
  },


  actions: {
    async registerUser(user) {
      log('Registering user: ', user);
      await user.save();

      this.transitionTo('auth.login');
    }
  }
});
