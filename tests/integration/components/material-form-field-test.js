import { moduleForComponent /* , test */ } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('material-form-field', 'Integration | Component | material form field', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{material-form-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#material-form-field}}
      template block text
    {{/material-form-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
