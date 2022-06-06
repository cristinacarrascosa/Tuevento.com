//'use strict'

// VARIABLES
// Botones
const btnNext1 = document.getElementById('btnNext1');
const btnNext2 = document.getElementById('btnNext2');
const btnToBook = document.getElementById('btnToBook');
const btnDelete = document.getElementById('btnDelete');
const btnDatosPers = document.getElementById('btnDatosPers');
const btnEspacios = document.getElementById('btnEspacios');

//div
const formDatosPers = document.getElementById('form-datos-personales');
const formEspacio = document.getElementById('form-espacio');
const formGastronomia = document.getElementById('form-gastronomia');

// VARIABLES PARA CAMPOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();

// FUNCIONES
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Botón de 'Siguiente'
    btnNext1.addEventListener('click', validarFormDatosPers);
    btnNext2.addEventListener('click', validarFormEspacios);
    
}

function iniciarApp() {
    // Inicio de la aplicación y oculta los div de formEspacio y formGastronomía
    formEspacio.style.display = 'none';
    formGastronomia.style.display = 'none';
}


function validarFormDatosPers() {

    if (nombreApellidos.value.length > 0) {
        console.log('OK nombre');
    } else {
        console.log('ERROR nombre');
    }

    if (movil.value.length > 0 && movil.value.length < 10) {
        console.log('OK movil');
    } else {
        console.log('ERROR movil');
    }

    formEspacio.style.display = '';
    btnDatosPers.style.display = 'none';



    
}

function validarFormEspacios() {
    formGastronomia.style.display = '';
    btnEspacios.style.display = 'none';
}

function validarFormGastronomia() {

}