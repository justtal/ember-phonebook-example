import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['contact-form'],

	actions: {
		saveContact: function () {
			var contact = {
				firstname: this.get('firstname'),
				lastname: this.get('lastname'),
				email: this.get('email'),
				phone: this.get('phone')
			};

			this.sendAction('saveContact', contact);
		}
	}
});
