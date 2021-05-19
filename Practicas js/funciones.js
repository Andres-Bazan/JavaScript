// Llamar a la funcion

// function saludo(nombre1) {
//     document.write('Hola, como estas? ' + nombre1)       //Intrucciones
//     console.log('Hola, como estas? ' + nombre1)

// }

// saludo("Andres");


// ---------------------------



// var calculadora = function (numero1, numero2) {
//     var numero1 = numero1;
//     var numero2 = numero2;
    
//     return numero1 + numero2;
    
// }

// document.write(calculadora(40,50));

// document.write( "<br>" );

// document.write(calculadora(10,50));


// -----------------------------


var numeroMaximo = function (valor1, valor2) {
    if ( valor1 > valor2 ) {
        return valor1;
    } else {
        return valor2;
    }

}

document.write('El numero maximo es:' + numeroMaximo(1,7))

// numeroMaximo(10,20);