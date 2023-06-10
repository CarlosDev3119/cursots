export interface Canciones {
    titulo: string;
    artista: string;
    album: Album;
    duracion: string;
    genero: string;
    reproducciones: number;
    popularidad: number;
    [key:string]: any;
}
  
interface Album {
  nombre: string;
  lanzamiento: number;
  productor: Productor;
}

interface Productor {
  nombre: string;
  estudio: string;
}

export interface Usuario {
    [key: string]: any
}

  