// bucles

// while

/* 
mientras se cumpla la condicion
    entonces se realiza la accion

*/


let vecessumar = 10
let totalsuma = 0
while (vecessumar>0){
    totalsuma +=1
    vecessumar-=1
    console.log(`totalsuma: ${totalsuma} |
    vecessumar : ${vecessumar}`)
}
console.log(`total= ${totalsuma}`)
//----------------------------
let respuesta = "HELSINKI"
let acierto = false;
let contador = 0
while(contador < 3 && acierto === false){
    let respUsuario=prompt("Capital de Finlandia")
    if(respUsuario.toLocaleUpperCase()===respuesta){
        acierto=true
        document.write("Muy bien! ACERTASTE!!")
    }
contador++
}
if (acierto===false){
    document.write("Lo sentimos no la pegaste... LOSER!")
}




//-------------------------------------------------------



let respuesta= "HELSINKI"
let acierto=false;
let contador=0


while (contador < 3 && acierto === false) {
    
    let respUsuario=prompt(`Capital de Finlandia`)

    if(respUsuario.toLocaleUpperCase() === respuesta){
        acierto=true
        document.write(`Muy bien ACERTASTE!!`)

    }

contador++

}

if (acierto === false) {
    document.write(`Lo sentimos no la pegaste... LOSER!`)
}