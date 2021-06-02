

// function saludar(nombre) { 
//   let persona = prompt('Ingrese su nombre') 
//   console.log(`Hola ${persona}! como estas?`)
//   document.write(`Hola ${persona}! como estas?`)
// }

// const saludar = function(nombre) { 
//     let persona = prompt('Ingrese su nombre') 
//     console.log(`Hola ${persona}! como estas?`)
//     document.write(`Hola ${persona}! como estas?`)
//   }

//Funciones flechas
let persona = prompt('Ingrese su nombre') ;
const saludar = nombre => document.write(`¡Hola ${persona}! Como estas?`);
    
saludar()

