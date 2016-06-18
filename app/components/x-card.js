import Ember from 'ember';
import BoxShadowClassMixin from 'real-chat/mixins/component/box-shadow-class';

const { Component } = Ember;


export default Component.extend(BoxShadowClassMixin, {

  classNames: [
    'c-card',
    'o-widget-box'
  ],

  title: null
});
