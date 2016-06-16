import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  tagName: 'form',
  classNames: ['u-m0', 'u-overflow-hide', 'u-b-box', 'o-content'],
  attributeBindings: ['autocomplete', 'novalidate', 'method'],

  autocomplete: 'on',
  novalidate: 'novalidate',
  method: 'post'

});
