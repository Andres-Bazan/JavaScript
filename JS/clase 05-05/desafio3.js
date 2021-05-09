
let a= 0
let e= 0
let i= 0
let o= 0
let u= 0
let blancos= 0

let Texto = prompt('Escriba un texto cualquiera');
let txt = Texto.toLowerCase().split("")
 
for(k=0;k < txt.length;k++){
    
    switch(txt[k]){
        case "a":
        case "á":
            a++;
            break;
        case "e":
        case "é":
            e++;
            break;
        case "i":
        case "í":
            i++;
            break;
        case "o":
        case "ó":
            o++;
            break;
        case "u":
        case "ú":
            u++;
            break;
        case " ":
            blancos++;
    }
}

let totalVocales = a+e+i+o+u;

document.write("Hay " +  a + " vocales 'a'");
document.write("Hay " +  e + " vocales 'e'");
document.write("Hay " +  i + " vocales 'i'");
document.write("Hay " +  o + " vocales 'o'");
document.write("Hay " +  u + " vocales 'u'");

document.write("<br>");
document.write("Total de vocales: " + totalVocales);
document.write("<br>");
document.write("Total de espacios en blanco: " + blancos);
document.write("<br>");
document.write("Total de carácteres escritos: " + txt.length);
document.write("<br>");
document.write("Texto original: " + txt.join("") + "");

