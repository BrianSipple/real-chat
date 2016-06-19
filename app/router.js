import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

/* eslint-disable func-names */

Router.map(function() {
  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
});

/* eslint-enable func-names */


export default Router;
