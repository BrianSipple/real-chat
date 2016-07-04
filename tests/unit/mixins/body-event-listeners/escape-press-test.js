import Ember from 'ember';
import BodyEventListenersEscapePressMixin from 'real-chat/mixins/body-event-listeners/escape-press';
import { module, test } from 'qunit';

module('Unit | Mixin | body event listeners/escape press');

// Replace this with your real tests.
test('it works', function(assert) {
  const BodyEventListenersEscapePressObject = Ember.Object.extend(BodyEventListenersEscapePressMixin);
  const subject = BodyEventListenersEscapePressObject.create();
  assert.ok(subject);
});
