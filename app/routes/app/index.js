import Ember from 'ember';

const { Route, inject: { service }, RSVP: { hash } } = Ember;


export default Route.extend({
  flashMessages: service(),
  SessionService: service('session'),

  model() {
    return hash({
      rooms: this.store.findAll('room'),

      // IMPORTANT: Use a POJO here so that `this.store.findAll('room')`
      // doesn't pick this up in the model hook.
      newRoom: { name: '', errors: [] }
    });
  },


  actions: {
    async createRoom() {
      // Get the "new room" model
      const roomData = this.get('currentModel.newRoom');
      // Create a new Ember-Data record
      const newRoomModel = this.store.createRecord('room', { name: roomData.name });
      // Clear any existing room messages
      this.set('currentModel.newRoom.errors', []);

      try {
        const createdRoom = await newRoomModel.save();
        // Notify success!
        this.get('flashMessages').success(`Created room: ${createdRoom.get('name')}`);
        this.set('currentModel.newRoom.name', '');  // clear the input

      } catch (err) {
        // Handle server-side errors
        // Remove the ember-data record from the Store
        this.store.unloadRecord(newRoomModel);

        // Pass any error messages (i.e., server-side validation) into the UI
        this.set('currentModel.newRoom.errors', (err.errors || []).mapBy('detail'));

        // Notification of failure!
        this.get('flashMessages').danger(`There was a problem with creating a new room: ${roomData.name}`);
      }
    },

    /**
     * Delete a room
     */
    removeRoom(room) {
      room.destroyRecord()
        .then(() => {
          this.get('flashMessages').success(`Deleted room: ${room.get('name')}`);
        })
        .catch(() => {
          this.get('flashMessages').danger(`There was a problem with deleting the room: "${room.name}"`);
        });
    }
  }
});
