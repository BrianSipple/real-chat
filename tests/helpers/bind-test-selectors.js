import Ember from 'ember';

const {
  TextField,
  TextArea,
  Component,
  LinkComponent,
  run
} = Ember;


/**
 * Reopen view helper classes that are using the `data-test-selector`
 * attribute.
 *
 * NOTE: IF BINDING ERRORS PERSISTS, check to see if the component isn't
 * defining its own `attributeBindings`. If it is, we'll need to add `data-test-selector`
 * there
 */
export default function() {
  run(() => {
    [
      TextField,
      TextArea,
      Component,
      LinkComponent

    ].forEach(function(ViewHelper) {
      ViewHelper.reopen({
        attributeBindings: ['data-test-selector']
      });
    });
  });
}
