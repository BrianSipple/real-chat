import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: [
    'validator:presence',
    'validator:format',
    'validator:length',
    'validator:unique-username',
    'validator:confirmation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // const store = this.store();
  assert.ok(!!model);
});
