//crear funcion
let carrito = [];

//Agregar productos
function agregarProductos(x) {
  do {
    productos = prompt("introduzca el producto y cancele cuando finalice");

    if (productos === "") {
      alert("Ponga un producto!");
    } else if (productos === null) {
      alert("Finalizo su compra");
    } else {
      x.push(productos.toLocaleUpperCase());
    }
  } while (productos != null);
}
agregarProductos(carrito);
Listar();
//Listar productos
function Listar() {
  console.log(carrito);
}

// Buscar el producto
let palabra = prompt("producto que desea buscar");

function buscar_Completa(palabra) {
  carrito.find(function (array) {
    array === palabra.toLocaleUpperCase();
    return console.log(buscar);
  });
}
console.log(buscar(palabra));

let filter = prompt("Las iniciales del producto que desea buscar");
function buscar(query) {
  return carrito.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}
console.log(buscar(filter));

//eliminar productos
for (e of carrito) {
  console.log(`El Producto ${e} esta en la posicion ${carrito.indexOf(e)}`);
}
let eliminando = prompt("eliminar elija la posicion del producto");
function eliminar(position) {
  carrito.splice(position, 1);
}
eliminar(eliminando);
Listar();
for (e of carrito) {
  console.log(`El Producto ${e} esta en la posicion ${carrito.indexOf(e)}`);
}
