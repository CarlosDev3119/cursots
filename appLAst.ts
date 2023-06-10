
//strings
let mensaje: string = 'Pedro salio a comer';
let mensajeAdicional: string = 'carnitas en el mercado';

let mensajeCompleto: string = mensaje + ' ' + mensajeAdicional;
//acceder a los caracteres de una cadena charAt();
// console.log(mensajeCompleto.charAt(2));

// convertir a mayusculas 
let mensajeMayusculas: string = mensajeCompleto.toUpperCase();
// console.log(mensajeMayusculas);

//convertir string a minusculas
let mensajeMinusculas: string = mensajeCompleto.toLowerCase();
// console.log(typeof mensajeMinusculas);

let mensajeConGuiones: string = mensaje.replace(/ /g, '_');
// console.log(mensajeConGuiones);


//numbers
let edad: number = 19,
    numero: number = 10,
    numeroNegativo: number = -19,
    suma: number;

// operadores matematicos basicos + - * / % Math
// suma
// console.log( numero + numeroNegativo);
// console.log( numero - numeroNegativo);
// console.log( numero * numeroNegativo);
// console.log( numero / numeroNegativo);

//truncar decimales
suma = Number((numero / numeroNegativo).toFixed(4));
// console.log(suma);

//redondear numeros
suma = Math.round(numero / numeroNegativo);
// console.log(suma);

//boolean
let siExiste = true;
let tieneContra = false;

//arrays

const peliculas: string[] = ['Avengers', 'Jhon Wick', 'Spiderman'];

//agregar datos a un arreglo push()
peliculas.push('La sirenita', 'Samurai X');

//quitar datos de un arreglo pop()
peliculas.pop();

//quita datos al principio de un arreglo
peliculas.shift()

//agrega datos a un arreglo al principio
peliculas.unshift('Alicia en el pais de las maravillas');

// console.log( peliculas[ peliculas.length - 1 ] );


// interface UsuarioInterface {
//   idUsuario: number;
//   nombre: string;
//   email: string;
//   telefono: string;
//   permisos: string[];
//   direccion: {
//       numeroInterior: number;
//       calle: string;
//       colonia: string;
//   };
//   estatus: boolean;
// }

interface UsuarioInterface {
  idUsuario: number;
  nombre: string;
  email: string;
  telefono: string;
  permisos: string[];
  direccion: Direcciones;
  estatus: boolean;
}

interface Direcciones {
  numeroInterior: number;
  calle: string;
  colonia: string;
}

//objetos
const nuevoUsuario: UsuarioInterface = {
  idUsuario: new Date().getTime(),
  nombre: 'Obed',
  email: 'obed@gmail.com',
  telefono: '55231234545',
  permisos: ['ADMIN','SUPER'],
  direccion: {
    numeroInterior: 56,
    calle: 'soledad',
    colonia: 'San pancho'
  },
  estatus: true
}

//desestructurar un objeto
const { nombre, direccion, email, permisos  } = nuevoUsuario;
const { calle, numeroInterior, colonia } = direccion;

console.log(`
  Nombre de empleado: ${nombre}
  Direccion:  ${ numeroInterior} ${calle} ${colonia}
  email: ${email}
  permisos: ${ permisos[0] } y ${ permisos[1] }
`);


interface VideoJuegos {
  nombreVideojuego: string;
  restriccionEdad: string;
  desarrolladora: string;
  plataformas: string[];
}

const videoJuego = {
  nombreVideojuego: 'Elden Ring',
  restriccionEdad: '+18',
  desarrolladora: 'From Software',
  plataformas: ['xbox', 'ps', 'pc'],
}

interface Pokemon {
  id: number;
  nombre: string;
  tipo: string[];
  evolucion: Evoluciones;
  habilidades: string[];
  stats: Stats;
  legendario: boolean;
}

interface Evoluciones {
  nivel: number;
  nombre: string;
}

interface Stats {
  hp: number;
  ataque: number;
  defensa: number;
  velocidad: number;
}

const pokemon: Pokemon = {
  id: 1,
  nombre: 'Bulbasaur',
  tipo: ['Planta', 'Veneno'],
  evolucion: {
    nivel: 16,
    nombre: 'Ivysaur'
  },
  habilidades: ['Espesura', 'Clorofila'],
  stats: {
    hp: 45,
    ataque: 49,
    defensa: 49,
    velocidad: 45
  },
  legendario: false
};

interface Canciones {
  titulo: string;
  artista: string;
  album: Album;
  duracion: string;
  genero: string;
  reproducciones: number;
  popularidad: number;
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


const cancion: Canciones = {
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











