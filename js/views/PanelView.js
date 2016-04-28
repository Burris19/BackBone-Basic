var PanelView = Backbone.View.extend({
	events:{
		'click': '_click'
	},
	template: _.template($('#panel_template').html()),
	initialize: function(){
		this.render();
	},
	render: function(eventName){
		$(this.$el).append(this.template(this.model.toJSON()));
		return this;
	},
	_click: function(e){
		e.preventDefault();
		trace(this.model.attributes.rotulo);
	}
});