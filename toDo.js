const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");

boton.addEventListener("click", function () {
  let tarea = contenedorTareas.value;

  let texto = document.createElement("p");

  texto.innerHTML = tarea;

  document.getElementById("listaTarea").appendChild(texto);
});





const enter= listaTarea 
