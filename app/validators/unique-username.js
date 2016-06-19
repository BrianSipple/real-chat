import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

const { inject: { service }, isEmpty, isBlank } = Ember;

const UniqueUsername = BaseValidator.extend({
  store: service(),

  validate(value /* , options, model, attribute*/) {
    if (isBlank) {
      return true;
    }

    return this
      .get('store')
      .query('user', { username: value })
      .then((result) => isEmpty(result) ? true : `The username ${value} already exists`);
  }
});

UniqueUsername.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default UniqueUsername;
