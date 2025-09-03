const titulo = document.getElementById("tituloPrincipal");
let estadoOriginal = true;

titulo.innerText = "Esta es la historia...";

titulo.addEventListener("click", () => {
if(estadoOriginal === true) {
    titulo.innerText = "de una tortuga";
    titulo.style.color = "green";
}

else {
    titulo.innerText = "Esta es la historia";
    titulo.style.color = "black";
}

estadoOriginal = !estadoOriginal;
});
 
