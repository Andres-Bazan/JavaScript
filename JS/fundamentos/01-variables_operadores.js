//Variable
//Es un espacio de memoria donde guardo datos

var nombre = "Eugenio";

let apellido = "Perez";
const pi = 3.14;

//Tipos de datos

//String
let cliente = "Fabrizio";

//Number
let numero1 = 34;
let numero2 = 67.25;
let numero3 = -24;

//Boolean
let comprar = true;
let comer = false;

//null
let billetera = null;

//Undefined
let caja;

//Array
let arreglo = ["Pablo", 689, true];

//Object
let persona = {
  nombre: "José",
  apellido: "Mandarino",
  edad: 33,
};

//Operadores

//Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

//unitarios
++numero1;
--numero1;

//Relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

console.log("Hola mundo");

console.log("El resultado de la suma es " + suma);

//Negacion
let verdadero = true;
console.log(!verdadero);

//Tarea
// Creamos dos variables: numero1, numero2
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numaro 2

let valor = prompt("ingrese su nombre");

let edad = prompt("Ingrese su edad");