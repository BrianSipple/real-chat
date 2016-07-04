import Ember from 'ember';
import ModalDialogMixin from 'real-chat/mixins/component/modal-dialog';
import BoxShadowClassMixin from 'real-chat/mixins/component/box-shadow-class';
import BodyEscapePressListener from 'real-chat/mixins/body-event-listeners/escape-press';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

const { K } = Ember;


export default ModalDialog.extend(ModalDialogMixin, BodyEscapePressListener, BoxShadowClassMixin, {

  tagName: 'section',

  // clickOutsideToClose: true,
  /**
   * Custom overrides for the default of "ember-modal-dialog"
   * to style the main widget
   */
  containerClassNames: [
    'u-relative',
    'g-bg-nearWhite',
    'c-overlay-modal'
  ],

  /**
   * custom overrides for the default of "ember-modal-overlay"
   * to set up  proper overlay behavior
   */
  overlayClassNames: [
    'o-ui-mask',
    'u-fixed',
    'u-edge-top',
    'u-edge-right',
    'u-edge-bottom',
    'u-edge-left',
    'u-full-bleed',
    'u-z5'
  ],

  /* custom overrides for the default of "ember-modal-wrapper" */
  wrapperClassNames: [

  ],

  onEscapePressed: null,
  close: null,


  init () {
    this._super(...arguments);

    this._initListeners();
  },


  _initListeners() {
    this._super(...arguments);

    this.close = (typeof this.close === 'function') ? this.close : K;

    /**
    * Override the `onEscapePressed` that's called by our BodyEscapePressListener
    * and call to our bound close action.
    */
    this.onEscapePressed = function onEscapePressed(event) {
      debugger;
      event.preventDefault();

      this.close();

    }.bind(this);
  }

});
