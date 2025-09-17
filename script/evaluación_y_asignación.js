//evaluar
function abrirPanel(nombre, codigo, programa) {
    document.getElementById("panel-evaluacion").style.display = "flex";
    document.getElementById("nombre").textContent = nombre;
    document.getElementById("codigo").textContent = codigo;
    document.getElementById("programa").textContent = programa;
}
function cerrarPanel() {
    document.getElementById("panel-evaluacion").style.display = "none";
}