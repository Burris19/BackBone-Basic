var Panel = Backbone.Model.extend(
	{
		prefijo: 'Texto del panel',
		defaults: {
			txt: "Aun no se ha definido ningun texto",
			rotulo: "sin nombre",
			isActive: false
		},
		initialize: function(attr) {
			this.on('change', this.onChangeAll, this);
			this.on('change:rotulo', this.onChangeRotulo, this);
			this.on('invalid', this.onInvalid, this);
			// window.trace('el txt es ' + attr.txt);
			this.set('txt', this.prefijo + attr.txt);

		},
		toString: function(){
			// return 'El texto es: ' + this.attributes.txt;
			return 'El texto es: ' + this.get('txt');
		},
		onChangeAll: function(model, options){
			trace('Se han cambiado propiedades del modelo Panel');
		},
		onChangeRotulo: function(model, options){
			trace('Se ha cambiado la propieda rotulo por ' + this.get('rotulo'));
		},
		validate: function(attrs, options){
			if(attrs.isActive != undefined && !_.isBoolean(attrs.isActive)){
				return 'El valor de activacion no es valido';
			}
		},
		onInvalid: function(model, error){
			// alert('El valor no es correcto');
			alert(error)
			trace(error)
		}
	}
);

var SubPanel = Panel.extend(
	{
		prefijo: 'Texto del SubPanel'
	}	
);