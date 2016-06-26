import Ember from 'ember';
import PressActionMixin from 'real-chat/mixins/component/press-action';

const { Component, computed } = Ember;


export default Component.extend(PressActionMixin, {
// export default Component.extend({
  attributeBindings: ['disabled:is-disabled', 'type'],
  tagName: 'button',
  classNameBindings: ['cornerStyleClass'],

  classNames: [
    'c-button',
    'o-flex-grid',
    'o-flex-grid--full',
    'o-flex-grid--center',
    'u-pointer',
    'u-relative'
  ],

  title: null,
  disabled: false,
  size: null,
  cornerStyle: 'rounded',

  cornerStyleClass: computed('cornerStyle', {
    get() {
      return {
        'rounded': 'c-button--rounded',
        'flat': 'c-button--flat'
      }[(this.get('cornerStyle') || '').toLowerCase()];

    }
  })


});
