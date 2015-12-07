import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.peekAll('contact');
	},

	// for demo only - add demo data
	afterModel: function () {
		this.store.createRecord('contact', {
			id: 1,
			firstname: 'Yehuda',
			lastname: 'Katz',
			email: 'yehuda@gmail.com',
			phone: '050-1111111'
		});

		this.store.createRecord('contact', {
			id: 2,
			firstname: 'Tom',
			lastname: 'Dale',
			email: 'tom@gmail.com',
			phone: '050-2222222'
		});
	}
});
