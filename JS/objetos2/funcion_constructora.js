//Funciones constrictoras

//Plantilla para crear varios objetos

//Por un lado las propiedades
//Por otr lado los metodos



function Movies(titulo, sinopsis, director, reparto) {
 
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.director = director;
    this.reparto = reparto;
}


Movies.prototype.listar = function (params) {
    console.log('Titulo:', this.titulo);
    console.log('sinopsis:', this.sinopsis);
    console.log('director:', this.director);
    console.log('===============================');
}

let jurassic = new Movies(
    'Jurassic Park',
    'Dinosaurios que escapan y atacan personas',
    'Steven Spielberg', 
    'Carlos, Herminia, José, Alberto'
);

let avengers = new Movies(
    'The Avengers',
    'Superheroes que salvan al mundo',
    'Marvel',
    'Steve Roger, Tony Stark, Bruce Banner'
);