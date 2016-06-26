import Ember from 'ember';

const { Mixin } = Ember;


export default Mixin.create({

  /**
   * Custom overrides for the default of "ember-modal-dialog"
   * to style the main widget
   */
  containerClassNames: [
    'c-modal',
    'o-widget-box',
    'g-box-shadow-1',
    'o-content',
    'u-fixed'
  ],

  /**
   * custom overrides for the default of "ember-modal-overlay"
   * to set up  proper overlay behavior
   */
  // overlayClassNames: [
  // ],

  /* custom overrides for the default of "ember-modal-wrapper" */
  // wrapperClassNames: [
  //
  // ]

});
