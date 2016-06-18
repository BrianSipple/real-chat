import Ember from 'ember';

const {
  TextField,
  TextArea,
  Component,
  LinkComponent
} = Ember;


/**
 * Reopen view helper classes that are using the `data-test-selector`
 * attribute.
 */
export default () => {
  [
    TextField,
    TextArea,
    Component,
    LinkComponent
  ].forEach(ViewHelper => {    
    ViewHelper.reopen({
      attributeBindings: ['data-test-selector']
    });
  });
};
