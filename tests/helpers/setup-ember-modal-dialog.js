import Ember from 'ember';

const { getOwner } = Ember;

/**
 * Setup the `destinationElementId` for ember-modal-dialog components
 *
 * This operation addresses the issue being tracked here:
 *  https://github.com/yapplabs/ember-modal-dialog/issues/78
 */
export default function setupEmberModalDialog(context, rootElementId = 'ember-testing') {
  const ModalDialogService = getOwner(context).lookup('service:modal-dialog');

  ModalDialogService.destinationElementId = rootElementId;
}
