import Ember from 'ember';
import XFormField from 'real-chat/components/x-form-field';
import ValidatedFormFieldMixin from 'real-chat/mixins/component/validated-form-field';

const { computed } = Ember;
const { alias } = computed;


export default XFormField.extend(ValidatedFormFieldMixin, {
  classNames: ['c-validated-form-field'],

  placeholder: null,
  fieldType: 'text',
  label: null,
  testSelector: null,

  for: alias('label'),

  inputComponentName: computed('fieldType', {
    get() {
      const fieldType = this.get('fieldType');

      return {
        text: 'validated-text-input',
        password: 'validated-text-input',
        number: 'validated-text-input',
        email: 'validated-text-input',
        search: 'validated-text-input'
      }[fieldType];

      // TODO: Flesh this out if it's a good pattern
    }

  })


});
