window.onload = function(){
  var startButton = document.querySelector('.startButton');
  var stopButton = document.querySelector('.stopButton');
  var container = document.querySelector('.reloj-container');
  var resetButton = document.querySelector('.resetButton')

  var contador;
  var seg = 1;
  startButton.onclick = function(){
  contador = setInterval(function(){

    container.innerHTML = seg++

  },1000)}

  stopButton.onclick = function(){
    clearInterval(contador);
  }

  resetButton.onclick = function(){
    container.innerHTML = 0
    seg = 1
  }
}
