import Ember from 'ember';

const { Component, inject: { service }, computed: { readOnly } } = Ember;


export default Component.extend({
  SidenavService: service('sidenav'),

  classNames: ['c-sidenav'],
  classNameBindings: ['isVisible'],

  isVisible: readOnly('SidenavService.isSidenavVisible')
});
