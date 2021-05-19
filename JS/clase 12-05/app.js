// callbacks
// Son funciones que se envian como parametros y se ejecutan despues de un metodo.

let numeros = [2, 5, 6, 12, 24, 37];

let numerosOrdenados =numeros.sort(function (num1, num2){
    
    return num1 - num2;
});

// Filter

let pares = numeros.filter(function(num){

    return num%2 === 0

});


// Y el metodo "Find"


let alumnos = ["Lucas", "Pablo", "Andres", "Fabrizio"]

alumnos.find(function(alumno){
    return alumno === 'Andres';
});


//map

let numerosDobles = numeros.map(function(num){
    return num * 2
})