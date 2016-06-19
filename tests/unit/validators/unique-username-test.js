import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:unique-username', 'Unit | Validator | unique-username', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  const validator = this.subject();
  assert.ok(validator);
});
