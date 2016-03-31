$(document).ready(function(){
    // ejemplo2_1();
    ejemplo2_2();
    ejemplo2_3();
    ejemplo2_4();
    ejemplo2_5();
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

function ejemplo2_4(){
	var objeto1 = {};

	_.extend(objeto1, Backbone.Events);


	objeto1.once('alert', function(msg){
		alert('Pasando eventos ' + msg);
	});

	$('#ejemplo4').click(function(){
		objeto1.trigger('alert', 'ejecutando evento una sola ves');
	});

}


function ejemplo2_5(){
	var objeto = {};

	_.extend(objeto, Backbone.Events);

	objeto.on('all', function(event,msg){
		alert(event + msg);
	});

	$('#ejemplo5').click(function(){
		objeto.trigger('alert:5b', ' Pasando datos desde el enlace uno');
	});

	$('#ejemplo6').click(function(){
		objeto.trigger('alert:5b', ' Padando datos desde el enlace dos');
	});

}