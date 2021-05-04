//Tarea 1
let nombre= "andres"

console.log(nombre.toUpperCase().charAt(0)+nombre.substr(1,2)+nombre.substr(3,4))

let nombre2= "diego"
const mayu= (cadena) => {
  const primerCaracter = cadena.charAt(0).toUpperCase();
  const restoDeLaCadena = cadena.substring(1, cadena.length);
  return primerCaracter.concat(restoDeLaCadena);
}
console.log (mayu(nombre2))

//Tarea 2


let numero1= 16
let numero2= 25
let numero3= 40

console.log(` el numero maximo es: ${Math.max(40)}`)
console.log(` el numero minimo es: ${Math.min(16)}`)
console.log(Math.sqrt(16))


//Tarea 3


if (numero1 > numero2 ) {
  console.log(`${numero2} es menor que ${numero1} la suma de ${numero1} y ${numero2} es igual a ${numero1 + numero2}`)
}

else if (numero1 < numero2 )
{
   console.log(`${numero1} es menor que ${numero2} la suma de ${numero1} y ${numero2} es igual a ${numero1 + numero2} `)
}
else  {
   console.log(`${numero1} es igual a ${numero2} la multiplicacion de ${numero1} y ${numero2} es igual a ${numero1 + numero2}`)
}