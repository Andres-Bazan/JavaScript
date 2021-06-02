//Problema 1

// let free = false;

// function validarCliente(time) {
//   let edad = parseInt(prompt("Cual es tu edad?"));
//   if (edad > 18) {
//     if (time >= 2 && time < 7 && free == false) {
//       alert("Podes pasar gratis");
//       console.log(
//         "Podes pasar gratis porque sos la primera persona despues de las 2 AM"
//       );
//       free = true;
//     } else {
//       alert(`Son las ${time}, pero tenes que pagar la entrada`);
//       console.log("Podes pasar, pero tenes que pagar la entrada");
//     }
//   } else {
//     alert("Mira qliado, sos menor de edad anda tomar la chechona xd");
//     console.log("Mira qliado, sos menor de edad anda tomar la chechona xd");
//   }
// };

// validarCliente(23);
// validarCliente(24);
// validarCliente(01);
// validarCliente(04);
// validarCliente(06);
// validarCliente(1);
// validarCliente(2, 4);
// validarCliente(3);

// ----------------------------------------------------------------------------------

//Problema 2


let cantidad = prompt('Cuantos alumnos son?');
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('Nombre del alumno ' + (i + 1) ), 0];

}

function tomarAsistencia (nombre, p){
  let precensia = prompt('nombre');
  if (precensia == "p" || precensia == "P") { 
    alumnosTotales[i][1]++;
  }
}

tomarAsistencia();