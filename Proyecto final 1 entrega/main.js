let stockProductos = [
    {id: 1, nombre: "AMD", tipo: "Procesador", precio: 8000},
    {id: 2, nombre: "Intel", tipo: "Procesador", precio: 10000},
    {id: 3, nombre: "Generica", tipo: "Motherboard", precio: 5000},
    {id: 4, nombre: "Dedicada", tipo: "Motherboard", precio: 9000},
    {id: 5, nombre: "8GB", tipo: "RAM", precio: 8000},
    {id: 6, nombre: "16GB", tipo: "RAM", precio: 14000},
    {id: 7, nombre: "Integrada", tipo: "GPU", precio: 3000},
    {id: 8, nombre: "Dedicada", tipo: "GPU", precio: 20000},
    {id: 9, nombre: "Generica", tipo: "Fuente de poder", precio: 3000},
    {id: 10, nombre: "80-PLUS", tipo: "Fuente de poder", precio: 8000},
]

let carritoDeCompras = []



function agregarAlCarrito(){
    let miProducto = parseInt(prompt('Ingrese ID del producto'));

    let agregarProducto = stockProductos.find((el) => el.id == miProducto);

    carritoDeCompras.push(agregarProducto);
    console.log(carritoDeCompras);
    actualizarCarrito(carritoDeCompras);
}



function actualizarCarrito(carritoDeCompras){
    let suma = carritoDeCompras.reduce((acc, el) =>{ 
        return acc = acc + el.precio}, 0);
    console.log('Su PC seleccionada cuesta $' + suma);
}

function mostrarCarrito(){
    let suma = carritoDeCompras.reduce((acc, el) =>{ 
        return acc = acc + el.precio}, 0);
    alert('Su PC seleccionada cuesta $' + suma);
}