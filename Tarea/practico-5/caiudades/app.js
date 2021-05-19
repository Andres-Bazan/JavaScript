/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

//Agregar ciudades ---------------------------------------

let agregarCiudades = [];

function city(params) {
  let ciudad = prompt("Agregar Ciudades");

  while (ciudad) {
    agregarCiudades.push(ciudad.trim().toUpperCase());
    ciudad = prompt("Agregar Ciudades");
  }
}

city();

//Listar ciudades -------------------------------------

function listarCiudades() {
  for (let i = 0; i < agregarCiudades.length; i++) {
    console.log(`${i + 1} - ${agregarCiudades[i]}`);
  }

  console.log(`Hay ${agregarCiudades.length} Ciuadades`);
}

listarCiudades();

// LLamar ciudades -----------------------------------
function pantalla(ciudades) {
  let primero = agregarCiudades[0];
  let segundo = agregarCiudades[2];
  let tercero = agregarCiudades[agregarCiudades.length - 1];

  document.write("Ciudades:" + "<br>" + "<br>");
  document.write(primero + "<br>");
  document.write(segundo + "<br>");
  document.write(tercero + "<br>");
}
pantalla();

function cambiarCiudades() {
    let ultimo = agregarCiudades.push('París');
    console.log(ultimo)
}

cambiarCiudades();
listarCiudades();

function pantalla2() {
    let segundo = agregarCiudades[1];
    document.write('-' + segundo + '<br>' )
}



function Barcelona(agregar) {
    
    agregarCiudades.splice(1,1, "BARCELONA")
}

Barcelona();
listarCiudades();

// ------------------------------------

