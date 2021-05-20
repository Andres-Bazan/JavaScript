let pelisPedia = [
  {
    titulo: "Shrek",
    genero: "Comedia - Infantil",
    año: "2000",
    sinopsis: "Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas. Todos fueron expulsados de sus reinos por el malvado Lord Farquaad. Decidido a salvar su hogar, Shrek hace un trato con Farquaad y se prepara para rescatar a la princesa Fiona, quien será la esposa de Farquaad.",
  },
  {
    titulo: "Frozen",
    genero: "Infantil - Musical",
    año: "2019",
    sinopsis: "Elsa tiene un poder extraordinario: es capaz de crear hielo y nieve. Sin embargo, a pesar de lo feliz que la hacen los habitantes de Arendelle, siente que no encaja allá. Después de oír una voz misteriosa, Elsa, acompañada por Anna, Kristoff, Olaf y Sven, viaja a los bosques embrujados y los mares oscuros que se extienden más allá de los límites de su reino para descubrir quién es en realidad y por qué posee un poder tan asombroso.",
  },
  {
    titulo: "Hotel Transylvania",
    genero: "Infantil - Comedia",
    año: "2015",
    sinopsis: "Llegó el día. Por fin, la vampira Mavis y el humano Jonathan se casan en el Hotel Transilvania, regentado por Drácula, padre de la novia. Además, el hotel deja de ser sólo para monstruos y admite sus primeros huéspedes humanos: la familia del novio. Lo que ignoran es que Vlad, el gruñón padre de Drácula, está a punto de llegar al hotel y no pondrá las cosas fáciles a su familia.",
  },
  {
    titulo: "Capitana Marvel",
    genero: "Accíon - Aventura",
    año: "2019",
    sinopsis: "Una guerrera extraterrestre de la civilización Kree se encuentra atrapada en medio de una batalla. Con la ayuda de Nick Fury trata de descubrir los secretos de su pasado mientras aprovecha sus poderes para terminar la guerra.",
  },
];

function ver() {
  for (let i = 0; i < pelisPedia.length; i++) {
    console.log(`titulo: ${pelisPedia[i].titulo}`);
    console.log(`genero: ${pelisPedia[i].genero}`);
    console.log(`anio: ${pelisPedia[i].anio}`);
    console.log(`sinopsis: ${pelisPedia[i].sinopsis}`);
    
  }
};
ver();
