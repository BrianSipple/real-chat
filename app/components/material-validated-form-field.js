import MaterialFormField from 'real-chat/components/material-form-field';
import ValidatedFormFieldMixin from 'real-chat/mixins/component/validated-form-field';

/**
 * Extends matertial-form-field-input with the ValidatedFormFieldMixin
 */
export default MaterialFormField.extend(ValidatedFormFieldMixin, {
  classNames: ['c-material-validated-form-field']
});
