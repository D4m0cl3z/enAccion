var preguntas=[6];
var OR=[6];
var i=0;
var res;

function preguntas_niños(){
  preguntas[0]="¿Qué colores representan a EnAcción?";
  preguntas[1]="¿Qué estamos festejando hoy?";
  preguntas[2]="¿Cómo se llama la hija menor de Homero Simpson?";
  preguntas[3]="¿Quién es tu primo?";
  preguntas[4]="¿Cuantos hijitos tiene Shrek?";
    preguntas[5]="¿nada?"

  OR[0]={
    opciones:["Rojo, Amarillo y Blanco","Verde, Blanco y Rojo","Negro, Rojo y Blanco","Blanco, Amarillo y Azul"],
    respuestas:[true,false,false,false]
  }

  OR[1]={
    opciones:["El día domingo","El día feliz","Que ganó el Barcelona","El día del niño"],
    respuestas:[false,false,false,true]
  }

  OR[2]={
    opciones:["Marge","Lisa","Maggie","Bart"],
    respuestas:[false,false,true,false]
  }

  OR[3]={
    opciones:["El hijo del hermano de mi padre","Mi hijo","Mi padre","El hermano de mi padre"],
    respuestas:[true,false,false,false]
  }

  OR[4]={
    opciones:["4","15","3","1"],
    respuestas:[false,false,true,false]
  }
  OR[5]={
    opciones:["n1","n2","N3","n4"],
    respuestas:[true,false,false,false]
  }
}

function preguntas_adolescentes(){
  preguntas[0]="¿cuál es el horizonte de EnAcción?";
  preguntas[1]="¿Qué áreas ofrece EnAcción?";
  preguntas[2]="¿Por qué se festeja el día del niño?";
  preguntas[3]="EnAcción es parte de...";
  preguntas[4]="Si un tren electrico va al norte ¿Hacia dónde va el humo?";
      preguntas[5]="¿nada1?"

  OR[0]={
    opciones:["Ganar dinero","Fortalecer el desarrollo personal y comunitario","Capacitar personas","Competir profesionalmente en el fútbol"],
    respuestas:[false,true,false,false]
  }

  OR[1]={
    opciones:["Arte y cultura","Educación y deporte","Las primeras son correctas","Ninguna es correcta"],
    respuestas:[false,false,true,false]
  }

  OR[2]={
    opciones:["Para conmemorar la declaración de los derechos del niño","Porque hay muchos niños","Por el fallecimiento de muchos niños","Por una catástrofe que afectó a los niños"],
    respuestas:[true,false,false,false]
  }

  OR[3]={
    opciones:["La municipalidad de Malvinas","Fundación Actuar Hoy","Grand Bourg","Un ente privado"],
    respuestas:[false,true,false,false]
  }

  OR[4]={
    opciones:["Hacia el sur","Hacia donde sople el viento","Hacia todos lados","No hay humo"],
    respuestas:[false,false,false,true]
  }

  OR[5]={
    opciones:["b1","b2","b3","b4"],
    respuestas:[true,false,false,false]
  }
}

function preguntas_adultos(){
  preguntas[0]="¿Desde cuándo empezó EnAcción?";
  preguntas[1]="¿En qué año se inauguró El Campito?";
  preguntas[2]="¿Desde cuándo se festeja el día del niño?";
  preguntas[3]="¿Cuántas esposas tuvo Homero Simpson?";
  preguntas[4]="¿Cuántos meses tienen 28 días?";
      preguntas[5]="¿nada3?"

  OR[0]={
    opciones:["1998","2000","1950","1978"],
    respuestas:[true,false,false,false]
  }

  OR[1]={
    opciones:["2015","2017","2010","2014"],
    respuestas:[false,false,false,true]
  }

  OR[2]={
    opciones:["1898","1956","1856","1930"],
    respuestas:[false,true,false,false]
  }

  OR[3]={
    opciones:["2","1","3","ninguna"],
    respuestas:[true,false,false,false]
  }

  OR[4]={
    opciones:["solo 1","febrero","todos","ninguno"],
    respuestas:[false,false,true,false]
  }

    OR[5]={
      opciones:["c1","c2","c3","c4"],
      respuestas:[true,false,false,false]
    }
}
var edad=Number(localStorage.getItem("edadUsuario"));
if (edad<13){
 preguntas_niños();
}else if(edad>18){
 preguntas_adolescentes();
}else{
 preguntas_adultos();
}

if(typeof(Storage)!=="undefined"){
  //alert("El navegador soporta web storage");
  if(!sessionStorage.getItem("contador")){
    sessionStorage.setItem("contador","1");
  }
    document.getElementById("contador").innerHTML = "Pregunta n°:"+sessionStorage.getItem("contador");

    if(!sessionStorage.getItem("correctas")){
      sessionStorage.setItem("correctas","0");
    }
      document.getElementById("correctas").innerHTML = "correctas :"+sessionStorage.getItem("correctas");

}else{
  alert("El navegador no soporta web storage");
}

i=Number(sessionStorage.getItem("contador"))-1;



console.log(OR[1].opciones[1]);

//RELLENO EL H1
var h1=document.querySelector("h1");
h1.textContent=preguntas[i];

//RELLENO LOS BOTONES
var b1=document.querySelector("#b1");
b1.textContent=OR[i].opciones[0];

var b2=document.querySelector("#b2");
b2.textContent=OR[i].opciones[1];

var b3=document.querySelector("#b3");
b3.textContent=OR[i].opciones[2];

var b4=document.querySelector("#b4");
b4.textContent=OR[i].opciones[3];

//OBTENER LAS RESPUESTAS

b1.addEventListener("click", function(){
  res=b1.textContent;
  var num = Number(sessionStorage.getItem("contador"));
  num=num+1;
  var cantidad = Number(preguntas.length);


  if(validar(res)){
    b1.style.backgroundColor="green";
    cor++;
    sessionStorage.setItem("correctas",cor);
    document.querySelector("#cartel1").textContent= "correctas :"+cor;
  }else{
    b1.style.backgroundColor="red";
    b1.setAttribute('data-target',"#exampleModalCenter2");
      document.querySelector("#cartel2").textContent= "correctas  :"+cor+ "       La respuesta correcta es:  " + respcor();
  }

  if(num>cantidad){
    num=1;
    cor=0;
    sessionStorage.setItem("correctas",cor);
  }
  sessionStorage.setItem("contador",num);
});

b2.addEventListener("click", function(){
  res=b2.textContent;
  var num = Number(sessionStorage.getItem("contador"));
  num=num+1;
  var cantidad = Number(preguntas.length);


  if(validar(res)){
    b2.style.backgroundColor="green";
    cor++;
    sessionStorage.setItem("correctas",cor);
    document.querySelector("#cartel1").textContent= "correctas :"+cor;
  }else{
    b2.style.backgroundColor="red";
    b2.setAttribute('data-target',"#exampleModalCenter2");
    document.querySelector("#cartel2").textContent= "correctas  :"+cor+ "       La respuesta correcta es:  " + respcor();
  }

  if(num>cantidad){
    num=1;
    cor=0;
    sessionStorage.setItem("correctas",cor);
  }
  sessionStorage.setItem("contador",num);
});

b3.addEventListener("click", function(){
  res=b3.textContent;
  var num = Number(sessionStorage.getItem("contador"));
  num=num+1;
  var cantidad = Number(preguntas.length);


  if(validar(res)){
    b3.style.backgroundColor="green";
    cor++;
    sessionStorage.setItem("correctas",cor);
    document.querySelector("#cartel1").textContent= "correctas :"+cor;
  }else{
    b3.style.backgroundColor="red";
    b3.setAttribute('data-target',"#exampleModalCenter2");
    document.querySelector("#cartel2").textContent= "correctas  :"+cor+ "       La respuesta correcta es:  " + respcor();
  }

  if(num>cantidad){
    num=1;
    cor=0;
    sessionStorage.setItem("correctas",cor);
  }
  sessionStorage.setItem("contador",num);
});

b4.addEventListener("click", function(){
  res=b4.textContent;
  var num = Number(sessionStorage.getItem("contador"));
  num=num+1;
  var cantidad = Number(preguntas.length);

  if(validar(res)){
    b4.style.backgroundColor="green";
    cor++;
    sessionStorage.setItem("correctas",cor);
    document.querySelector("#cartel1").textContent= "correctas :"+cor;
  }else{
    b4.style.backgroundColor="red";
    b4.setAttribute('data-target',"#exampleModalCenter2");
    document.querySelector("#cartel2").textContent= "correctas  :"+cor+ "       La respuesta correcta es:  " + respcor();
  }

  if(num>cantidad){
    num=1;
    cor=0;
    sessionStorage.setItem("correctas",cor);
  }
  sessionStorage.setItem("contador",num);

});
//VALIDA RESPUESTA CORRECTA
var validar = function(res){
  var pos;
  for (var x = 0; x <= 3; x++) {
    if(OR[i].opciones[x]==res){
      return OR[i].respuestas[x];
    }
  }
}

//CAMBIA EL VALOR DE LA PREGUNTA SI ES CORRECTA
var ac=document.querySelector("#ac");


var cor = Number(sessionStorage.getItem("correctas")); //RESPUESTAS CORRECTAS

ac.addEventListener("click", function(){

  setTimeout(location.href="", 5000);
});

//CAMBIA EL VALOR DE LAS PREGUNTAS SI ES INCORRECTA

var ai=document.querySelector("#ai");

ai.addEventListener("click", function(){
  setTimeout(location.href="", 5000);
});

function respcor()
{
  var respuesta_correcta ="";
  for(var x=0;x<4;x++)
  {
    if(OR[i].respuestas[x]==true){
      respuesta_correcta = OR[i].opciones[x];
    }
  }
  return respuesta_correcta;
}


var num = Number(sessionStorage.getItem("contador"));
if(num==6){
  document.location.href = "cuarta.html";
}
