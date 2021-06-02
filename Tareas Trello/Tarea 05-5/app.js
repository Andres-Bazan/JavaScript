console.log("TAREA 1 - Números con condicionales");
let num1 = 20;
let num2 = 20;

if (num1 > num2) {
  console.log(num1 + num2);
} else {
  console.log(num2 - num1);
}
if (num1 === num2) {
  console.log(num1 * num2);
}

console.log("TAREA 2 - Operaciones con condicionales");

let valor1 = parseInt(prompt("Ingrese el primer numero"));
let valor2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt('Eliga la operacion que desea realizar | + | - | * | / |')

if(isNaN(valor1)) {
  console.log('El valor ingresado es 0');
  valor1 = 0
  console.log(`El primer numero es = ${valor1}`);
}

if (isNaN(valor2)) {
  consolo.log("El valor ingreado es 0");
  valor2 = 0
  console.log(`El segundo valor ingresado es ${valor2}`);
}

switch (operacion) {
  case "+":
    console.log(`La suma de ${valor1} + ${valor2} = ${valor1 + valor2}`);
    break;

  case "-":
    console.log(`El resultado de ${valor1} - ${valor2} = ${valor1 - valor2}`);
    break;

  case "*":
    console.log(`El resultado de ${valor1} * ${valor2} = ${valor1 * valor2}`);
    break;

  case "/":
    console.log(`El resludato de la division de ${valor1} / ${valor2} = ${valor1 / valor2}`);
    break;
  default:
      console.error('Error. No seleciono ningun numero y Operacion');
    break;
}
