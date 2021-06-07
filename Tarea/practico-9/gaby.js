let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

let espacio = 10 - agenda.lenght;


class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// function agregarContacto (nombre, telefono) {
//     if (agenda.lenght > 10){
//         document.write ('Superó la cantidad de contactos posibles de ingresar.');
//     } else {
//         agenda.push (new Contacto (nombre, telefono));
        
//         localStorage.setItem("agenda", JSON.stringify(agenda));
//     }
// }


function añadirContacto() {
    let val = agenda.length;
    if (val <= 10) {
      let nombre = prompt("Ingrese su nombre");
      let telefono = parseInt(prompt("Ingrese su numero de telefono"));
      agenda.push(new Contacto(nombre, telefono));
      espacio--;
    } else {
      alert("Su buzon esta lleno");
    }
    localStorage.setItem("usuarios", JSON.stringify(agenda));
  }
  



function existeContacto (nombre){
    let contactoExistente = agenda.find (function(contacto){
        return contacto.nombre.toUpperCase () === nombre.toUpperCase();

    });
    if (contactoExistente){
        console.log (`${nombre} ya existe en su agenda`);
    } else {
        console.log ('El contacto no fue encontrado en su agenda');
    }
}

function listarContactos() {
  agenda.forEach(function (contacto) {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`========================`);
 });
}

function buscarContacto (nombre){
    let encontrado = agenda.find (function(numero){
        return numero.nombre.toUpperCase() === nombre.toUpperCase();

    });
    if (encontrado){
        console.log (`${encontrado.telefono}`);
    } else {
        console.log ('El contacto no existe');
    }
}


// function eliminarContacto(nombre) {
//   let eliminado = agenda.findIndex(function (eliminado) {
//     return eliminado.nombre.toUpperCase() === nombre.toUpperCase();
//   });

//   if (eliminado > -1) {
//     let validar = confirm("Está seguro que quiere eliminar el usuario?");

//     if (validar) {
//       agenda.splice(eliminado, 1);
//       localStorage.setItem("agenda", JSON.stringify(agenda));  
//       console.log("El contacto ha sido borrado");
//     }
//   } else {
//     console.warn("El contacto no existe");
//   }
// }

function eliminarContacto(nombre) {
    let eliminar = prompt("Ingrese el nombre del contacto que desea borrar");
    let idUser = agenda.findIndex(function (usuario) {
      return usuario.nombre === eliminar;
    });
  
    if (idUser > -1) {
      let validar = confirm("Está seguro que quiere eliminar el usuario?");
  
      if (validar) {
        agenda.splice(idUser, 1);
        localStorage.setItem("usuarios", JSON.stringify(agenda));
        console.log("El usuario ha sido borrado");
        espacio++;
      }
    } else {
      alert("El usuario no existe");
    }
  }
  

function agendaLlena (){
    if (agenda.lenght >= 10){
        console.warn ('La agenda está llena');
    } else {
        console.log ('Aún hay lugar en la agenda');
    }
}

function huecosLibres (){
    if (agenda.lenght < 10) {
        console.log (`Le quedan ${espacio} lugares en la agenda`);
    } else {
        console.warn ('Ya no hay espacio en la agenda');
    }
}