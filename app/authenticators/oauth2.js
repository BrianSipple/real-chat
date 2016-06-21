import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'real-chat/config/environment';

const { apis: { realChat: realChatAPI } } = ENV;


export default OAuth2PasswordGrantAuthenticator.extend({

  serverTokenEndpoint: `${realChatAPI.HOST}/${realChatAPI.NAMESPACE}/token`,

  // restore(/* data */) {
  // },
  //
  // authenticate(/* args */) {
  // },
  //
  // invalidate(/* data */) {
  // }
});
