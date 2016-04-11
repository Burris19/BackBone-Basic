var Panel = Backbone.Model.extend(
	{
		// prefijo: "Texto del panel:",
		defaults: {
			txt: "Aun no se ha defino texto",
			rotulo:"Sin nombre",
			// isActive: false
		},
		initialize: function(attr){
			// this.on("change", this.onChnageAll, this);
			// this.on("change:rotulo", this.onChnageRotulo, this);
			// this.on("invalid", this.onInvalid, this);
			this.on("change:txt", this.onChangeTxt, this);
			window.trace("Creando un nuevo panel con texto:  " + this.get("txt"));
			// this.set("txt", this.prefijo + attr.txt);
		},
		promptTexto: function(){
			var _txt = prompt("Escribe el texto que quieres agregar:");
			this.set({txt: _txt});
		},
		onChangeTxt: function(model, options){
			trace("el texto ha sigo cambiado por: " + model.changed.txt);
		}
		// toString: function(){
		// 	return "El texto es: " + this.get("txt");
		// },
		// onChnageAll: function(){
		// 	trace("Se han cambiado propiedades del modelo Panel");
		// },
		// onChnageRotulo: function(model, options){
		// 	trace("Se ha cambiado el rotulo por " + this.get("rotulo"));
		// },
		// validate: function(attrs, options){
		// 	if(attrs.isActive != undefined && !_.isBoolean(attrs.isActive)){
		// 		return "El valor de activacion no es correcto";
		// 	}
		// },
		// onInvalid: function(model, error){
		// 	alert(error);			
		// }
	},{
		rotulo_init: "Panel con rotulo ",	
	}
	
);


// var SubPanel = Panel.extend({
// 	{
// 		prefijo: "Texto del SUBPANEL",
// 	}
// });