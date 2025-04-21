function posicionarMenuNoFinal() {
  const menu = document.querySelector(".menuBotton");
  const alturaJanela = window.innerHeight;
  menu.style.top = (alturaJanela - menu) + "px";
}

window.addEventListener("load", posicionarMenuNoFinal);
window.addEventListener("resize", posicionarMenuNoFinal);

console.log(window.innerWidth);
console.log(window.innerHeight);

///  PAGINA DE LOCALIZACAO

let pergunta = document.querySelector('.pergunta')

let btnSim = document.querySelector('#sim');
btnSim.addEventListener('click', dpNone());

function dpNone(){
  pergunta.style.cssText = "display:none;"
  console.log('click');
  
}
