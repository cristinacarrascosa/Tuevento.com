//'use strict'

// VARIABLES
// Botones
const btnNext1 = document.getElementById('btnNext1');
const btnNext2 = document.getElementById('btnNext2');
const btnToBook = document.getElementById('btnToBook');
const btnDelete1 = document.getElementById('btnDelete1');
const btnDelete2 = document.getElementById('btnDelete2');
const btnDelete3 = document.getElementById('btnDelete3');
const btnDatosPers = document.getElementById('btnDatosPers');
const btnEspacios = document.getElementById('btnEspacios');

//div
const formDatosPers = document.getElementById('div-datos-personales');
const formEspacio = document.getElementById('div-espacio');
const formGastronomia = document.getElementById('div-gastronomia');

// VARIABLES PARA CAMPOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const espacio = document.querySelector('#lista-espacio');
const fecha = document.querySelector('#fecha-reserva');
const hora = document.querySelector('#hora-reserva');

eventListeners();

// FUNCIONES
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Botón de 'Siguiente'
    btnNext1.addEventListener('click', validarFormDatosPers);
    btnNext2.addEventListener('click', validarFormEspacios);

    // Botones de 'Borrar'
    btnDelete1.addEventListener('click', resetFormDatosPers);
    btnDelete2.addEventListener('click', resetFormEspacio);
    btnDelete3.addEventListener('click', resetFormGastronomia);

}

function iniciarApp() {
    // Inicio de la aplicación y oculta los div de formEspacio y formGastronomía
    formEspacio.style.display = 'none';
    formGastronomia.style.display = 'none';
}

// FUNCIÓN: Validación formulario de Datos Personales
function validarFormDatosPers() {
    if (!validarNomApe(nombreApellidos.value)) {
        alert('ERROR: Nombre y apellidos');
    } else if (!validarEmail(email.value)) {
        alert('ERROR: Email no es correcto.');
    } else if (!validarNumTlf(movil.value)) {
        alert('ERROR: El número de móvil no es correcto.')
    } else {
        formEspacio.style.display = '';
        btnDatosPers.style.display = 'none';
    }
}

// FUNCIÓN: Validación formulario de Espacio
function validarFormEspacios() {
    if (espacio.value === 'selecciona') {
        alert('ERROR: Selecciona un espacio.');
    } else if (fecha.value === '') {
        alert('ERROR: Elige una fecha.')
    } else if (hora.value === '') {
        alert('ERROR: Elige una hora.')
    } else {
        formGastronomia.style.display = '';
        btnEspacios.style.display = 'none';
    }

    validarFormDatosPers();

}


// Comprueba que el num. de movil empieza por 6, 7 o 9 y tiene 9 numeros.
function validarNumTlf(numTlf) {
    var str = numTlf.toString().replace(/\s/g, '');
    return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str);
}

// Comprueba que nombre y apellidos tienen mas de 3 letras.
function validarNomApe(nomApe) {
    return nomApe.length > 3;
}

// Comprueba que email es valido
function validarEmail(correo) {
    return er.test(correo);
}

// Comprueba la fecha es despues del dia hoy
/* function testDate(date) {
    
} */



// Reset formulario de datos personales.
function resetFormDatosPers() {
    document.querySelector("#form-datos-personales").reset();
}

// Reset formulario de espacio.
function resetFormEspacio() {
    document.querySelector("#form-espacio").reset();
}

// Reset formulario de gastronomía
function resetFormGastronomia() {
    document.querySelector("#form-gastronomia").reset();
}