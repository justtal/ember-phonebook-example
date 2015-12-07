import Ember from 'ember';

export default Ember.Route.extend({
	// for demo only
	autoInc: 2,

	actions: {
		createContact: function (contact) {
			// for demo only
			contact.id = ++this.autoInc;

			this.store.createRecord('contact', contact);
			this.transitionTo('contacts');
		}
	}
});
