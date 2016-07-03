import Ember from 'ember';
import BaseCard from 'real-chat/components/x-card';
import FormComponentMixin from 'real-chat/mixins/component/form';

const { computed: { not } } = Ember;

export default BaseCard.extend(FormComponentMixin, {

  classNames: ['c-form-card'],

  buttonText: 'Submit',
  buttonClassNames: null,
  isSubmitEnabled: true,

  isButtonDisabled: not('isSubmitEnabled')
});
