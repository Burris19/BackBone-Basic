var Panel = Backbone.Model.extend(
	{
		prefijo: "Texto del panel:",
		defaults: {
			txt: "Aun no se ha defino texto",
			rotulo:"Sin nombre"
		},
		initialize: function(attr){
			// window.trace("El text es " + attr.txt);
			this.set("txt", this.prefijo + attr.txt);
		},
		toString: function(){
			return "El texto es: " + this.get("txt");
		}
	}
);