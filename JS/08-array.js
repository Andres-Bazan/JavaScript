//Array o arreglos
//lista

//mutacion de un arreglo 
//métodos

let alumnos = ['Pablo', 'Fabrizio', 'Laura', 'Gabriela']

//acceder a un elemento dentro del arreglo
alumnos[2]
//obtener el ultimo elemento
alumnos[alumnos.length - 1]

//concatenar todos los elementos en un string
alumnos.join("-")

//Iterar o recorrer un arreglo
for (let i = 0; i < alumnos.length; i++) {

    console.log(`Hola soy ${alumnos[i]}`)
}

//agregar elementos
alumnos.push('Jorge')
//Eliminar el último elemento
alumnos.pop()

//Añadir un elemento al principio
alumnos.unshift('Walter')
//Eliminar un elemento del principio
alumnos.shift()

//Encontrar el indice de un elemento
console.log(alumnos.indexOf('Pablo'))

//Encontrar un elemento
console.log(alumnos.includes('Laura'))

//Eliminar un elemento mediante su posicion
let pos = 1
alumnos.splice(pos, 1)

//Eliminar varios elementos a partir de una posición
let alumnosEliminados= alumnos.splice(0,3)

//reemplazar valores
alumnos.splice(0, 2, "Daniel", "Augusto");

//Conactenar dos array
let comision = alumnas.concat(alumnos)

//Invierte el orden
alumnos.reverse();

//Ordenar elementos de un array
alumnos.sort();

//Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
let alumnosEspeciales = alumnos.slice(1, 3); //posicion inicial y posicion final

let respuesta=["🥚", "🐔"].sort()
