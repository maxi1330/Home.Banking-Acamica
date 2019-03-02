//Declaración de variables
let nombreUsuario = "Maximiliano";
let saldoCuenta = 10000;
let limiteExtraccion = 3000;
let codigoVerificacion = 1234;

//Costo de servicios
let costoAgua = 350;
let costoTelefono = 350;
let costoLuz = 210;
let costoInternet = 570;

//Cuentas amigas
let cuentaAmiga01 = 1234567;
let cuentaAmiga02 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    let limiteExtraccionIngresado = parseInt(prompt("Ingrese nuevo limite de extraccion."));
    if (limiteExtraccionIngresado != null && limiteExtraccionIngresado != "") {
        limiteExtraccion = limiteExtraccionIngresado;
        actualizarLimiteEnPantalla()
        alert("Nuevo limite de extraccion: $" + limiteExtraccion);
    }
}

function extraerDinero() {
    let SaldoAExtraer = prompt("Ingrese saldo a extraer.");
    if (SaldoAExtraer != null && SaldoAExtraer != "") {
        SaldoAExtraer = parseInt(SaldoAExtraer);
        if (noSuperaLimiteDeExtraccion(SaldoAExtraer)) {
            if (hayDineroSuficiente(SaldoAExtraer)) {
                if (multipoDe100(SaldoAExtraer)) {
                    descontarDinero(SaldoAExtraer);
                    alert("Saldo a extraer: $" + SaldoAExtraer +
                        "\nNuevo saldo: $" + saldoCuenta);
                } else {
                    alert("Debe ingresar un monto multiplo de 100.");
                }
            } else {
                alert("No hay suficiente dinero en la cuenta para realizar esta operacion.");
            }
        } else {
            alert("El monto ingresado excede el limite de extraccion." +
                "\nLimite de extraccion: $" + limiteExtraccion);
        }
    }
}

function descontarDinero(SaldoAExtraer) {
    saldoCuenta = saldoCuenta - SaldoAExtraer;
    actualizarSaldoEnPantalla();
}

function sumarDinero(SaldoAIngresar){
    saldoCuenta = saldoCuenta + SaldoAIngresar;
    actualizarSaldoEnPantalla();
}

function noSuperaLimiteDeExtraccion(valor) {
    return valor <= limiteExtraccion;
}

function hayDineroSuficiente(valor) {
    return valor <= saldoCuenta;
}

function multipoDe100(valor) {
    return valor % 100 === 0;
}

function depositarDinero() {
    let SaldoAIngresar = prompt("Ingrese saldo a depositar.");
    if (SaldoAIngresar != null && SaldoAIngresar != "") {
        SaldoAIngresar = parseInt(SaldoAIngresar);
        sumarDinero(SaldoAIngresar);
        alert("Saldo a Depositar: $" + SaldoAIngresar +
              "\nNuevo saldo: $" + saldoCuenta);
    }
}

function pagarServicio() {
    let servicioAPagar = prompt("Ingrese numero que corresponda con el servicio que desea pagar.\n" +
        "1. Agua\n" +
        "2. Telefono\n" +
        "3. Luz\n" +
        "4. Internet");

    if (servicioAPagar != null && servicioAPagar != "") {
        switch (servicioAPagar) {
            case 1:
                if (hayDineroSuficiente(costoAgua)) {
                    let saldoAnterior = saldoCuenta;
                    descontarDinero(costoAgua);
                    alert("Has pagado el servicio de Agua.\n" +
                        "\nSaldo a anterior: $" + saldoAnterior +
                        "\nSaldo descontado: $" + costoAgua +
                        "\nSaldo actual: $" + saldoCuenta);
                } else {
                    alert("No hay suficiente dinero para pagar este servicio");
                }
                break;
            case 2:
                if (hayDineroSuficiente(costoTelefono)) {
                    let saldoAnterior = saldoCuenta;
                    descontarDinero(costoTelefono);
                    alert("Has pagado el servicio de Telefono.\n" +
                        "\nSaldo a anterior: $" + saldoAnterior +
                        "\nSaldo descontado: $" + costoTelefono +
                        "\nSaldo actual: $" + saldoCuenta);
                } else {
                    alert("No hay suficiente dinero para pagar este servicio");
                }
                break;
            case 3:
                if (hayDineroSuficiente(costoLuz)) {
                    let saldoAnterior = saldoCuenta;
                    descontarDinero(costoLuz);
                    alert("Has pagado el servicio de Luz.\n" +
                        "\nSaldo a anterior: $" + saldoAnterior +
                        "\nSaldo descontado: $" + costoLuz +
                        "\nSaldo actual: $" + saldoCuenta);
                } else {
                    alert("No hay suficiente dinero para pagar este servicio");
                }
                break;
            case 4:
                if (hayDineroSuficiente(costoInternet)) {
                    let saldoAnterior = saldoCuenta;
                    descontarDinero(costoInternet);
                    alert("Has pagado el servicio de Internet.\n" +
                        "\nSaldo a anterior: $" + saldoAnterior +
                        "\nSaldo descontado: $" + costoInternet +
                        "\nSaldo actual: $" + saldoCuenta);
                } else {
                    alert("No hay suficiente dinero para pagar este servicio");
                }
                break;
            default:
                alert("El servicio elegido no existe.");
        }
        actualizarSaldoEnPantalla();
    }
}

function transferirDinero() {
    let montoAtrasferir = prompt("Ingrese monto a transferir.");
    if (montoAtrasferir != null && montoAtrasferir != "") {
        if (hayDineroSuficiente(montoAtrasferir)) {
            let cuantaATransferir = parseInt(prompt("Ingrese el numero de cuenta a la que desea transferir dinero"));
            if (cuantaATransferir === cuentaAmiga01 || cuantaATransferir === cuentaAmiga02) {
                alert("Monto a transferir $" + montoAtrasferir + "\n" +
                    "Cuenta destino nro: " + cuantaATransferir);
                descontarDinero(montoAtrasferir);
            } else {
                alert("Solo puedes transferir dinero a cuentas amigas");
            }
        }
    }
}

function iniciarSesion() {
    let codigoVerificacionIngresado = parseInt(prompt("Ingrese su código de verificación. La clave es 1234"));
    if (codigoVerificacionIngresado === codigoVerificacion) {
        alert("Bienvenido " + nombreUsuario + ", ya puedes comenzar a realizar tus operaciones.");
    } else {
        saldoCuenta = 0;
        nombreUsuario = " - - - - - -";
        alert("Clave incorrecta.\n" +
              "Se ha bloqueado el dinero por seguridad.");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}