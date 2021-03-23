"use strict"
let bolita = document.querySelector(".bolita");
let sombra = document.querySelector(".sombra");
document.onmousemove = () => {
    let x = event.clientX * 100 / window.innerWidth / 1.7 + "%"  ;
    bolita.style.left = x;
    let y = event.clientY * 100 / window.innerHeight / 1.5 + "%";
    bolita.style.top = y;
    sombra.style.left = x;
    sombra.style.top = y;
}