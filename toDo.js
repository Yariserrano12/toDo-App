const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
var ul= document.querySelector("ul");
var empty= document.querySelector("empty");

function agregarTarea() {
  let tarea = contenedorTareas.value;

  let texto = document.createElement("p");

  texto.innerHTML = tarea;

  document.getElementById("listaTarea").appendChild(texto);

  contenedorTareas.value = "";
};


boton.addEventListener("click",agregarTarea);

contenedorTareas.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") {
    event.preventDefault();
    agregarTarea();
  } 


}) 
const li= document.createElement("li") 
const p= document.createElement("p") 
p.textContent 
li.appendChild(p) 
ul.appendChild("li") 
li.appendChild(addDeleteBtn());

function addDeleteBtn( ) { 
  const deleteBtn= document.createElement("button")  
  deleteBtn.textContent = "X";
  deleteBtn.className= "btn-delete"; 

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

  } ) 
  return deleteBtn
  
}









