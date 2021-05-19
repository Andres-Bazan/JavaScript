let operador = [];

function tirarDados(minima, maxima) {
  return Math.floor(Math.random() * (maxima - minima) + minima);
}

let primerResultado = tirarDados(1, 6);
let segundoResultado = tirarDados(1, 6);
let resultado = primerResultado + segundoResultado;
console.log(`${primerResultado} + ${segundoResultado} = ${resultado}`);
operador.push(resultado);

for (let i = 0; i <= 49; i++) {
  let alAzar = tirarDados(1, 6) + tirarDados(1, 6);

  if (resultado === alAzar) {
    operador.push(alAzar);
  } else {
    console.log(`${i + 1} - ${alAzar}`);
  }
}
console.log(operador);
