const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
var listaTarea= document.querySelector("listaTarea");


function agregarTarea() {
  
  let tarea = contenedorTareas.value;

  let texto = document.createElement("p");
  texto.id = "arreglartexto"
  let inputC= document.createElement("input") 
  inputC.id = "arreglar check"
  inputC.setAttribute("type", "checkbox") 
  
  let eliminar = document.createElement("button") 
  eliminar.id = "arreglar boton"

  eliminar.textContent="Eliminar";

 console.log (eliminar)



  texto.innerHTML = tarea;
  

  

let tabla= document.getElementById("listaTarea")
tabla.appendChild(texto)
tabla.appendChild(inputC)
tabla.appendChild(eliminar)



  contenedorTareas.value = ""; 


}; 


boton.addEventListener("click",agregarTarea);

contenedorTareas.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  }  



}) 




















