
//Resalta en rojo la opción cuyo id se recibe por parámetro
function resaltarOpcion(nombreOpcion){
    document.getElementById(nombreOpcion).style.color = "red";
}

//Elimina el resaltado de la opción cuyo id se recibe por parámetro
function resetearOpcion(nombreOpcion){
    document.getElementById(nombreOpcion).style.color = "black";
}


function ocultarExperienciaLaboral() {
    // If the checkbox is checked, display the output text
    if (document.getElementById("experienciaLaboral").checked == true){
        document.getElementById("verMas").style.display = "block";
    } else {
        document.getElementById("verMas").style.display = "none";
    }
  }