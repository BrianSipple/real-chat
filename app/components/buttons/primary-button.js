import XButton from 'real-chat/components/x-button';
import XButtonLayout from 'real-chat/templates/components/x-button';

export default XButton.extend({
  layout: XButtonLayout,
  classNames: [
    'c-primary-button',
    'g-bg-theme-primary-1--500',
    'g-theme-primary-2--900',
    'g-border-s1'
  ]

});
