var Panel = Backbone.Model.extend(
    {
        defaults: {
            txt: "Aún no ha añadido un texto",
            rotulo: "",
        },
        initialize: function(attr){
            this.on('change:txt',this.onChangeTxt,this);
            trace("Creando un nuevo panel con texto: " + this.get("txt"));
            
        },
        promptTexto: function() {
            var _txt = prompt("Escribe el texto que quieres añadir:");
            this.set({txt: _txt});
        },
        onChangeTxt: function(model,options){
            trace("el texto ha sido cambiado por " + model.changed.txt);
        }
    },
    {
      rotulo_init: "Panel con rótulo ",
    }
);




