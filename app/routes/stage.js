import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var parentModel = this.modelFor('application');
		var index = parseInt(params.stage_id);
		var projectStage = parentModel.ProjectStages[index];
		
		console.log(projectStage);
		
		return projectStage;
	}
});
