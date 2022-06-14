/** AUTORES:
 * CRISTINA CARRASCOSA TORRES 50%
 * RAIMON VILAR MORERA 50%
 */

// Variables
const carrito = document.querySelector('#carrito');
const modificar = document.querySelector('#modificar');
const listadoPlatos = document.querySelector('#listado-platos');
const contenedorModificar = document.querySelector('#lista-modificar tbody'); //donde se muestra modificar
const modificar_articulo = document.getElementById('modificar_articulo')
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
  //admin
let adminBlock = document.getElementById("#admin")
adminBlock.addEventListener("click", function(){
  let pass = prompt("Introduce contraseña maestra")
  if(pass == 'admin'){
    reveladorDeSecretos();
  } else {
    alert("Contraseña incorrecta")
  }
})
let listaAperitivosInicial = document.getElementById("listaAperitivos").childNodes;
console.log(listaAperitivosInicial)

for (var i = 1; i <= 8; i++) {
  listaAperitivosInicial[(i*2 - 1)].children[0].children[2].children[0].className += " escondido";
  listaAperitivosInicial[(i*2 - 1)].children[0].children[2].children[1].className += " escondido";
}
function reveladorDeSecretos(){
  for (var i = 1; i <= 8; i++) {
    listaAperitivosInicial[(i*2 - 1)].children[0].children[2].children[0].classList.remove("escondido")
    listaAperitivosInicial[(i*2 - 1)].children[0].children[2].children[1].classList.remove("escondido");
  }
}

function adminPrompt(){
  alert("hola")
}

function eliminarPlato(e){
    if(e.target.classList.contains('btnEliminar')){

    }

}

function modificarPlato(e){
    if(e.target.classList.contains('btnModificar') ){
        const platoSeleccionado =e.target.parentElement.parentElement;
        leerDatosParaModificar(platoSeleccionado);//trabajando en esto ahora
        //console.log(platoSeleccionado);
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

        menuSelectHtml();
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

    // funcion que muestra la info en carrito
    menuSelectHtml();
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
    //console.log(infoPlato)
}


// Muestra en ofcanva modificar
function modificarSelectHTML() {
    limpiarHTML();
    contenedorModificar.innerHTML = '';
    modificar_articulo.innerHTML = '';

    platosModificar.forEach( (plato) => {
        let {imagen, nombre, precio, descripcion, id} = plato;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100">
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${descripcion}</td>

        `;

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="container mt-3" style=text-aling:left" >
            <h4>Introduce los datos que deseas modificar</h4>
            <div class="mb-3 mt-3">
                <label for="imagen">Imagen: </label>
                <input type = "file" id="imagen">
            </div>
            <div class="mb-3 mt-3">
                <label for="nombre">Nombre:</label>
                <textarea class="form-control" rows="2" cols="3" id="nombre">${nombre}</textarea>
            </div>
            <div class="mb-3 mt-3">
                <label for="descripcion">Descripción:</label>
                <textarea class="form-control" rows="3" cols="8" id="comment" name="text">${descripcion}</textarea>
            </div>
            <div class="mb-3 mt-3">
                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" min="1" placeholder="${precio}">
            </div>
        </div>
        <button class="btn btn-primary" id="cambiarDatos" type="button" onclick="changeData(${id})">Cambiar</button>
        `;
        // Agrega el HTML en el tbody
        contenedorModificar.appendChild(row);
        modificar_articulo.appendChild(div);
        })

}


function changeData(e){
  let elementPosition = e*2 - 1;
  let listaAperitivos = document.getElementById("listaAperitivos");

  let nombre = $("#nombre")[0].value;
  let descripcion = $("#comment")[0].value;
  let precio = $("#precio")[0].value;


  let children = listaAperitivos.childNodes;
  console.log(children)
  children[elementPosition].children[0].children[1].children[0].innerHTML = nombre;
  children[elementPosition].children[0].children[1].children[1].innerHTML = descripcion;
  children[elementPosition].children[0].children[0].children[1].innerHTML = precio + '.00€';


}
function onClick() {
    let nombreModificado = (document.getElementById('nombre').value)
    let nombre = document.querySelector('.titulo').textContent = nombreModificado


    }








// Muestra la seleccion de platos en el Menu Seleccionado
function menuSelectHtml() {
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
            <input class="inputCantidad" type="number" min="1" value=${cantidad}></input>
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

// Eliminar aritulo
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
