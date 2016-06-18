import Ember from 'ember';
import XCard from 'real-chat/components/x-card';

const { computed } = Ember;


export default XCard.extend({
  classNames: ['c-action-card'],
  classNameBindings: ['sizeClass'],

  primaryAction: null,
  buttonText: null,

  sizeClass: computed('size', {
    get() {
      return {
        sm: 'c-action-card--sm',
        small: 'c-action-card--sm',
        md: 'c-action-card--md',
        medium: 'c-action-card--md',
        lg: 'c-action-card--lg',
        large: 'c-action-card--lg',
        xlg: 'c-action-card--xlg',
        xlarge: 'c-action-card--xlg'
      }[this.get('size') || 'md'];
    }
  })

});
