
document.addEventListener("DOMContentLoaded", function () {

    // CAPTURAR EL BOTON
    const botonCalcular = document.getElementById("btn-calcular");

    botonCalcular.addEventListener("click", function () {

        // 1. OBTENER LOS DATOS DEL FORMULARIO

        const selectPelicula = document.getElementById("pelicula");

        const precioPelicula = Number(selectPelicula.value);

        const inputCantidad = document.getElementById("cantidad");

        const cantidad = Number(inputCantidad.value);

        // REQUISITO JS 1: CAPTURAR EL ASIENTO SELECCIONADO
        const asientoSeleccionado = document.querySelector(
            'input[name="asiento"]:checked'
        );

        const mensajeAlerta = document.getElementById("mensaje-alerta");

        // 2. VALIDAR LOS DATOS

        if (
            selectPelicula.value === "" ||
            !Number.isInteger(cantidad) ||
            cantidad <= 0
        ) {

            mensajeAlerta.textContent =
                "Por favor, selecciona una película y una cantidad válida de boletos.";

            mensajeAlerta.classList.remove("oculto");

            return;
        }

        mensajeAlerta.classList.add("oculto");

        // 3. CALCULAR EL SUBTOTAL DE BOLETOS

        let subtotalBoletos = precioPelicula * cantidad;

        // REQUISITO JS 2: CALCULAR EL CARGO DEL ASIENTO VIP

        let cargosAsiento = 0;

        if (
            asientoSeleccionado &&
            asientoSeleccionado.value === "vip"
        ) {

            cargosAsiento = 50 * cantidad;

        } else {

            cargosAsiento = 0;

        }

        // 4. CAPTURAR LOS COMBOS

        let totalSnacks = 0;

        const comboPalomitas = document.getElementById("combo-palomitas");

        const comboHotdog = document.getElementById("combo-hotdog");

        // REQUISITO JS 3: CAPTURAR EL COMBO PAREJA
        const comboPareja = document.getElementById("combo-pareja");

        // 5. SUMAR LOS COMBOS SELECCIONADOS

        if (comboPalomitas.checked) {

            totalSnacks += Number(comboPalomitas.value);

        }

        if (comboHotdog.checked) {

            totalSnacks += Number(comboHotdog.value);

        }

        // REQUISITO JS 4: SUMAR EL COMBO PAREJA

        if (comboPareja.checked) {

            totalSnacks += Number(comboPareja.value);

        }

        // 6. CALCULAR EL TOTAL FINAL

        let totalFinal =
            subtotalBoletos + cargosAsiento + totalSnacks;

        // 7. MOSTRAR LOS RESULTADOS EN PANTALLA

        document.getElementById("resumen-boletos").textContent =
            "$" + subtotalBoletos.toFixed(2) + " MXN";

        document.getElementById("resumen-asiento").textContent =
            "$" + cargosAsiento.toFixed(2) + " MXN";

        document.getElementById("resumen-snacks").textContent =
            "$" + totalSnacks.toFixed(2) + " MXN";

        document.getElementById("total-pagar").textContent =
            "$" + totalFinal.toFixed(2) + " MXN";

    });

});
