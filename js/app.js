let secciones = document.querySelectorAll(".seccion");

function mostrarSeccion(id) {
    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });
    document.getElementById(id).classList.add("activa");
}
