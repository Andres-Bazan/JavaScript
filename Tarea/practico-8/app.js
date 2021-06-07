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
    this.nombre = nombre;
    this.precio = precio;
    this.codigo = codigo;
    
  }

  imprimeDatos() {
    console.log(`El nombre del producto Nº${i + 1} es ${this.nombre}`);
    console.log(`El precio del producto es $ ${this.precio}`);
    console.log(`El codigo de barra es ${this.codigo}`);
    console.log("=============================================");
  }
}

for (i = 0; i < 3; i++) {
  let nombre = prompt(`Ingrese el nombre del producto Nº${i + 1}`);
  let precio = prompt("Ingrese el precio del producto");
  let codigo = prompt("Ingrese el codigo del producto");
  supermercado.push( new Producto(nombre, precio, codigo));
  supermercado[i].imprimeDatos();
}


