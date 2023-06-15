const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
var listaTarea = document.querySelector("listaTarea");


function agregarTarea() {

  let tarea = contenedorTareas.value;

  if (!tarea == "") {
    
    let texto = document.createElement("p");
    texto.id = "arreglartexto"
    
    let inputC = document.createElement("input")
    inputC.id = "arreglarcheck"
    inputC.setAttribute("type", "checkbox")
  
    let eliminar = document.createElement("button")
    eliminar.id = "arreglarboton"
    eliminar.textContent = "Eliminar";
  
  
    texto.innerHTML = tarea;
    let tabla = document.getElementById("listaTarea")
    tabla.appendChild(texto)
    tabla.appendChild(inputC)
    tabla.appendChild(eliminar)

    contenedorTareas.value = "";

  }else{
    alert("Ingrese una tarea válida");
  }

}



boton.addEventListener("click", agregarTarea);

contenedorTareas.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  }

})

function remove_child() {
  var list = document.getElementById('listaTarea');
  var item = listaTarea
  listaTarea.removeChild(item);
}


















