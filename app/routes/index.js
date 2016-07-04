import Ember from 'ember';

const { Route, inject: { service } } = Ember;


export default Route.extend({
  NavbarService: service('navbar'),


  beforeModel() {
    this.get('NavbarService').set('isNavbarVisible', false);
  }
});
