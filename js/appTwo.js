$(function(){
	$("#create_button").click(function(){
		// var panel1 = new Panel();
		// var panel2 = new Panel();

		// panel1.propInstancia = "Nuevo valor";
		// window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
		// window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);
		// Panel.propEstatica = "nuevo valor estatico";
		// window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
		// window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);

		// var panel1 = new Panel();
		var panel = new Panel({
			txt: "Este es el nuevo panel",
			rotulo: "Mi panel"
		});

		window.trace(panel.get("rotulo"));
		window.trace(panel.toString());
		//window.trace(JSON.stringify(panel2.toJSON()));
		// console.log(panel1);
		// console.log(panel2);

	});
});

//Funcion que escribe un mensaje en la consola

window.trace = function(msg){
	$("#consola").append(msg + "<br>")
	console.log(msg);
}