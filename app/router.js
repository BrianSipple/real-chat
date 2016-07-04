import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

/* eslint-disable func-names, prefer-arrow-callback */

Router.map(function() {
  this.route('auth', function() {
    this.route('login');
    this.route('register');
    this.route('logout');
  });
  this.route('app', function() {});
});

/* eslint-enable func-names, prefer-arrow-callback */


export default Router;
