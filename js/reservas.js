// VARIABLES
const btnNext1 = document.querySelector('#btnNext1');
const btnNext2 = document.querySelector('#btnNext2');
const btnToBook = document.querySelector('#btnToBook');
const btnDelete = document.querySelector('#btnDelete');

const formEspacio = document.getElementById('form-espacio');

// VARIABLES PARA CAMPOS
const nombreApellidos = document.querySelector('#nombreApellidos');
const email = document.querySelector('#email');
const movil = document.querySelector('#movil');


eventListeners();

// FUNCIONES
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp() {
    console.log(formEspacio);
    formEspacio.style.display = 'none';
}
