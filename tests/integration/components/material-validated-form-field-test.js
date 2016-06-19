import { moduleForComponent /* , test */ } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('material-validated-form-field', 'Integration | Component | material validated form field', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{material-validated-form-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#material-validated-form-field}}
      template block text
    {{/material-validated-form-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
