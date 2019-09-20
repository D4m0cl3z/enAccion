
var fondo= document.getElementById("fondo3");
var amarillo= document.getElementById("amarillo");
var naranja= document.getElementById("naranja");
var rojo= document.getElementById("rojo");
var rosa= document.getElementById("rosa");
var violeta= document.getElementById("violeta");
var azul= document.getElementById("azul");
var celeste= document.getElementById("celeste");
var verde= document.getElementById("verde");
var blanco= document.getElementById("blanco");
var negro= document.getElementById("negro");
var color;
var nuevoFondo;


 amarillo.addEventListener("click",function(){
 let color="#a328a5";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})




naranja.addEventListener("click",function(){
 let color="#7b00a9";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})



rojo.addEventListener("click",function(){
 let color="#0059ff";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})


rosa.addEventListener("click",function(){
 let color="#00a3a2";
 fondo.style.backgroundColor= color;
  colorElegido= color;
})

violeta.addEventListener("click",function(){
 let color="#01d63e";
 fondo.style.backgroundColor= color;
  colorElegido= color;
})

azul.addEventListener("click",function(){
 let color="#ffab00";
 fondo.style.backgroundColor= color;
  colorElegido= color;
})

celeste.addEventListener("click",function(){
 let color="#ff7f00";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})
// color 6

verde.addEventListener("click",function(){
 let color="#ff3701";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})


blanco.addEventListener("click",function(){
 let color="#d3014c";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})


negro.addEventListener("click",function(){
 let color="#a8006d";
 fondo.style.backgroundColor= color;
 colorElegido= color;
})


var botonLink= document.getElementById("botonLink");
var link=document.getElementById("link");


botonLink.addEventListener("click",function(){
 let nuevoFondo= localStorage.setItem("nuevoFondo",colorElegido);
 let nombre= document.getElementById("nombreUsuario").value;
 let nombreUsuario= localStorage.setItem("nombreUsuario",nombre);
 let nuevoEnAccion= document.getElementById("nuevoEnAccion").value;
 let nuevoIntegrante= localStorage.setItem("nuevoEnAccion",nuevoEnAccion);
 let edadUsuario= document.getElementById("edadUsuario").value;

// if (edadUsuario<13){
//  let edad= localStorage.setItem("edadUsuario",edadUsuario);
//  link.href="../ProyectoSANTI/index.html";
// }else if(edadUsuario>18){
//  let edad= localStorage.setItem("edadUsuario",edadUsuario);
//  link.href="../ProyectoSANTI/index.html";
// }else{
//  let edad= localStorage.setItem("edadUsuario",edadUsuario);
//  link.href="../ProyectoSANTI/index.html";
// }

if(edadUsuario<13){
  let edad= localStorage.setItem("edadUsuario",edadUsuario);
  link.href="./preguntas.html";
} else if(edadUsuario=>13 && edadUsuario<18){
  let edad= localStorage.setItem("edadUsuario",edadUsuario);
  link.href="./preguntas.html";
} else {
  let edad= localStorage.setItem("edadUsuario",edadUsuario);
  link.href="./preguntas.html";
}






})

var altura=  window.innerHeight;

fondo.style.height= altura+"px"
