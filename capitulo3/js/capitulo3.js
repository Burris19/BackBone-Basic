$(document).ready(function(){
    $("#create_button").click(function(){        
       var panel = new Panel();
       window.trace(panel.nombre)
    });
    
    
});

//función que escribe un mensaje en la consola
window.trace = function trace(msg){
    $("#consola").append(msg+"<br>");
    console.log(msg);
}







