import Ember from 'ember';
import FormMixin from 'real-chat/mixins/component/form';

const { Component } = Ember;


export default Component.extend(FormMixin, {
  classNames: ['c-form']
});
