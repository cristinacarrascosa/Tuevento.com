// IAN MOLINA


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
const btnBack2 = document.getElementById('btnBack2');
const btnBack3 = document.getElementById('btnBack3');



//div
const formDatosPers = document.getElementById('div-datos-personales');
const formEspacio = document.getElementById('div-espacio');
const formGastronomia = document.getElementById('div-gastronomia');

// VARIABLES PARA CAMPOS DE FORMULARIOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const espacio = document.querySelector('#lista-espacio');
const fecha = document.querySelector('#fecha-reserva');
const hora = document.querySelector('#hora-reserva');

const checkBoxApertivos = document.querySelector('#checkboxApertivos');
const checkBox1Platos = document.querySelector('#checkbox1platos');
const checkBoxPostres = document.querySelector('#checkboxPostres');
const checkBoxCeliaco = document.querySelector('#checkboxCeliaco');
const checkBoxNinyos = document.querySelector('#checkboxNinyos');


eventListeners();

// FUNCIONES
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Botón de 'Siguiente'
    btnNext1.addEventListener('click', validarFormDatosPers);
    btnNext2.addEventListener('click', validarFormEspacios);
    btnToBook.addEventListener('click', validarFormGastronomia);

    // Botones de 'Borrar'
    btnDelete1.addEventListener('click', resetFormDatosPers);
    btnDelete2.addEventListener('click', resetFormEspacio);
    btnDelete3.addEventListener('click', resetFormGastronomia);

    // Botones de 'Volver'
    btnBack2.addEventListener('click', backDatosPersonales);
    btnBack3.addEventListener('click', backEspacio);
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
        document.getElementById('nombreApellidos').disabled = true;
        document.getElementById('email').disabled = true;
        document.getElementById('movil').disabled = true;
        recopilarDatosPers();
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
        document.getElementById('lista-espacio').disabled = true;
        document.getElementById('fecha-reserva').disabled = true;
        document.getElementById('hora-reserva').disabled = true;
        recopilarEspacio();
    }
}

// FUNCIÓN: Validación formulario de Gastronomía ()
function validarFormGastronomia() {

    if (validarApertivos() === true && validar1Platos() === true && validarPostres() === true) {
        console.log('RESERVADO');
        recopilarGastronomia();
    }

}

// FUNCIÓN: Volver div a datos personales
function backDatosPersonales() {
    formEspacio.style.display = 'none';
    btnDatosPers.style.display = '';
    document.getElementById('nombreApellidos').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('movil').disabled = false;
}

// FUNCIÓN: Volver div a espacio
function backEspacio() {
    formGastronomia.style.display = 'none';
    btnEspacios.style.display = '';
    document.getElementById('lista-espacio').disabled = false;
    document.getElementById('fecha-reserva').disabled = false;
    document.getElementById('hora-reserva').disabled = false;
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


// FUNCIÓN: Comprueba si al menos un checkbok seleccianado APERTIVOS
function validarApertivos() {

    let checked = checkBoxApertivos.querySelectorAll('input[type=checkbox]:checked');
    //console.log(checked);

    if (checked.length === 0) {
        alert("Hay que elegir un apertivo mínimo.");
        return false;
    } else {
        return true;
    }

}

// FUNCIÓN: Comprueba si al menos un checkbok seleccianado 1º PLATOS
function validar1Platos() {

    let checked = checkBox1Platos.querySelectorAll('input[type=checkbox]:checked');
    //console.log(checked);

    if (checked.length === 0) {
        alert("Hay que elegir un plato mínimo.");
        return false;
    } else {
        return true;
    }

}

// FUNCIÓN: Comprueba si al menos un checkbok seleccianado POSTRES
function validarPostres() {

    let checked = checkBoxPostres.querySelectorAll('input[type=checkbox]:checked');
    //console.log(checked);

    if (checked.length === 0) {
        alert("Hay que elegir un postre mínimo.");
        return false;
    } else {
        return true;
    }

}

// FUNCIÓN: Recoge los datos personales y mostrarlos en 'Resumen tu reserva'
function recopilarDatosPers() {
    document.getElementById('resumen-nombreApellidos').innerHTML = nombreApellidos.value;
    document.getElementById('resumen-email').innerHTML = email.value;
    document.getElementById('resumen-movil').innerHTML = movil.value;
}

// FUNCIÓN: Recoge información del espacio y mostrarlos en 'Resumen tu reserva'
function recopilarEspacio() {
    document.getElementById('resumen-espacio').innerHTML = espacio.value;
    document.getElementById('resumen-fecha').innerHTML = 'Fecha: ' + fecha.value;
    document.getElementById('resumen-hora').innerHTML = 'Hora: ' + hora.value + ' h';
}

// FUNCIÓN: Recoge información del gastronomía y mostrarlo en 'Resumen tu reserva'
function recopilarGastronomia() {

    let checkedApertivos = checkBoxApertivos.querySelectorAll('input[type=checkbox]:checked');
    let checked1Platos = checkBox1Platos.querySelectorAll('input[type=checkbox]:checked');
    let checkedPostres = checkBoxPostres.querySelectorAll('input[type=checkbox]:checked');
    let checkedNinyos = checkBoxNinyos.querySelectorAll('input[type=checkbox]:checked');
    let checkedCeliaco = checkBoxCeliaco.querySelectorAll('input[type=checkbox]:checked');

    for (let i = 0; i < checkedApertivos.length; i++) {
        document.getElementById('resumenApertivo' + [i]).innerHTML = checkedApertivos[i].value;
    }

    for (let i = 0; i < checked1Platos.length; i++) {
        document.getElementById('resumen1Platos' + [i]).innerHTML = checked1Platos[i].value;
    }

    for (let i = 0; i < checkedPostres.length; i++) {
        document.getElementById('resumenPostres' + [i]).innerHTML = checkedPostres[i].value;
    }

    if (checkedNinyos.length > 0) {
        for (let i = 0; i < checkedNinyos.length; i++) {
            document.getElementById('resumenNinyos' + [i]).innerHTML = checkedNinyos[i].value;
        }
    }

    if (checkedCeliaco.length > 0) {
        for (let i = 0; i < checkedCeliaco.length; i++) {
            document.getElementById('resumenCeliaco' + [i]).innerHTML = checkedCeliaco[i].value;
        }
    }
}