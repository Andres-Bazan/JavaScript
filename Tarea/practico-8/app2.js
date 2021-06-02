/*
Escribe una clase Producto para crear objetos. 
----------------------------------------------------
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/
let supermercado = [];

class Producto {
  constructor(nombre, precio, codigo) {
    this.nombre = prompt(`Ingrese el nombre del producto Nº${i + 1}`);
    while (this.nombre == null || this.nombre == "") {
      this.nombre = prompt(`No hay nada, Ingrese el nombre del producto N°${i + 1}`);
    }

    this.precio = prompt(`Ingrese el precio del producto ${i + 1}`);
    while (this.nombre == null || this.nombre == "") {
      this.precio = prompt(`No ingreso nada, por favor ingrese un producto Nº${i + 1}`);
    }

    while (isNaN(this.precio)) {
      this.precio = parseInt(
        prompt(`No ingreso ningun número, vuelva a escrbibir el precio del producto Nº${i + 1}`));
    }
    this.codigo = prompt("Ingrese el codigo del producto");
    supermercado.push(supermercado);
  }

  imprimeDatos() {
    console.log("===== DETALLE DE LA COMPRA =====");
    console.log(`El nombre del producto Nº${i + 1} es ${this.nombre}`);
    console.log(`El precio del producto es ${this.precio}`);
    console.log(`El codigo de barra es ${this.codigo}`);
    console.log("=============================================");
  }
}
supermercado.push(new Producto(nombre, precio, codigo));
supermercado[i].imprimeDatos();

// let producto = new Productos(codigo, nombre, precio);
//   producto.imprimeDatos();
//   supermercado.push(producto);
