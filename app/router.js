import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', { path: '' }, function() {
    this.route('contact', { path: '/contact/:contact_id' });
    this.route('create');
  });
});

export default Router;
