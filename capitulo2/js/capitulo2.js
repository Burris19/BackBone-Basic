$(document).ready(function(){
    // ejemplo2_1();
    ejemplo2_2();
    ejemplo2_3();
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

function ejemplo2_2(){
	var objeto = {};
	_.extend(objeto, Backbone.Events);
	objeto.on('alert', function(msg, extend){
		extend.append("<div class='tested'>Ok</div>");
		objeto.off('alert');
	});

	$('#ejemplo1').click(function(){
		objeto.trigger('alert', 'Pasando parametros de evento', $(this));
	});
}


function ejemplo2_3(){
	var objeto1 = {};
	var objeto2 = {};

	_.extend(objeto1, Backbone.Events);
	_.extend(objeto2, Backbone.Events);

	$('#ejemplo3').click(function(){
		objeto1.trigger('alert', 'Pasando eventos');
	});

	objeto2.listenTo(objeto1, 'alert', function(msg){
		alert('Revibiendo mensaje del objeto1 ' + msg);
		this.stopListening(objeto1);
	});

}




