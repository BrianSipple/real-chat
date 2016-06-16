import Ember from 'ember';
import XTextInput from 'real-chat/components/x-text-input';

const { computed } = Ember;


export default XTextInput.extend({

  errors: null,

  _errorMessages: computed('errors.[]', {
    get() {
      return (this.get('errors') || []).join(', ');
    }
  })
});
