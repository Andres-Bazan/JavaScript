
let valor1 = parseInt(prompt('Ingrese primer numero'));
let valor2 = parseInt(prompt('Ingrese segundo numero'));
let operacion = prompt('Eliga la operacion a realizar, + - / *');

if(isNaN(valor1)){
    console.log('El primer valor ingresado es igual a 0');
    valor1 = 0;
    console.log(`El primer numero = ${valor1}`);
}


if(isNaN(valor2)){
    console.log('El primer valor ingresado es igual a 0');
    valor2 = 0;
    console.log(`El primer numero = ${valor2}`);
}




switch (operacion) {
    case '-':
        console.log(`El resultado de ${valor1} - ${valor2} es igual a ${valor1 - valor2}`)
        break;
    case '+':
        console.log(`El resultado de ${valor1} + ${valor2} es igual a ${valor1 + valor2}`)
        break; 
    case '*':
        console.log(`El resultado de ${valor1} * ${valor2} es igual a ${valor1 * valor2}`)
        break;
    case '/':
        console.log(`El resultado de ${valor1} / ${valor2} es igual a ${valor1 / valor2}`)
        break;           

    default:
        document.write('Error, no selecciono ninguna operacion')
        break;
}