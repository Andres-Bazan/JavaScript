// Estructura de control

// If...else

/*
si se cumple la condicion
    entonces realizar la accion
si no se cumple la condicion
    entonces hacer otra cosa
*/

//El triple igual (===) compara las variables


let numpar= 10;

if (numpar % 2 === 0) {
    //accion
    console.log(`El numero es par`);
} else{
    //otra accion
    console.warn(`El numero no es par`);
}




let num = parseInt(prompt(`Ingrese un numero`))


if(isNaN(num)){
    console.log(`Ingrese un numero`)
    
} else {
    
if(num === 10) {
    console.log(`El numero es igual a 10`);

} else if(num > 10) {
    console.log(`El numero es mayor que 10`);

}else if(num !== 10) {
    console.log(`El valor ${num} es distinto de 10`)
}

else {
    console.log(`El numero es menor que 10`)
}


}


//fiesta
//Solo puede entrar un mayor de edad osea >= 18
//si no es mayor de edad entonces debe ir acompañado de un tutor

let edad = 15;
let tutor = true;

if(edad >= 18){
    console.log(`Bienvenido a la JODA!!`);
} else if(tutor === true) {
    console.log(`Bienvenidos a la JODA!! no se separe de su tutor`);

} else {
    console.log(`Salga de aqui, usted no puede disfrutar de la vida`)
}

if(edad <18 && tutor === false) {
    console.log(`Salga de aqui, usted no puede disfrutar de la vida`)

} else if(edad >= 18 || tutor === true) {
    console.log(`Bienvenido a la JODA!!`)

}