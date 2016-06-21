import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route, inject: { service } } = Ember;


export default Route.extend(ApplicationRouteMixin, {
  flashMessages: service(),

  actions: {

    /**
     * Call `invalidate` on the `session` service injected
     * by the ApplicationRouteMixin
     */
    logout () {
      this.get('session').invalidate();
      this.get('flashMessages').success('Logged out');
    }
  }
});
