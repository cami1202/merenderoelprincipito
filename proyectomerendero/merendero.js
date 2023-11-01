document.addEventListener("DOMContentLoaded", function () {
    const pantallaprincipal = document.querySelector(".pantallaprincipal");
    const botonVerMas = document.getElementById("verMasButton");
    const body = document.body;

    const secciones = document.querySelectorAll("header, main, footer");

    botonVerMas.addEventListener("click", function () {
        pantallaprincipal.classList.add("fade-out");

        setTimeout(function () {
            pantallaprincipal.style.display = "none";

            secciones.forEach((seccion) => {
                seccion.style.display = "block";
            });

            body.style.overflowY = "visible";
        }, 1000);
    });
});
