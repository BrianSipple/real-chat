import { moduleForComponent /* , test */} from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-sidenav', 'Integration | Component | x sidenav', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-sidenav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-sidenav}}
      template block text
    {{/x-sidenav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
