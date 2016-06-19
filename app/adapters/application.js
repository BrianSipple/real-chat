import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'real-chat/config/environment';

const { apis: { realChat: realChatAPI } } = ENV;


export default JSONAPIAdapter.extend({
  host: realChatAPI.HOST,
  namespace: realChatAPI.NAMESPACE,

  urlForCreateRecord(modelName /* , snapshot */) {
    if (modelName === 'user' || modelName === 'users') {
      return this._super(...arguments).replace('users', 'register');
    }

    return this._super(...arguments);
  }
});
