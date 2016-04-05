var panelView
var BotonView = Backbone.View.extend({
    events:{
        "click": "_click",
    },
    initialize: function () {
        this.render();
    },
     render: function(){
       var el = $(this.el);
       this.collection.each(function(model){
            var template = _.template($("#boton_template").html());
            var html = template(model.toJSON());
            el.append(html);
       });
    },
    _click:function(e){
        e.preventDefault();
        var _id = $(e.target).data("id");
        var item = this.collection.get(_id);
        if(item != undefined){
            $(".panel_seleccionado").toggleClass("panel_seleccionado");
            $(e.target).toggleClass("panel_seleccionado");
               
            if(panelView != undefined){
                panelView.undelegateEvents();
            }
            $.seleccionado = $(e.target);
            $("#contenedor").html("");
            panelView = new PanelView({el:$("#contenedor"), model:item});
        }
        
    }
   
});