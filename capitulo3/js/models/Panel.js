var Panel = Backbone.Model.extend(
	{
		defaults: {
			txt: "Aun no se ha definido ningun texto",
			rotulo: "sin nombre"
		},
		initialize: function(attr) {
			window.trace('el txt es ' + attr.txt);
		}
	}
);