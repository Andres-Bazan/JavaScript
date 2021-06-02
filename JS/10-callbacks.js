//callbacks
//son funciones que se envian como parámetros y se ejecutan despues de un método.

let numeros = [2, 5, 6, 12, 24, 37];

let numerosOrdenados = numeros.sort(function (num1, num2) {
  return num1 - num2;
});

//filter

let pares = numeros.filter(function (num) {
  return num % 2 === 0;
});

//find
let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];

alumnos.find(function (alumno) {
  return alumno === "Mateo";
});

//map

let numerosDobles = numeros.map(function (num) {
  return num * 2;
});
