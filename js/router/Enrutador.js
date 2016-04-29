var Enrutador = Backbone.Router.extend({
	routes: {
		''					: 'index',
		'help'				: 'ayuda',
		'panel/:id'			: 'muestraPanel',
		'panel/:id/r:rotulo' : 'cambiaPaneles'
	},
	initialize: function() {
		trace('rutas inicializadas');
	},
	index: function(){
		$('#help').remove();


	var PanelesCollection = Backbone.Collection.extend({
		model: Panel	

	});

	paneles = new PanelesCollection([
		{txt: "Este es el panel1", rotulo: "Panel1", id:"1"},
		{txt: "Este es el panel2", rotulo: "Panel1", id:"2"},
		{txt: "Este es el panel3", rotulo: "Panel1", id:"3"}
	]);

	paneles = new PanelesCollection([
		{txt: "Este es el panel1", rotulo: "Panel1", id:"1"},
		{txt: "Este es el panel2", rotulo: "Panel1", id:"2"},
		{txt: "Este es el panel3", rotulo: "Panel1", id:"3"}
	]);

	paneles.on({'add': onChangePanels, 'remove': onChangePanels, 'reset': onChangePanels, 'sort': onChangePanels});

	onChangePanels(null, null);

	},
	ayuda: function () {
		$('body').append("<div id='help'>Test</div>")
		$('#help').click(function(){
			miRouter.navigate('', { trigger: true } );
		});

	},
	muestraPanel: function(id){
		var item = paneles.get(id);
		if(item != undefined){
		  	
	        if(panelView != undefined){
	        	panelView.undelegateEvents();
	        }
	    
	        $('#contenedor').html('');
	        panelView = new PanelView({el: $('#contenedor'), model:item});

		}
	},
	cambiaPaneles: function(id, rotulo){
		var item = paneles.get(id);
		if(item != undefined){
		 	item.set('rotulo', rotulo); 	
	        if(panelView != undefined){
	        	panelView.undelegateEvents();
	        }
	    
	        $('#contenedor').html('');
	        panelView = new PanelView({el: $('#contenedor'), model:item});

		}
	}
});