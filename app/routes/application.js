import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route } = Ember;


export default Route.extend(ApplicationRouteMixin, {


  actions: {

    /**
     * Call `invalidate` on the `session` service injected
     * by the ApplicationRouteMixin
     */
    logout () {
      this.get('session').invalidate();
    }
  }
});
