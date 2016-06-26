import Ember from 'ember';

const { K, Component } = Ember;


export default Component.extend({
  message: null,
  confirmTitle: 'Yes',
  abortTitle: 'No',
  onConfirm: null,
  onAbort: null,
  isShowingModal: true,

  init() {
    this._super(...arguments);

    this.onConfirm = (typeof this.onConfirm === 'function') ? this.onConfirm : K;
    this.onAbort = (typeof this.onAbort === 'function') ? this.onAbort : K;
  }

});
