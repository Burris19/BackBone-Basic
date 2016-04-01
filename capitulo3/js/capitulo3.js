$(document).ready(function(){
    $("#create_button").click(function(){        
       /*var panel1 = new Panel();
       var panel2 = new Panel();
       panel1.propInstancia = 'nuevo valor';
       window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
       window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);
       Panel.propEstatica = 'nuevo valor estatico';
       window.trace(panel1.propInstancia + ' ' + Panel.propEstatica);
       window.trace(panel2.propInstancia + ' ' + Panel.propEstatica);*/

       var panel = new Panel({txt: 'este es el nuevo panel', rotulo: 'Mi panel'});
       

    });
    
    
});

//función que escribe un mensaje en la consola
window.trace = function trace(msg){
    $("#consola").append(msg+"<br>");
    console.log(msg);
}







