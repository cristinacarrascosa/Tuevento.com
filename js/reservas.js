//'use strict'

// VARIABLES
const btnNext1 = document.getElementById('btnNext1');
const btnNext2 = document.querySelector('#btnNext2');
const btnToBook = document.querySelector('#btnToBook');
const btnDelete = document.querySelector('#btnDelete');

const formDatosPers = document.getElementById('form-datos-personales');
const formEspacio = document.getElementById('form-espacio');
const formGastronomia = document.getElementById('form-gastronomia');

// VARIABLES PARA CAMPOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');


eventListeners();

// FUNCIONES
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    console.log('Funciona 1');

    //Campos del formulario


    // Botón de 'Siguiente'
    btnNext1.addEventListener('click', validarFormDatosPers);
    console.log('Funciona 2');
}

function iniciarApp() {
    
    // Inicio de la aplicación y oculta los div de formEspacio y formGastronomía
    ocultarDivEspacio();
    ocultarDivGastronomia();
    
}

function ocultarDivDatosPers() {
    console.log('OCULTAR DIV DATOS PERSONALES');
    formDatosPers.style.display = 'none';
}

function ocultarDivEspacio() {
    formEspacio.style.display = 'none';
}

function ocultarDivGastronomia() {
    formGastronomia.style.display = 'none';
}

function mostrarDivEspacio() {
    formEspacio.style.display = '';
}

function mostrarDivGastronomia() {
    formGastronomia.style.display = '';
}


function validarFormDatosPers() {
    console.log('SIGUIENTEEEE');
    ocultarDivDatosPers();
    //mostrarDivEspacio();
    //ocultarDivGastronomia();
}