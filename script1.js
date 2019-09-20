

var colorFondo= localStorage.getItem("nuevoFondo");

var background= document.getElementById("fondoPreguntas");

background.style.backgroundColor= colorFondo;

var nombreUsuario= localStorage.getItem("nombreUsuario");
var nuevoEnAccion= localStorage.getItem("nuevoEnAccion");
var edadUsuario= localStorage.getItem("edadUsuario");



var altura=  window.innerHeight

background.style.height= altura+"px"

if (edadUsuario<13){



//acá escribo las preguntas para los niños



let pregunta1ninio= document.getElementById("pregunta1ninio");
pregunta1ninio.textContent="Hola "+nombreUsuario+", puedes responder esta pregunta? bla bla bla, eres de EnAcci\u00f3n: "+nuevoEnAccion + ", y tienes: "+ edadUsuario+ " a\u00f1os";






}else if(edadUsuario>18){





//acá escribo las preguntas para los adultos

let pregunta1adulto= document.getElementById("pregunta1adulto");
pregunta1adulto.textContent="Hola "+nombreUsuario+", puedes responder esta pregunta? bla bla bla, eres de EnAcci\u00f3n: "+nuevoEnAccion + ", y tienes: "+ edadUsuario+ " a\u00f1os";






}else{



//acá escribo las preguntas para los adolescentes



let pregunta1adolescente= document.getElementById("pregunta1adolescente");
pregunta1adolescente.textContent="Hola "+nombreUsuario+", puedes responder esta pregunta? bla bla bla, eres de EnAcci\u00f3n: "+nuevoEnAccion + ", y tienes: "+ edadUsuario+ " a\u00f1os";





}

