'use strict';

const SERVER_PORT = 4000;  // TODO: Store this in a better place

module.exports = function(environment) {

  // const isProductionLikeBuild = ['production', 'staging'].indexOf(environment) > -1;

  const ENV = {
    modulePrefix: 'real-chat',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    apis: {
      realChat: {
        HOST: `http://localhost:${SERVER_PORT}`,
        NAMESPACE: 'api/v1',
      }
    },

    SERVER_PORT
  };

  ENV['ember-a11y-testing'] = {
    componentOptions: {}
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'auth.login',
    routeIfAlreadyAuthenticated: 'app.index',
    routeAfterAuthentication: 'app.index'
  };


  ////////////// ENVIRONMENT-SPECIFIC SETTINGS TO OVERRIDE defaults ///////////////////
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apis.realChat.HOST = 'https://real-chat-rtc.herokuapp.com';
  }

  return ENV;
};
