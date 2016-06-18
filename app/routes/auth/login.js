import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return {
      email: null,
      password: null
    };
  },

  actions: {
    loginUser () {
      console.log('Login');
    }
  }
});
