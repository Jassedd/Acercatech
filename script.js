window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})


const ul = document.querySelector("#nav__lista");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    ul.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    ul.classList.remove("visible");
})