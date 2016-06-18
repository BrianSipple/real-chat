import Ember from 'ember';
import XFormField from 'real-chat/components/x-form-field';

const { computed } = Ember;
const { alias } = computed;

export default XFormField.extend({
  classNames: ['c-material-form-field'],

  value: null,
  label: null,
  fieldType: 'text',
  placeholder: null,
  materialInputClassNames: null,

  for: alias('label'),

  materialInputComponentName: computed('fieldType', {
    get() {
      const fieldType = this.get('fieldType');

      return {
        text: 'material-text-input',
        email: 'material-text-input',
        password: 'material-text-input',
        search: 'material-text-input',
        tel: 'material-text-input'
      }[fieldType];
    }
  })
});
