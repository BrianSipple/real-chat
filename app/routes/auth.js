import Ember from 'ember';
import AuthConfig from 'ember-simple-auth/configuration';

const { Route, inject: { service } } = Ember;


export default Route.extend({
  SessionService: service('session'),

  beforeModel() {
    if (this.get('SessionService').get('isAuthenticated')) {
      this.transitionTo(AuthConfig.routeIfAlreadyAuthenticated);
    }
  }
});
