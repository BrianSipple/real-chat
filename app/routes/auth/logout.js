import Ember from 'ember';
import AuthConfig from 'ember-simple-auth/configuration';

const { Route, inject: { service }, canInvoke } = Ember;


export default Route.extend({
  SessionService: service('session'),


  beforeModel() {
    if (!this.get('SessionService').get('isAuthenticated')) {
      this.transitionTo(AuthConfig.authenticationRoute);
    }
  },

  afterModel(model, transition) {
    const target = canInvoke(transition, 'send') ? transition : this;
    target.send('invalidateSession');
  }
});
