import Ember from 'ember';

const { Route } = Ember;


export default Route.extend({

  actions: {
    registerUser() {
      console.log('Register user');
    }
  }
});
