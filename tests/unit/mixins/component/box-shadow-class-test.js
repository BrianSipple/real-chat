import Ember from 'ember';
import ComponentBoxShadowClassMixin from 'real-chat/mixins/component/box-shadow-class';
import { module, test } from 'qunit';

module('Unit | Mixin | component/box shadow class');

// Replace this with your real tests.
test('it works', function(assert) {
  const ComponentBoxShadowClassObject = Ember.Object.extend(ComponentBoxShadowClassMixin);
  const subject = ComponentBoxShadowClassObject.create();
  assert.ok(subject);
});
