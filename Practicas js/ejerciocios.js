let Platino = []

class Pokemon {
    constructor(habilidad, tipo, nivel){
        this.habilidad = habilidad;
        this.tipo = tipo;
        this.nivel = nivel;
    }

    imprimeDatos(){
        console.log(`El pokemon que eligio es ${this.habilidad}`)
    }
   
}

for (let i = 0; i < 3; i++) {
    let habilida = prompt('Eliga')
    
}