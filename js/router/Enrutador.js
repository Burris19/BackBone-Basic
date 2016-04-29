var Enrutador = Backbone.Router.extend({
	routes: {
		'help'		: 'ayuda'
	},
	initialize: function() {
		trace('rutas inicializadas');
	},
	ayuda: function () {
		$('body').append("<div id='help'>Test</div>")
	}
});