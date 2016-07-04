import Ember from 'ember';
import ComponentWireableChildMixin from 'real-chat/mixins/component/wireable-child';
import { module, test } from 'qunit';

module('Unit | Mixin | component/wireable child');

// Replace this with your real tests.
test('it works', function(assert) {
  const ComponentWireableChildObject = Ember.Object.extend(ComponentWireableChildMixin);
  const subject = ComponentWireableChildObject.create();
  assert.ok(subject);
});
