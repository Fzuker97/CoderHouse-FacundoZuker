let carritoDeCompras = []
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

mostrarProductos(stock);

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
               <p> $${producto.precio}</p>
               <button id="botonAgregar${producto.id}" class="btn">+</button>
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

    let agregarProducto = stock.find(elemento => elemento.id == id)
 
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

