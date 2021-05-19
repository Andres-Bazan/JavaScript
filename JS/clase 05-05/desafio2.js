let numero = 0 ;
let resultado = 0;

do{
    numero = parseInt(prompt("Escriba algo"))
    if(isNaN(numero)){
         numero = 0 
        // console.error('Debe ingresar un número')
    }
    resultado = resultado + numero 

}

while (numero != 0); {
    alert('NaN')
}



// -------------------------------------


let texto = prompt("Ingrese la palabra para contar las vocales:")
let vocales = 0

for(let i = 0; i< texto.length; i++){
    if(texto.charAt(i)=="a" || texto.charAt(i)=="e"||texto.charAt(i)=="i" || texto.charAt(i)=="o" || texto.charAt(i)=="u"){
        vocales++
    }
}

console.log(`La cantidad de vocales en el texto es de ${vocales}`)

