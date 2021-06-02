// Estructura condicional
// switch

let numero = 10

switch (numero) {
    case 10:
        //accion
        console.log('El número es 10');
        break;
    case 25:
        //accion
        console.log('El número es 25');
        break;
    case 3:
        //accion
        console.log('El número es 3');
        break;

    default:
        console.log('El número es de otro valor');
        //accion
        break;

}

//-------------------------------
let diaNumero = new Date().getDay()

switch (diaNumero) {
    case 0:
        console.log('Hoy es Domingo');
        break;
    case 1:
        console.log('Hoy es Lunes');
        break;
    case 2:
        console.log('Hoy es Martes');
        break;
    case 3:
        console.log('Hoy es Miercoles');
        break;
    case 4:
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;

    default:
        console.log('Hoy es Sábado');
        break;
}

//-----------------------------

let num = 5

switch (true) {
    case num === 10:
        console.log('El numero es igual a 10');
        break;
    case num % 2 === 0:
        console.log('El numero es par');
        break;
    default:
        console.log('No se que más hacer');
        break;
}
//-----------------------------

let comando = prompt('Ingrese un comando (alerta, consola, print)')

switch (comando) {
    case 'alerta':
        alert('Usando switch en un alert')
        break;
    case 'consola':
        console.log('Usando switch en la consola');
        break;
    case 'print':
        document.write('Usando switch en el navegador');
        break;
    default:
        console.error('No existe ese comando, no sea mala persona')
        break;
}





