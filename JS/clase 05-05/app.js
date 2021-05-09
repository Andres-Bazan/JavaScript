//array o arreglos
//lista

//mutacion de un arreglo
//metodos

let alumnos =["Pablo", "Fabrizio", "Laura", "Gabriela" ]

//acceder a un elemento dentro del arreglo

alumnos[2]
alumnos.length
alumnos[alumnos.length - 1]

//concatenar todos los elementos en un string

alumnos.join("|")

//iterar
for(let i=0; i< alumnos.length; i++){
    console.log(alumnos[i])
    console.log(`hola soy ${alumnos}`)
}
//agregar elementos
alumnos.push("jorge")
//Eleiminar el ultimo elemento
alumnos.pop()
//añadir un elemento al principio
alumnos.unshift("walter")
//eliminar al princio de la lista
alumnos.shift()
// encontrar el indice de un elemento
alumnos.indexOf("Fabrizio")
//encontrar un elemento
console.log(alumnos.includes("Gabriela"))
//eliminar un elemento mediante su posicion
let pos = 1
alumnos.splice(pos,1)