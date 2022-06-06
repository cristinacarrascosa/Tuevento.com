//'use strict'

// VARIABLES
const btnNext1 = document.getElementById('btnNext1');
const btnNext2 = document.getElementById('btnNext2');
const btnToBook = document.getElementById('btnToBook');
const btnDelete = document.getElementById('btnDelete');

const btnDatosPers = document.getElementById('btnDatosPers');
const btnEspacios = document.getElementById('btnEspacios');

const formDatosPers = document.getElementById('form-datos-personales');
const formEspacio = document.getElementById('form-espacio');
const formGastronomia = document.getElementById('form-gastronomia');

//console.log("ESTILO1:" + formDatosPers);
//console.log("ESTILO2:" + formEspacio);
//console.log("ESTILO3:" + formGastronomia);


// VARIABLES PARA CAMPOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');

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
    //ocultarDivEspacio();
    //ocultarDivGastronomia();
}


function validarFormDatosPers() {
    formEspacio.style.display = '';
    btnDatosPers.style.display = 'none';
}

function validarFormEspacios() {
    formGastronomia.style.display = '';
    btnEspacios.style.display = 'none';
}