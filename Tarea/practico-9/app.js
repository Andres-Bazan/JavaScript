/*
**Nos piden realizar una agenda telefónica de contactos.**
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Las funciones serán:
------------------------

- aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
- existeContacto(Conctacto): indica si el contacto pasado existe o no.
- listarContactos(): Lista toda la agenda
- buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
- eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
- agendaLlena(): indica si la agenda está llena.
- huecosLibres(): indica cuántos contactos más podemos ingresar.

*Usar LocalStorage para guardar la info de la agenda y para consultar sus datos*
*/

let agenda = JSON.parse(localStorage.getItem("usuarios")) || [];
let contador = 10 - agenda.length;

class Usuario {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

function añadirContacto() {
  let val = agenda.length;
  if (val <= 10) {
    let nombre = prompt("Ingrese su nombre");
    let telefono = parseInt(prompt("Ingrese su numero de telefono"));
    agenda.push(new Usuario(nombre, telefono));
    contador--;
  } else {
    alert("Su buzon esta lleno");
  }
  localStorage.setItem("usuarios", JSON.stringify(agenda));
}


function existeContacto() {
  let pedir = prompt("Ingrese el contacto que desea buscar");
  let user = agenda.find(function (usuario) {
    return usuario.nombre === pedir;
  });
  if (user) {
    console.log(`El contacto ${pedir} fue agregado a la agenda`);
  } else {
    console.error("El contacto no existe");
  }
}

function listarContacto() {
  agenda.forEach(function (usuario) {
    if (agenda.length >= 10) {
      console.log(`Quedan ${contador - agenda} lugares de 10`);
    } else if (agenda.length > 10) {
      alert("Su buzon esta lleno");
    }

    console.log(`Nombre del contacto: ${usuario.nombre}`);
    console.log(`Telefono: ${usuario.telefono}`);
    console.log(`========================`);
  });
}

function buscarContacto() {
  let pedir = prompt("Ingrese contacto que desea buscar");
  let user = agenda.find(function (usuario) {
    return usuario.nombre === pedir;
  });

  if (user) {
    console.log(`Nombre: ${user.nombre}`);
    console.log(`Telefono: ${user.telefono}`);
    console.log("=========================");
  }
}

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
      contador++;
    }
  } else {
    alert("El usuario no existe");
  }
}

function agendaLlena() {
  agenda.forEach(function (usuario) {
    if ((agenda.length = 10)) {
      console.log(agenda.toUpperCase());
    }
  });
}

function huecosLibres(params) {
  console.log(`Le quedan ${contador} lugares para agregar`);
}
