 var paneles;

$(document).ready(function(){

    var PanelesCollection = Backbone.Collection.extend(
      {
          model:Panel
      }
    );

    panels = new PanelesCollection(
      [
        {txt:'Este es el panel 1', rotulo:'Panel 1', id: '1'},
        {txt:'Este es el panel 2', rotulo:'Panel 2', id: '2'},
        {txt:'Este es el panel 3', rotulo:'Panel 3', id: '3'}
      ]
    );
    
    trace(JSON.stringify(panels.toJSON()));
      

    
    function pintaPanel(data){
        var $div = $("<li>", {id: "ref_panel_"+data.cid});
        $div.html(data.get("rotulo"));
        $div.data("id_panel", data.cid);
        $div.click(function(){
           $(this).toggleClass("panel_seleccionado");
           if($.seleccionado != undefined && $.seleccionado.data("id_panel") != $(this).data("id_panel")){
              $.seleccionado.toggleClass("panel_seleccionado");
           }
           $.seleccionado = $(this);
        });
        $("#listado ul").append($div);

    }



});



    
    
    
    
    //función que escribe un mensaje en la consola
    function trace(msg){
        $("#consola").append(msg+"<br>");
        console.debug(msg);
    }







