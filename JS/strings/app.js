let nombre= "Eugenio"
let apellido= "Gonzalez"
let frase= "       Bienvenido a la clase         "

//Concatenar Texto

console.log(nombre, apellido)
console.log(nombre + " " + apellido)

//Templete String

console.log(`Mi nombre es ${nombre} ${apellido}`)

//Metodos munuscula y mayuscula, y posicionamiento de String

console.log(nombre.toUpperCase(1))
console.log(nombre.toLocaleLowerCase());
console.log(apellido.length);
console.log(nombre.charAt(4));
console.log(apellido.substr(2 ,3)); //parametros de substr (posicion de caracteres a mostrar)
console.log(frase.trim());
frase = frase.trim() ;

//traer la ultima letra del apellido

console.log(apellido.charAt(apellido.length - 1))
