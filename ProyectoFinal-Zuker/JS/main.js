// VARIABLES

let carritoDeCompras = []
let stock = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTipo = document.getElementById('selecTipo');
const buscador = document.getElementById('search');

const send = document.getElementById('send');

//FILTRO

selecTipo.addEventListener('change' ,()=>{
    console.log(selecTipo.value)
    if(selecTipo.value == 'all'){
        mostrarProductos(stock)
    }else{
        mostrarProductos(stock.filter(el => el.tipo == selecTipo.value))
        console.log(stock.filter(el => el.tipo == selecTipo.value))
    }
})

//BUSCADOR

buscador.addEventListener('input' , ()=>{
    if(buscador.value == ""){
        mostrarProductos(stock)
    }else{
        mostrarProductos(stock.filter(el =>
            el.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
    }
})

//FETCH

fetch('js/stock.json')
    .then(Response => Response.json())
    .then((data) =>{
        data.forEach(item =>{
            stock.push(item)
        })
        mostrarProductos(stock);
        recuperar()
    })
    .catch((error) => console.log(error));


//FUNCIONES PRODUCTOS Y CARRITO

function mostrarProductos(array){
    contenedorProductos.innerHTML="";
    for(const producto of array){
        let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML += `
           <div class="card">
           <span class="card-title">${producto.nombre}</span>
           <div class="card-content">
                <img src=${producto.img}>
                <p> ${producto.descripcion}</p>
               <p> $${producto.precio}</p>
               <button id="botonAgregar${producto.id}" class="btn"><img src="https://img.icons8.com/plasticine/50/000000/add--v1.png"/></button>
        </div>
      </div>
        `
        contenedorProductos.appendChild(div);

        let btnAgregar = document.getElementById(`botonAgregar${producto.id}`)
        

        btnAgregar.addEventListener('click', ()=>{
            console.log(producto.id)
            agregarAlCarrito(producto.id)
            Toastify({
                text: "Producto agregado!",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        })

    }
}



function agregarAlCarrito(id){
    let repetido = carritoDeCompras.find(item => item.id == id)
    if(repetido){
        console.log(repetido);
        repetido.cantidad = repedito.cantidad +1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    }else{
    console.log(typeof id);
    let agregarProducto = stock.find((elemento) => {
        console.log(elemento.id, id);
        if(elemento.id === id){
            return elemento;
        }
    })
 
    carritoDeCompras.push(agregarProducto)
    actualizarCarrito(carritoDeCompras)
    console.log(carritoDeCompras);

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML =`
                <p>${agregarProducto.nombre}</p>
                <p>${agregarProducto.precio}</p>
                <p id=cantidad${agregarProducto.id}>Cantidad:${agregarProducto.cantidad}</p>
                <button id=botonEliminar${agregarProducto.id} class="boton-eliminar"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"/></button>
    `
    contenedorCarrito.appendChild(div)

    let botonEliminar = document.getElementById(`botonEliminar${agregarProducto.id}`)
    botonEliminar.addEventListener('click',()=>{
        console.log(agregarProducto.id);
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != agregarProducto.id)
        actualizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        Toastify({
            text: "Producto eliminado!",
            className: "info",
            style: {
              background: "linear-gradient(to right, red, orange)",
            }
          }).showToast();
        })
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

}

function recuperar(){
    let recuperarLs = JSON.parse(localStorage.getItem('carrito')) || []

    recuperarLs.forEach(element => {
        agregarAlCarrito(elemento.id)
    });
    
}

recuperar()

//CHECKOUT

function checkout(){
    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML = `
                <p>Proximamente pagos en linea.<br>
                Comuniquese al instagram para culminar la compra.</p>
                <a href="https://www.instagram.com/zaccarowoman/"><img class="chackoutImg" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
    `
    contenedorCarrito.appendChild(div)
}