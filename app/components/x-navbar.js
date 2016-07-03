import Ember from 'ember';
import XToolbar from 'real-chat/components/x-toolbar';

export default XToolbar.extend({
  tagName: 'nav',
  classNames: [
    'c-navbar',
    'u-fixed'
  ],

  size: 'small',
  title: null
});
