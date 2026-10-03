const intereses = ["Diseño web", "Videojuegos", "Realidad virtual"];


const formulario = document.querySelector("#formulario-interes");
const inputInteres = document.querySelector("#interes");
const lista = document.querySelector("#lista-intereses");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");
const botonEliminar = document.querySelector("#boton-eliminar");

function mostrarIntereses() {
  let miLista = "";
  for (interes of intereses) {
    miLista += `<li class="collection-item">${interes}</li>`;
};
  contador.textContent = intereses.length;
  lista.innerHTML = miLista;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (inputInteres.value === ""){
    mensaje.textContent = "Agregar algún interés a la lista";
    return;
  }
  mensaje.textContent = `Agregaste ${inputInteres.value} a la lista`;
  intereses.push(inputInteres.value.trim())
  formulario.reset();
  mostrarIntereses();
});

botonEliminar.addEventListener("click", () => {
  if (intereses.length <= 0) {
    mensaje.textContent = "La lista está vacía";
    return;
  }
  mensaje.textContent = `Eliminaste ${intereses.pop()} de la lista`;
  mostrarIntereses();
});

mostrarIntereses();