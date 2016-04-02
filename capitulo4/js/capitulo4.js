 var paneles;
 var num_paneles;

$(document).ready(function(){

    var PanelesCollection = Backbone.Collection.extend(
      {
          model:Panel
      }
    );

    paneles = new PanelesCollection(
      [
        {txt:'Este es el panel 1', rotulo:'Panel 1', id: '1'},
        {txt:'Este es el panel 2', rotulo:'Panel 2', id: '2'},
        {txt:'Este es el panel 3', rotulo:'Panel 3', id: '3'}
      ]
    );

    onChangePanels(null,null);

    paneles.on({'add': onChangePanels,'remove': onChangePanels, 'reset': onChangePanels, 'sort': onChangePanels });

    trace(JSON.stringify(paneles.toJSON())); 

    num_paneles = paneles.length + 1;

    $('#create_button').click(function(){      
        // var panel = new Panel({txt:"Este es el panel 4", rotulo:"Panel 4", id:"4"});
        // paneles.add(panel);
        paneles.add({txt:"Este es el panel " + num_paneles, rotulo:"Panel " + num_paneles, id: num_paneles})
        num_paneles ++;
    });
      

    $("#delete_button").click(function(){
       paneles.remove(paneles.at(0));
    });


    $("#delete_button_ID").click(function(){
       paneles.remove(paneles.get($("#rot_del").val()));
    });

    $("#reset_button").click(function(){
      paneles.reset();
    });



});


    function onChangePanels(model, collection){ 
        $("#listado").html("<ul></ul>");
        paneles.each(pintaPanel);
    };
    
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

    
    
    
    
    //función que escribe un mensaje en la consola
    function trace(msg){
        $("#consola").append(msg+"<br>");
        console.debug(msg);
    }







