import Ember from 'ember';
import ComponentPressActionMixin from 'real-chat/mixins/component/press-action';
import { module, test } from 'qunit';

module('Unit | Mixin | component/press action');

// Replace this with your real tests.
test('it works', function(assert) {
  const ComponentPressActionObject = Ember.Object.extend(ComponentPressActionMixin);
  const subject = ComponentPressActionObject.create();
  assert.ok(subject);
});
