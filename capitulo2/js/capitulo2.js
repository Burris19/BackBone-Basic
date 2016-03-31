$(document).ready(function(){
    ejemplo2_1();
});


function ejemplo2_1(){
 	var objeto = {};
 	_.extend(objeto, Backbone.Events);
 	objeto.on('alert', function(msg, e){
 		alert(msg);
 		e.append("<div class='tested' >Ok</div>");
 	});

 	$('#ejemplo1').click(function(){
 		objeto.trigger('alert', 'Pasando parametros de evento', $(this));  
 	});

 	
}







