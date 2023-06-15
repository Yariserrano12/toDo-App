const contenedorTareas = document.querySelector("#tareaInput");
const boton = document.querySelector("#btn-agregar");
var listaTarea = document.querySelector("listaTarea");
var letra = document.querySelector("#letra");
var check = document.querySelector("#check");
let contadorT=0; 
var mensaje = document.querySelector("#mensaje") 



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

    eliminar.addEventListener("click", function() {
      if (listaTarea) {
        listaTarea.removeChild(listaTarea)
      }
    }) 

    

    contenedorTareas.value = "";

    inputC.addEventListener("click",function () {
      if (inputC.checked) {
       
       contadorT=contadorT+1
     
       letra.innerHTML=contadorT
    

      }else{
        
       contadorT=contadorT-1; 
          letra.innerHTML=contadorT
        
      }
      
    })
    
  
 

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























