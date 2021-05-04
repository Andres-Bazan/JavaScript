//Redondear un numero mas bajo

console.log(Math.floor(45.89))

//Redondear un numero mas arriba

console.log(Math.round(45.89))

//Obtener el numero maximo de una lista

console.log(` El número maximo es: ${Math.max(56.5,45,90,5,1000)}`)

//Obtener el minimo

console.log(` El número maximo es: ${Math.min(56.5,45,90,5,1000)}`)

let numero=67.54546
console.log(numero)
numero = parseInt(numero)
let decimal = "456.316445"
console.log(parseFloat(decimal))

let base=numero
let exponente=2

console.log(` El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base,exponente)}`)

//Calcular la raiz cuadrada

console.log(Math.sqrt(64))

//Numero aleatorio

console.log(Math.round(Math.random() * 100 ) + 1 )

//Obtener numero con dos decimales

decimal=parseFloat(decimal)

console.log(Math.round(decimal * 100) / 100)
 
//ToFixed (2)

let decimalString = parseFloat(decimal.toFixed (3))