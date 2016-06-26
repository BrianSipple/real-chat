import Ember from 'ember';
import PressActionMixin from 'real-chat/mixins/component/press-action';

const { Component, computed, isBlank } = Ember;

export default Component.extend(PressActionMixin, {

  tagName: 'button',
  classNames: ['c-icon-button', 'u-pointer', 'g-border-none'],
  classNameBindings: ['tapTargetSizeClass', 'fab:g-border-circle'],

  iconURL: null,
  stroke: 'currentColor',
  strokeWidth: '0.125em',
  iconWidth: '75%',
  iconHeight: '75%',
  fill: 'currentColor',
  fab: false,
  size: 'small',


  iconAttrs: computed('stroke', 'strokeWidth', 'fill', {
    get() {
      debugger;
      const { stroke, strokeWidth, fill } = this.getProperties('stroke', 'strokeWidth', 'fill');
      const attrs = {};
      //return this.getProperties('stroke', 'strokeWidth', 'fill');
      if (!isBlank(stroke)) attrs.stroke = stroke;
      if (!isBlank(strokeWidth)) attrs.strokeWidth = strokeWidth;
      if (!isBlank(fill)) attrs.fill = fill;

      return attrs;
    }
  }),


  tapTargetSizeClass: computed('size', {
    get() {
      const size = this.get('size') || '';

      return {
        'xsmall': 'o-tap-target-xs',
        'small': 'o-tap-target-sm',
        'medium': 'o-tap-target-md',
        'large': 'o-tap-target-lg',
      }[size.toLowerCase()] || null;
    }
  })
});
