class Producto {
    constructor(nombre, tipo, precio){
       this.nombre = nombre;
       this.tipo = tipo;
       this.precio = precio;
    }
}
const producto1 = new Producto('amd5', 'cpu', 4000);
const producto2 = new Producto('amd7', 'cpu', 8000);
const producto3 = new Producto('intel5', 'cpu', 5000);
const producto4 = new Producto('intel7', 'cpu', 9000);
const producto5 = new Producto('h510m', 'motherboard', 3000);
const producto6 = new Producto('b450', 'motherboard', 7500);
const producto7 = new Producto('8gb', 'ram', 4000);
const producto8 = new Producto('16gb', 'ram', 7000);
const producto9 = new Producto('32gb', 'ram', 12000);
const producto10 = new Producto('gtx1050', 'gpu', 8000);
const producto11 = new Producto('rx580', 'gpu', 18000);
const producto12 = new Producto('rtx3060', 'gpu', 32000);
const producto13 = new Producto('600w', 'fuente', 3000);
const producto14 = new Producto('850w', 'fuente', 8000);
const producto15 = new Producto('1000w', 'fuente', 15000);

const cpu = [
    producto1,
    producto2,
    producto3,
    producto4
]
const placaMadre = [
    producto5,
    producto6
]
const ram = [
    producto7,
    producto8,
    producto9
]
const gpu = [
    producto10,
    producto11,
    producto12
]
const fuentePoder = [
    producto13,
    producto14,
    producto15
]
const stock = cpu.concat(placaMadre, ram, gpu, fuentePoder);

let carritoDeCompras = []

function agregarAlCarrito(){
    let miProducto = prompt('Ingrese nombre del producto');
    let agregarProducto = stock.find((el)=>el.nombre == miProducto);
   if(agregarProducto){
    carritoDeCompras.push(agregarProducto);
    console.log(carritoDeCompras);
    console.log(agregarAlCarrito);
    actualizarCarrito(carritoDeCompras);
   }else{
       alert('Dato ingresado no valido!');
   }
}

function actualizarCarrito(carritoDeCompras){
    let suma = carritoDeCompras.reduce((acc, el)=>{
        return acc= acc + el.precio}, 0);
        console.log('Total del Carrito $' + suma);
}

function mostrarCarrito(){
    let suma = carritoDeCompras.reduce((acc, el)=>{
        return acc = acc + el.precio}, 0);
        alert('su pc cuesta $' + suma);
}
