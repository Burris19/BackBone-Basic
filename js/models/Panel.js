var Panel = Backbone.Model.extend(
	{
		defaults: {
			txt: "Aun no se ha defino texto",
			rotulo:"Sin nombre"
		},
		initialize: function(attr){
			window.trace("El text es " + attr.txt);
		}
	}
);