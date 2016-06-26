import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modals/confirmation-overlay', 'Integration | Component | modals/confirm overlay', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modals/confirmation-overlay}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modals/confirmation-overlay}}
      template block text
    {{/modals/confirmation-overlay}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
