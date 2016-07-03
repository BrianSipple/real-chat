import Ember from 'ember';
import XListItem from 'real-chat/components/x-list-item';

const { K } = Ember;


export default XListItem.extend({
  classNames: [
    'c-room-list-item',
    'o-collection-item',
    'o-flex-grid',
    'u-relative'
  ],

  removeRoom: null,
  room: null,

  isShowingDeleteConfirmation: false,


  init() {
    this._super(...arguments);

    this.removeRoom = (typeof this.removeRoom === 'function') ? this.removeRoom : K;
  },

  actions: {
    onRemoveRoom() {
      debugger;
      return this.get('removeRoom')();
    }
  }
});
