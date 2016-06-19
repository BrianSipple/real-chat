import Ember from 'ember';

const { Route } = Ember;


export default Route.extend({

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
