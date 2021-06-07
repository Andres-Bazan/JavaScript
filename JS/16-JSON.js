// JavaScript Objet Notation (JSON)
​
// Es la forma de escribir objetos de javascript en texto plano. Y es utilizado para
// poder enviar, recibir y almacenar información.
// Esto se debe a que los sistemas de almacenamientos como ser una base de datos no reconoce un lenguaje de programación como tal en este caso JS, pero también es aplicado a otros como Phyton, Ruby,C+ etc. Pero todos reconocen que es texto
​
// JSON es usado por muchos lenguajes actualmente y se escribe de la siguiente manera
​
let mensaje = {
  nombre: "Nombre del remitente",
  mail: "Correo del remitente",
  asunto: "Nombre del remitente",
  parrafo: "Este es mi documento con una estructura muy sencilla",
};
​
// ========================JSON=================
​
// {
// "nombre": "Nombre del remitente",
// "mail": "Correo del remitente",
// "asunto": "Nombre del remitente",
// "parrafo": "Este es mi documento con una estructura muy sencilla",
// }
​
// XML Una forma un poco vieja de mandar informacion a los servidores, es usada actualmente y se la considera mas segura que una estructura JSON pero mas compleja y menos flexible que JSON
​
// ========================XML==================
​
// {
{
  /* <Mensaje>
  <Nombre>Nombre del remitente</Nombre>
  <Mail> Correo del remitente </Mail>
  <Asunto>Este es mi documento con una estructura muy sencilla</Asunto>
  <Parrafo>Este es mi documento con una estructura muy sencilla </Parrafo>
</Mensaje>; */
}
// }
​
//======== Metodos Para convertir a texto un Objeto=========
​
// JSON Stringify: convierte a texto un objeto
​
let enTexto = JSON.stringify(mensaje);
console.log(enTexto);
​
// JSON parse: convierte una cadena de texto JSON a su formato original
​
let aObjeto = JSON.parse(enTexto);
console.log(aObjeto);