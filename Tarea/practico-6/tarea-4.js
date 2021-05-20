/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
la creación de la tabla debe ser realizada con una función y mostrar solo 
los resultados del 1 al 10 del número elegido por el usuario.
*/


console.log("Tabla de multiplicar");

function tablaMultiplicar() {
   tabla = parseInt(prompt("Ingrese un número a multiplicar"));

  while (tabla) {
    for (let i = 0; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
    } tabla = parseInt(prompt('Ingrese un número a multiplicar'));
  }
}

tablaMultiplicar();

