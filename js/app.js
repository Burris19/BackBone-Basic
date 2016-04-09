$(document).ready(function(){
    ejemplo2_1();
    ejemplo2_2();
    ejemplo2_3();
    ejemplo2_4();
    ejemplo2_5();
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

function ejemplo2_2(){
	var objeto = {};
	_.extend(objeto, Backbone.Events);
	objeto.on("alert", function(msg,el){		
		el.append("<div class='tested'>ok</div>")
		objeto.off("alert");
	});

	$("#ejemplo2").click(function(){
		objeto.trigger("alert", "Pasando parametros de evento", $(this));
	});
}

function ejemplo2_3(){
	var objeto1 = {};
	var objeto2 = {};

	_.extend(objeto1, Backbone.Events);
	_.extend(objeto2, Backbone.Events);

	$("#ejemplo3").click(function(){
		objeto1.trigger("alert","lanzando envento desde objeto1");
	})

	objeto2.listenTo(objeto1, "alert", function(msg){
		alert("Recibiendo evento desde el objeto2 " + msg);
		this.stopListening(objeto1); //dejar de recibir eventos del objeto1
	});
}


function ejemplo2_4(){
	var objeto = {};
	_.extend(objeto, Backbone.Events);

	objeto.once("alert", function(msg){
		alert("Recibo solo una vez: " + msg);
	})

	$("#ejemplo4").click(function(){
		objeto.trigger("alert","Pasando datos de evento");
	});
}

function ejemplo2_5(){
	 var objeto = {};

	 _.extend(objeto, Backbone.Events);


	 // objeto.on("alert:obj1", function(msg){
	 // 	alert("LLega un alert:obj1 " + msg);
	 // });

	 // objeto.on("alert:obj2", function(msg){
	 // 	alert("LLega un alert:obj2 " + msg);
	 // });

	 objeto.on("all", function(eventName, msg){
	 	alert(eventName + ' : ' + msg);
	 })

	 $("#ejemplo5a").click(function(){
	 	objeto.trigger("alert:obj1", "Pasando datos de evento desde el primer enlace");
	 })

	 $("#ejemplo5b").click(function(){
	 	objeto.trigger("alert:obj2", "Pasando datos de evento desde el segundo enlace");
	 })


}