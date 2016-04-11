var Panel = Backbone.Model.extend(
	{
		prefijo: "Texto del panel:",
		defaults: {
			txt: "Aun no se ha defino texto",
			rotulo:"Sin nombre",
			isActive: false
		},
		initialize: function(attr){
			this.on("change", this.onChnageAll, this);
			this.on("change:rotulo", this.onChnageRotulo, this);
			this.on("invalid", this.onInvalid, this);
			// window.trace("El text es " + attr.txt);
			this.set("txt", this.prefijo + attr.txt);
		},
		toString: function(){
			return "El texto es: " + this.get("txt");
		},
		onChnageAll: function(){
			trace("Se han cambiado propiedades del modelo Panel");
		},
		onChnageRotulo: function(model, options){
			trace("Se ha cambiado el rotulo por " + this.get("rotulo"));
		},
		validate: function(attrs, options){
			if(attrs.isActive != undefined && !_.isBoolean(attrs.isActive)){
				return "El valor de activacion no es correcto";
			}
		},
		onInvalid: function(model, error){
			alert(error);			
		}
	}
);


var SubPanel = Panel.extend({
	{
		prefijo: "Texto del SUBPANEL",
	}
});