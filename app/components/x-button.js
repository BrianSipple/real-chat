import Ember from 'ember';
// import PressActionMixin from 'real-chat/mixins/component/press-action';

const { Component } = Ember;


// export default Component.extend(PressActionMixin, {
export default Component.extend({

  attributeBindings: ['disabled', 'type'],
  tagName: 'button',
  classNameBindings: ['sizeClass'],

  classNames: [
    'c-button',
    'o-content',
    'o-flex-grid',
    'o-flex-grid--full',
    'o-flex-grid--center',
    'u-pointer',
    'u-relative'
  ],

  title: null,
  disabled: false,
  size: null


});
