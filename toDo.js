const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
let listaTarea = document.querySelector("#listaTarea");
let letra = document.querySelector("#letra");
let check = document.querySelector("#check");
let contadorT = 0;
let mensaje = document.querySelector("#mensaje");

function agregarTarea() {
  let tarea = contenedorTareas.value;

  let tareaLi = document.createElement("li");

  let texto = document.createElement("p");
  texto.id = "arreglartexto";

  let inputC = document.createElement("input");
  inputC.id = "arreglarcheck";
  inputC.setAttribute("type", "checkbox");

  let eliminar = document.createElement("button");
  eliminar.id = "arreglarboton";
  eliminar.textContent = "Eliminar";

  texto.innerHTML = tarea;
  tareaLi.appendChild(texto);
  tareaLi.appendChild(inputC);
  tareaLi.appendChild(eliminar);

  let tabla = document.getElementById("listaTarea");
  tabla.appendChild(tareaLi);

  eliminar.addEventListener("click", (e) => {
    let listaT = document.getElementById("listaTarea");
    const i = e.target.parentElement;
    listaT.removeChild(i);
  });

  contenedorTareas.value = "";

  inputC.addEventListener("click", function () {
    if (inputC.checked) {
      contadorT = contadorT + 1;

      letra.innerHTML = contadorT;
    } else {
      contadorT = contadorT - 1;
      letra.innerHTML = contadorT;
    }
  });

  if (!tarea == "") {
  } else {
    alert("Ingrese una tarea válida");
  }
}

boton.addEventListener("click", agregarTarea);

contenedorTareas.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  }
});
