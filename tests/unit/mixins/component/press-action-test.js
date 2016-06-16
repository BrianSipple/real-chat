import Ember from 'ember';
import ComponentPressActionMixin from 'real-chat/mixins/component/press-action';
import { module, test } from 'qunit';

module('Unit | Mixin | component/press action');

// Replace this with your real tests.
test('it works', function(assert) {
  let ComponentPressActionObject = Ember.Object.extend(ComponentPressActionMixin);
  let subject = ComponentPressActionObject.create();
  assert.ok(subject);
});
