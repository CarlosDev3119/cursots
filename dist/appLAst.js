"use strict";
//strings
let mensaje = 'Pedro salio a comer';
let mensajeAdicional = 'carnitas en el mercado';
let mensajeCompleto = mensaje + ' ' + mensajeAdicional;
//acceder a los caracteres de una cadena charAt();
// console.log(mensajeCompleto.charAt(2));
// convertir a mayusculas 
let mensajeMayusculas = mensajeCompleto.toUpperCase();
// console.log(mensajeMayusculas);
//convertir string a minusculas
let mensajeMinusculas = mensajeCompleto.toLowerCase();
// console.log(typeof mensajeMinusculas);
let mensajeConGuiones = mensaje.replace(/ /g, '_');
// console.log(mensajeConGuiones);
//numbers
let edad = 19, numero = 10, numeroNegativo = -19, suma;
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
const peliculas = ['Avengers', 'Jhon Wick', 'Spiderman'];
//agregar datos a un arreglo push()
peliculas.push('La sirenita', 'Samurai X');
//quitar datos de un arreglo pop()
peliculas.pop();
//quita datos al principio de un arreglo
peliculas.shift();
//agrega datos a un arreglo al principio
peliculas.unshift('Alicia en el pais de las maravillas');
//objetos
const nuevoUsuario = {
    idUsuario: new Date().getTime(),
    nombre: 'Obed',
    email: 'obed@gmail.com',
    telefono: '55231234545',
    permisos: ['ADMIN', 'SUPER'],
    direccion: {
        numeroInterior: 56,
        calle: 'soledad',
        colonia: 'San pancho'
    },
    estatus: true
};
//desestructurar un objeto
const { nombre, direccion, email, permisos } = nuevoUsuario;
const { calle, numeroInterior, colonia } = direccion;
console.log(`
  Nombre de empleado: ${nombre}
  Direccion:  ${numeroInterior} ${calle} ${colonia}
  email: ${email}
  permisos: ${permisos[0]} y ${permisos[1]}
`);
const videoJuego = {
    nombreVideojuego: 'Elden Ring',
    restriccionEdad: '+18',
    desarrolladora: 'From Software',
    plataformas: ['xbox', 'ps', 'pc'],
};
const pokemon = {
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
const cancion = {
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
//# sourceMappingURL=appLAst.js.map