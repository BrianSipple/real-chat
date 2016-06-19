import Ember from 'ember';

const { Route, inject: { service } } = Ember;


export default Route.extend({
  store: service(),

  model() {
    return this.get('store').createRecord('user');
  },


  actions: {
    async registerUser(user) {
      console.log('Register user');
      return user.save();
    }
  }
});
