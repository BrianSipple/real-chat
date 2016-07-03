import { moduleForComponent /* , test */ } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('room-list-item', 'Integration | Component | room list item', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{room-list-item}}`);

  assert.equal(this.$().text().trim(), '');
});
