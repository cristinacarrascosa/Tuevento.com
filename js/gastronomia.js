
// Variables
const carrito = document.querySelector('#carrito');
const modificar = document.querySelector('#modificar');
const listadoPlatos = document.querySelector('#listado-platos');
const contenedorModificar = document.querySelector('#lista-modificar tbody'); //donde se muestra modificar
const aceptarModificacionBtn = document.querySelector('#modificarPlato'); // boton del canva de modificar
// const aperitivos = document.querySelector('#aperitivos');
let platos = document.querySelectorAll('.plato')// nodelist con todos los platos
const imagenes = document.querySelectorAll('.imagen')
const listaMenu = document.querySelector('.table tbody');
const btnEliminar = document.querySelector('.btnEliminar');
const btnModificar = document.querySelector('.btnModificar');
const btnComprar = document.querySelector('.btnComprar');
const btnBorrarMenu = document.querySelector('#borrar-menu');
let platosMenu = [];
let platosModificar = [];


// Funcion para registrar todos los eventListeners
cargarEventListeners();
function cargarEventListeners() {
    listadoPlatos.addEventListener('click', eliminarPlato);
    listadoPlatos.addEventListener('click', modificarPlato);
    listadoPlatos.addEventListener('click', agregarPlato);
    listaMenu.addEventListener('click', eliminarSeleccion);

    btnBorrarMenu.addEventListener('click', () => {
        platosMenu = [];

        limpiarHTML();
    })

}


// Funciones
function eliminarPlato(e){
    if(e.target.classList.contains('btnEliminar')){
        //console.log('pulsaste btnEliminar')
        
    }
    
}

function modificarPlato(e){
    if(e.target.classList.contains('btnModificar') ){
        const platoSeleccionado =e.target.parentElement.parentElement;
        leerDatosParaModificar(platoSeleccionado);//trabajando en esto ahora
    }
}

function agregarPlato(e){
    if(e.target.classList.contains('btnComprar') ){
        const platoSeleccionado =e.target.parentElement.parentElement;
        //console.log('pulsaste btnComprar');
        leerDatosPlato(platoSeleccionado);
    }
}

function eliminarSeleccion(e) {
    if(e.target.classList.contains('borrar-seleccion')){
        const platoid = e.target.getAttribute('data-id');

        // Elimina del array platosMenu por el data-id
        platosMenu = platosMenu.filter( plato => plato.id !== platoid); 

        menuSelecHtml(); 
    };
}

// Leer los datos del plato para el carrito
function leerDatosPlato(plato){
    

    // creamos objeto con el contenido del plato
    const infoPlato = {
        imagen: plato.querySelector('.imagen').src,
        precio: plato.querySelector('h4').textContent,
        nombre: plato.querySelector('h5').textContent,
        descripcion: plato.querySelector('span').textContent,
        id: plato.querySelector('.btnComprar').getAttribute('data-id'),
        cantidad: 1
        // MIRAR LA MANERA DE METER CANTIDAD  si no podemos borrar la cantidad
    }
    

    // Devuelve true si el plato ya existe
    const existe = platosMenu.some( plato => plato.id === infoPlato.id );
    if (existe) {
        // Actualizamos cantidad
        const platos = platosMenu.map( plato => {
            if(plato.id === infoPlato.id) {
                plato.cantidad++; // retorna el objeto actualizado
                return plato;
            }else {
                return plato; // retorno los objetos que no son los duplicados
            }
        });
        platosMenu = [...platos];
    } else {
        // agregamos al array de la seleccion del menu
    platosMenu = [...platosMenu, infoPlato]
        
    }
    

   // console.log(platosMenu);

    // funcion que muestra la info en carrito
    menuSelecHtml();
}


function leerDatosParaModificar(plato) {
    // creamos objeto con el contenido del plato
    const infoPlato = {
        imagen: plato.querySelector('.imagen').src,
        precio: plato.querySelector('h4').textContent,
        nombre: plato.querySelector('h5').textContent,
        descripcion: plato.querySelector('span').textContent,
        id: plato.querySelector('.btnComprar').getAttribute('data-id'),
       
    }
    // Agrega elementos a ofcanva modificar
    platosModificar = [infoPlato];
    modificarSelectHTML();
}

// Muestra en ofcanva modificar
function modificarSelectHTML() {
    contenedorModificar.innerHTML = '';
    platosModificar.forEach( (plato) => {
        const {imagen, nombre, precio, descripcion} = plato;
        const row = document.createElement('tr');
        const div = document.createElement('div');
        row.innerHTML = `
            <td><img src="${imagen}" width="100">
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${descripcion}</td>
        
        `;
        div.innerHTML = `
        <div class="container mt-3">
        <h2>Textarea</h2>
        <p>Use the .form-control class to style textareas as well:</p>
        <form action=>
          <div class="mb-3 mt-3">
            <label for="comment">Comments:</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
        `;
        // Agrega el HTML en el tbody
        contenedorModificar.appendChild(row);
        contenedorModificar.appendChild(div);
    })
}


// Muestra la seleccion de platos en el Menu Seleccionado
function menuSelecHtml() {
    limpiarHTML();
    // recorre array de los platos del menu y genera html
    platosMenu.forEach( plato => {
        //mejoramos el código con destructing
        const {imagen, nombre, precio, cantidad, id} = plato;
        const row = document.createElement('tr');
        // construimos un template literal !!MIRAR LA MANERA DE METER CANTIDAD
        row.innerHTML = `
            <td><img src="${imagen}" width="100">
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-seleccion" data-id="${id}"> X </a>
            </td>
        `;

        // Agrega HTML en tbody
        listaMenu.appendChild(row);
    })
}


// elimina platos sobrantes del array de platosMenu
function limpiarHTML() {
    // mientras en el array listaMenu haya un elemento dentro, borra el elemento
    while(listaMenu.firstChild) {
        listaMenu.removeChild(listaMenu.firstChild);
    }
}

// Eliminar gastronomia
const articulo = document.querySelectorAll(' .btnEliminar');
for (const art of articulo){
    art.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.remove();
      alert(`Has eliminado este plato`);
    });
  }

//console.log(1)
    // document.addEventListener('DOMContentLoaded', () => {
    //     //console.log(2);
    // }) // Nota todos los eventos que hay disponibles
//console.log(3);



// console.log(divplato); // accedo al div del plato
// console.log(titulo.textContent); // accedo al texto del contenido
// console.log(descripcion.textContent); // accedo al contenido
// console.log(precio.textContent);
// console.log(arrBotones); // accedo a los botones

/** para cambiar el texto del documento */
//document.querySelector('.descripcion').textContent = 'Nuevo texto'

/** borrar plato, solo borra el primero */
//divplato.remove();

//btnEliminar.addEventListener('click',borraPlato);


// function borraPlato() {
//     divplato.remove();
// }

/** CREAR UN NUEVO PLATO */
// primer div creado
const div = document.createElement('div');
div.classList.add('plato')
div.classList.add('col-lg-6');
// segundo div2 creado
const div2 = document.createElement('div');
div2.classList.add('d-flex');
div2.classList.add('h-100');
// terce div3 creado
const div3 = document.createElement('div');
div3.classList.add('flex-shrink-0');
// elemento img
const img = document.createElement('img');
img.classList.add('img-fluid');
img.src = 'img/gastronomia/gastronomia/APERITIVOS/AF-Dulce-de-manzana-verde-ricotta-y-crujiente-de-quicos.jpg';
img.alt = 'imagenGenérica';
img.style = 'width: 200px; height: 85px;'
// elemento h4 - precio
const h4 = document.createElement('h4');
h4.classList.add('bg-dark');
h4.classList.add('text-primary')
h4.classList.add('p-2')
h4.classList.add('m-0')
h4.textContent = 'precio&euro;'
// div4 texto
const div4 = document.createElement('div');
div4.classList.add('d-flex')
div4.classList.add('flex-column')
div4.classList.add('justify-content-center')
div4.classList.add('text-start')
div4.classList.add('bg-secondary')
div4.classList.add('border-inner')
div4.classList.add('px-4')
// h5 titulo
const h5 = document.createElement('h5');
h5.classList.add('text-uppercase');
h5.textContent = 'Titulo';
// span
const span = document.createElement('span');
span.textContent = 'descripcion'
// div botones
const div5 = document.createElement('div');
div5.classList.add('btn-group-vertical')
// boton elimiminar
const btEliminar = document.createElement('button');
btEliminar.classList.add('onclick');
btEliminar.classList.add('borraPlato()');
btEliminar.classList.add('onclick');
// btEliminar.classList.add('');
//console.log(btEliminar);


//Modo admin

// let admin = document.getElementById("admin")
// admin = prompt("hola")



