import Ember from 'ember';
import AuthConfig from 'ember-simple-auth/configuration';

const { Route, inject: { service } } = Ember;


export default Route.extend({
  SessionService: service('session'),
  NavbarService: service('navbar'),

  beforeModel({ intent: { name: destination } }) {
    if (this.get('SessionService').get('isAuthenticated') && destination !== 'auth.logout') {
      this.transitionTo(AuthConfig.routeIfAlreadyAuthenticated);
    }

    this.get('NavbarService').set('isNavbarVisible', true);
  }
});
