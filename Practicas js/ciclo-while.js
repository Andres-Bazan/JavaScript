/* Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

*/


var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let numeroDias = dias.length - 1;
let i= 0

while (i <= numeroDias) {
    console.log( dias[i] + '<br>')
    document.write( dias[i] + '<br>');
    i++;
}

