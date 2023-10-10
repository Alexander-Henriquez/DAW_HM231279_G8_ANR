document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");
    const guardarBoton = document.getElementById("guardarBoton");

    function cargarDatosGuardados() {
        const datosGuardados = JSON.parse(localStorage.getItem("datosFormulario")) || {};
        formulario.nombre.value = datosGuardados.nombre || "";
        formulario.pais.value = datosGuardados.pais || "Costa Rica";
        formulario.biografia.value = datosGuardados.biografia || "";
    }

    function guardarDatosEnLocalStorage() {
        const datosFormulario = {
            nombre: formulario.nombre.value,
            pais: formulario.pais.value,
            biografia: formulario.biografia.value
        };

        localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
    }

    function enviarFormulario() {
        formulario.submit();
    }

    guardarBoton.addEventListener("click", function () {
        guardarDatosEnLocalStorage();
        enviarFormulario();
    });

    cargarDatosGuardados();
});
