var Panel = Backbone.Model.extend(
	{
		prefijo: 'Texto del panel',
		defaults: {
			txt: "Aun no se ha definido ningun texto",
			rotulo: "sin nombre"
		},
		initialize: function(attr) {
			// window.trace('el txt es ' + attr.txt);
			this.set('txt', this.prefijo + attr.txt);
		},
		toString: function(){
			// return 'El texto es: ' + this.attributes.txt;
			return 'El texto es: ' + this.get('txt');
		}
	}
);