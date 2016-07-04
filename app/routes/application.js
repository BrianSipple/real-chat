import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject: { service } } = Ember;


export default Route.extend(ApplicationRouteMixin, {
  flashMessages: service(),
  NavbarService: service('navbar'),


  activate() {
    const NavbarService = this.get('NavbarService');

    NavbarService.addNavLink('auth.register', 'Register');
    NavbarService.addNavLink('auth.login', 'Login');
  },


  actions: {

    /**
     * Call `invalidate` on the `session` service injected
     * by the ApplicationRouteMixin
     */
    invalidateSession() {
      this.get('session').invalidate();
      this.get('flashMessages').success('Logged out');
    }
  }
});
