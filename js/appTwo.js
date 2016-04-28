var paneles;
var num_paneles;

$(function(){
	// $("#create_button").click(function(){
		// var panel1 = new Panel();
		// var panel2 = new Panel();

		// panel1.propInstancia = "Nuevo valor";
		// window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
		// window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);
		// Panel.propEstatica = "nuevo valor estatico";
		// window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
		// window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);

		// var panel1 = new Panel();
		// var panel = new Panel({
		// 	txt: "Este es el nuevo panel",
		// 	rotulo: "Mi panel"
		// });

		// window.trace(panel.get("rotulo"));
		// window.trace(panel.toString());
		// panel.set("rotulo","modificacion del rotulo");
		// panel.set("isActive", "sdf");
		// panel.isValid();

		// var subpanel = new SubPanel({
		// 	txt: "Este es el nuevo panel",
		// 	rotulo: "Mi panel"
		// });

		// trace(subpanel.toString());
		//window.trace(JSON.stringify(panel2.toJSON()));
		// console.log(panel1);
		// console.log(panel2);



	// });

	var PanelesCollection = Backbone.Collection.extend({
		model: Panel
	});

	paneles = new PanelesCollection([
		{txt: "Este es el panel1", rotulo: "Panel1", id:"1"},
		{txt: "Este es el panel2", rotulo: "Panel1", id:"2"},
		{txt: "Este es el panel3", rotulo: "Panel1", id:"3"}
	]);

	onChangePanels(null, null);

	paneles.on({'add': onChangePanels, 'remove': onChangePanels, 'reset': onChangePanels, 'sort': onChangePanels});

	trace(JSON.stringify(paneles.toJSON()));

	num_paneles = paneles.length + 1;

	$('#create_button').click(function(){
		var item = {
			txt: "Este es el panel " + num_paneles, rotulo: "Panel " + num_paneles, id:num_paneles
		};
		paneles.add(item);
		num_paneles++;
	});


	$("#delete_button").click(function(){
		paneles.remove(paneles.at(0))
	});

	$('#delete_button_ID').click(function(){
		paneles.remove(paneles.get($('#rot_del').val()));
	});

	$('#reset_button').click(function(){
		paneles.reset();
	});

	$('#set_button').click(function(){
		var _id = $('.panel_seleccionado').data('id_panel');
		var item = paneles.get(_id);
		item.set('rotulo', $('#rot_set').val());		
	});

});

	function onChangePanels(model, collection){
	    $("#listado").html("<ul></ul>");
	    paneles.each(pintaPanel);
	}


	function pintaPanel(data){
	    var $div = $("<li>", {id: "ref_panel_"+data.cid});
	    $div.html(data.get("rotulo") + " " + data.cid);
	    $div.data("id_panel", data.cid);
	    $div.click(function(){
	      $(".panel_seleccionado").toggleClass("panel_seleccionado");
	       $(this).toggleClass("panel_seleccionado");
	       
	       $.seleccionado = $(this);
	    });
	    $("#listado ul").append($div);
	}

//Funcion que escribe un mensaje en la consola

window.trace = function(msg){
	$("#consola").append(msg + "<br>")
	console.log(msg);
}