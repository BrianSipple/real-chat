import Ember from 'ember';

const { Component, computed: { notEmpty } } = Ember;

/**
 * TODO: Try extending x-text-input component?
 */
export default Component.extend({
  tagName: 'span',
  classNames: [
    'c-material-text-input',
    'u-block',
    'u-relative',
    'g-bg-transparent'
  ],

  classNameBindings: ['hasInputText'],

  errors: null,
  fieldId: null,
  type: 'text',
  value: null,
  label: null,
  placeholder: null,

  labelClassNames: null,
  inputClassNames: null,

  hasInputText: notEmpty('value')

});
