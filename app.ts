import { Canciones, Usuario } from "./interfaces/interfaces";

  
const canciones: Canciones= {
    titulo: 'Bohemian Rhapsody',
    artista: 'Queen',
    album: {
        nombre: 'A Night at the Opera',
        lanzamiento: 1975,
        productor: {
        nombre: 'Roy Thomas Baker',
        estudio: 'EMI Studios, Trident Studios'
        }
    },
    duracion: '6:07',
    genero: 'Rock',
    reproducciones: 5000000,
    popularidad: 4.5
};

canciones.estatus = true;



const usuario: Usuario = {};
usuario.name = 'carlos';
usuario.apellido = 'ortega';
usuario.email = 'carlos@gmail.com';

Object.keys(canciones).forEach( (key) => {
  console.log(canciones[key]);
})


console.log(usuario)
  
