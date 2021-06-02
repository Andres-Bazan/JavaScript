let nombre = 'Eugenio'
let apellido = 'Perez'
let frase = '          Bienvenido a la clase      '

//concatenar texto
console.log(nombre, apellido);
console.log(nombre + ' ' + apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los String

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(apellido.length);
console.log(nombre.charAt(4));
console.log(apellido.substr(2, 3)); //parametros de substr (posicion, cantidad de caracteres a mostrar)
console.log(frase.trim());

//traer la última letra del apellido

console.log(apellido.charAt(apellido.length - 1));






