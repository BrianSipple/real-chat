import Ember from 'ember';

const { Component, computed } = Ember;


export default Component.extend({
  classNames: ['c-page-content', 'o-content', 'u-b-box'],

  classNameBindings: [
    'fillHeight:u-fill-height',
    'fillWidth:u-fill-width',
    'isRelative:u-relative',
    'navbarClassName'
  ],

  fillHeight: true,
  fillWidth: true,
  isRelative: true,

  navbarSize: null,


  navbarClassName: computed('navbarSize', {
    get() {
      const navbarSize = this.get('navbarSize') || '';

      return {

        xs: 'o-navbar-page--header-xs',
        xsmall: 'o-navbar-page--header-xs',
        sm: 'o-navbar-page--header-sm',
        small: 'o-navbar-page--header-sm',
        md: 'o-navbar-page--header-md',
        medium: 'o-navbar-page--header-md',
        lg: 'o-navbar-page--header-lg',
        large: 'o-navbar-page--header-lg'

      }[navbarSize.toLowerCase()];
    }
  })


});
