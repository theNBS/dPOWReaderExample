import Ember from 'ember';

export default Ember.Controller.extend({
	hasDeliverables: function() {
		var model = this.get('model');
		var deliverables = (model.SpaceTypes.length > 0 || model.AssetTypes.length > 0);
		
		return deliverables;
	}.property('model')
});
