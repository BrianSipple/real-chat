import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import UserValidations from 'real-chat/validations/user';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend(UserValidations, {
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string')
});
