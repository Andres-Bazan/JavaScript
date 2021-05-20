let persona = {
    nombre: "Andres",
    edad: 20,
    dni: 43360052,
    Domicilio: "Balcarce - 2857",
    hijos: 0,
    profesíon: "Estudiante de programacion",
    saludar: function (nombre = this.nombre){
        console.log(`Hola, mi nombre es ${nombre}`)
    },

    listar:function() {       
        console.log(`nombre: ${this.nombre}`);
        console.log(`edad: ${this.edad}`);
        console.log(`dni: ${this.dni}`);
        console.log(`Domicilio: ${this.Domicilio}`);
        console.log(`prefesíon: ${this.profesíon}`);
    
    },
};

console.log(persona.listar());






