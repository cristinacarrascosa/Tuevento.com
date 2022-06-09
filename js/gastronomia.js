const divplato = document.querySelector('.plato');
const titulo = document.querySelector('.titulo');
const precio = document.querySelector('.precio')
const descripcion = document.querySelector('.descripcion');
const arrBotones = document.querySelectorAll('.btn-group-vertical')
const btnEliminar = document.querySelector('.btnEliminar');

//console.log(1)
    document.addEventListener('DOMContentLoaded', () => {
        //console.log(2);
    }) // Nota todos los eventos que hay disponibles
//console.log(3);



// console.log(divplato); // accedo al div del plato
// console.log(titulo.textContent); // accedo al texto del contenido
// console.log(descripcion.textContent); // accedo al contenido
// console.log(precio.textContent);
// console.log(arrBotones); // accedo a los botones

/** para cambiar el texto del documento */
//document.querySelector('.descripcion').textContent = 'Nuevo texto'

/** borrar plato */
//divplato.remove();

btnEliminar.addEventListener('click',borraPlato);


function borraPlato() {
    divplato.remove();
}

