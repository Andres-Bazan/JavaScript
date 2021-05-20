//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función
// para calcular su perímetro y mostrarlo por pantalla.

//  La fórmula del perímetro  es p = 2*(a + b)

function lados() {
  let lados1 = parseInt(prompt("Ingrese un valor"));
  let lados2 = parseInt(prompt("Ingrese un valor"));
  let perimetro = 2 * lados1 + lados2;

  document.write(`P = 2* ${lados1} + ${lados2} =${perimetro}`);
}

lados();
