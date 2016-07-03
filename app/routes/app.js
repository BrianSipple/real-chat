import Ember from 'ember';
import ENV from 'real-chat/config/environment';
import AuthConfig from 'ember-simple-auth/configuration';
import fetch from 'ember-network/fetch';

const { Route, inject: { service } } = Ember;
const { apis: { realChat: realChatAPI } } = ENV;

export default Route.extend({
  SessionService: service('session'),

  beforeModel() {
    if (!this.get('SessionService').get('isAuthenticated')) {
      this.transitionTo(AuthConfig.authenticationRoute);
    }
  },

  async afterModel () {
    const currentUserRoute = `${realChatAPI.HOST}/${realChatAPI.NAMESPACE}/user/current`;
    const SessionService = this.get('SessionService');

    const currentUserData = await fetch(currentUserRoute, {
      type: 'GET',
      headers: {
        // Authorization: `Bearer ${SessionService.get('session.content.authenticated.access_token')}`;
        Authorization: `Bearer ${SessionService.get('data.authenticated.access_token')}`
      }
    })
    .then(resp => resp.json());

    const currentUser = this.store.push(currentUserData);
    this.set('SessionService.currentUser', currentUser);

    // return fetch(currentUserRoute, {
    //   type: 'GET',
    //   headers: {
    //     // Authorization: `Bearer ${SessionService.get('session.content.authenticated.access_token')}`;
    //     Authorization: `Bearer ${SessionService.get('data.authenticated.access_token')}`;
    //   }
    // })
    // .then(resp => {
    //   return resp.json().then(data => {
    //     const currentUser = this.store.push(data);
    //     this.set('SessionService.currentUser', currentUser);
    //   });
    // });
  }
});
