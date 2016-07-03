import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import setupEmberModalDialog from 'real-chat/tests/helpers/setup-ember-modal-dialog';


moduleForComponent('modals/confirmation-overlay', 'Integration | Component | modals/confirm overlay', {
  integration: true,
  beforeEach() {
    setupEmberModalDialog(this, 'overlay-container');
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`<div id="overlay-container"></div>{{modals/confirmation-overlay}}`);

  assert.ok(this.$());
});
