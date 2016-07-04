import Ember from 'ember';

const { Mixin } = Ember;

/**
 * Mixin that enables a component to be configured by its parent on init
 * when the component defines a `_parentComponent` and that parent component
 * implements an interface consisting of
 * a `_setupChildComponent(component)` function.
 *
 * The child component (the component extending this mixin), then
 * calls _setupChildComponent on init, passing the instance of itself
 * as the argument
 */
export default Mixin.create({
  _parentComponent: null,


  init() {
    this._super(...arguments);

    const parentComponent = this.get('_parentComponent');

    if (parentComponent && typeof parentComponent._setupChildComponent === 'function') {
      parentComponent._setupChildComponent(this);
    }
  }
});
