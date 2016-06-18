import BaseCard from 'real-chat/components/x-card';
import FormComponentMixin from 'real-chat/mixins/component/form';


export default BaseCard.extend(FormComponentMixin, {

  classNames: ['c-form-card'],

  buttonText: 'Submit',
  buttonClassNames: null
});
