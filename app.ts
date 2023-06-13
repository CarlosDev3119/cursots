// //funcion simple
// const saludar = (): void => {

//     console.log("hola");

// }

// saludar();

//funcion con parametros

// const saludar2 = ( mensaje: string, numero?: number ): void => {

//     console.log("hola " + mensaje + '-', numero);

// }

// saludar2('que haces?');
// saludar2('quiero verte');

//funcion con retorno de valores y parametros

// const tablasMultiplicar = ( base: number, limite?: number ): string => {

//     let resultado: string = '';
    
//     if(!limite) limite = 10;

//     for(let i = 1; i <= limite; i++){
//         resultado += `${base} x ${i} = ${ base * i}\n`;
//     }

//     return resultado;

// }

// let respuesta: string = tablasMultiplicar(18, 15);
// console.log(respuesta);

// respuesta = tablasMultiplicar(12, 18);
// console.log(respuesta);

interface Alumno {
    nombre: string;
    carrera: string;
    parcial: string;
    calificaciones: number[];
    promedioMinimo: number;
}

const alumno: Alumno = {
    nombre:'Jesus',
    carrera:'Ing Sistemas',
    parcial:'Segundo',
    calificaciones: [78, 76, 73, 67, 70],
    promedioMinimo: 70
}

//crear una funcion que se encargue de calcular el promedio del alumno y retornara un mensaje (debe de recibir el objeto completo)
//mencionando el promedio actual y si esta aprobado o no en el parcial 
// Alumno: Jesus, Promedio: ??, Parcial: segundo, Carrera: ??, AProbado: ??

const calcularPromedio = ({calificaciones, carrera, nombre, parcial, promedioMinimo}: Alumno): string => {

    let promedio: number,
        totalCalificaciones: number = 0,
        mensaje: string;

    for(let i = 0; i < alumno.calificaciones.length; i++) {

        totalCalificaciones += calificaciones[i];

    }

    promedio = totalCalificaciones/calificaciones.length;

    mensaje = `Alumno: ${nombre}, Promedio: ${promedio} Parcial: ${parcial}, Carrera: ${carrera}, AProbado: ${(promedio >= promedioMinimo) ? 'si': 'no'}`;

    return mensaje;
}

const calcularPromedioLambda = ({calificaciones, carrera, nombre, parcial, promedioMinimo}: Alumno): string => {

    const promedio = calificaciones.reduce((acumulador, currentValue) => acumulador + currentValue, 0) / calificaciones.length;
    
    return `Alumno: ${nombre}, Promedio: ${promedio} Parcial: ${parcial}, Carrera: ${carrera}, AProbado: ${(promedio >= promedioMinimo) ? 'si': 'no'}`;
}

// let respuesta = calcularPromedio(alumno);
let respuesta = calcularPromedioLambda(alumno);

console.log(respuesta);





