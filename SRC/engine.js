function posicionarMenuNoFinal() {
    const menu = document.querySelector(".menuBotton");
    const alturaJanela = window.innerHeight;
    menu.style.top = (alturaJanela - menu) + "px";
  }
  
  window.addEventListener("load", posicionarMenuNoFinal);
  window.addEventListener("resize", posicionarMenuNoFinal);

console.log(window.innerWidth);
console.log(window.innerHeight);

  