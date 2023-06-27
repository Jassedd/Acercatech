/* ANIMAION DE CAMBIO DE COLOR DE HEADER */

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

/* FUNCION DE ABRIR Y CERRAR EL MENU HAMBURGUESA */

const ul  = document.querySelector("#nav__lista");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    ul .classList.add("visible");
})

cerrar.addEventListener("click", () => {
    ul .classList.remove("visible");
})