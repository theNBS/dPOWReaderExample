import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return $.getJSON('/assets/004-Newtown_Country_Park.dpow');
	}
});
