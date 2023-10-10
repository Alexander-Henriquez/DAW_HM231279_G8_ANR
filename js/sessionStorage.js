document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");
    const guardarBoton = document.getElementById("guardarBoton");

    function cargarDatosGuardados() {
        const datosGuardados = JSON.parse(sessionStorage.getItem("datosFormulario")) || {};
        formulario.nombre.value = datosGuardados.nombre || "";
        formulario.pais.value = datosGuardados.pais || "El Salvador";
        formulario.biografia.value = datosGuardados.biografia || "";
    }

    function guardarDatosEnSessionStorage() {
        const datosFormulario = {
            nombre: formulario.nombre.value,
            pais: formulario.pais.value,
            biografia: formulario.biografia.value
        };

        sessionStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
    }

    function enviarFormulario() {
        formulario.submit();
    }

    guardarBoton.addEventListener("click", function () {
        guardarDatosEnSessionStorage();
        enviarFormulario();
    });

    cargarDatosGuardados();
});

