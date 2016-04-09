$(document).ready(function(){
    ejemplo2_1();

});


function ejemplo2_1(){

	var objeto = {};	
	_.extend(objeto, Backbone.Events);
	objeto.on("alert", function(msg,el){
		alert(msg);
		el.append("<div class='tested'>ok</div>")
	});

	$("#ejemplo1").click(function(){
		objeto.trigger("alert","Pasando parametros de evento", $(this));
	});
	
}

