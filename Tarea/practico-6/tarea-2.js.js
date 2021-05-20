/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/
function tarea2(num = parseInt(prompt('Ingrese un número'))) {
    
    if (num % 2 == 0) {
        console.log(`El numero ${num} es par`)
        document.write(`El numero ${num} es par`)

    } else {
        console.log(`El numero ${num} es impar`)
        document.write(`El numero ${num} es impar`)
    }






    
}

tarea2();