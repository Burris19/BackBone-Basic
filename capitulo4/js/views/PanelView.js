var PanelView = Backbone.View.extend({
	template: _.template($('#panel_template').html()),
	initialize: function(){
		this.render();
	},
	render: function (eventName) {
		$(this.$el).append(this.template(this.model.toJSON())); 
		return this;
	}

});