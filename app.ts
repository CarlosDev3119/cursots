
// crear una funcion que se encargue de obtener 
// // los numeros impares y pares.
// type ArregloNumeros = {
//     numerosPar: number[];
//     numerosImpar: number[];
// }
// type FuncionImparPar = ( numeros: number[]) => ArregloNumeros

// //crear funcion de impares y pares
// const funcionParImpar: FuncionImparPar = ( numeros ) => {

//     const numerosPar: number[] = [];
//     const numerosImpar: number[] = [];


//     for(let i = 0; i < numeros.length; i++) {
//         if( numeros[i] % 2 === 0 ){
//             numerosPar.push( numeros[i] );
//         }else{
//             numerosImpar.push( numeros[i] )
//         }
//     }

//     const respuesta = {
//         numerosPar,
//         numerosImpar
//     }

//     return respuesta;
// }

// let numeros = funcionParImpar( numbers );

// console.log(numeros);





// const suma = (a: number, b: number, callback: (suma: number) => void ) => {
//     let suma = a + b;
//     callback( suma );
// }

// suma( 18, 18, ( x ) => {
//     console.log('la suma es: ', x)
// });


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type ParImpar = ( numbero: number) => boolean;
type Callback = (numerosPar: number[], numerosImpar: number[]) => void

// interface Params {
//     numeros: number[], 
//     funcionPar: ParImpar
//     funcionImpar: ParImpar;
//     callback: Callback;
// }

const obtenerParImpar = ( 
        numeros: number[], 
        funcionPar: ParImpar, 
        funcionImpar: ParImpar, 
        callback: Callback
    ) => {

    const numerosPar   = numeros.filter(funcionPar);
    const numerosImpar = numeros.filter(funcionImpar);

    callback(numerosPar, numerosImpar);
}

const esPar: ParImpar   = (numero) => numero % 2 == 0;
const esImpar: ParImpar = (numero) => numero % 2 !== 0;

const darFormat = (numerosPar: number[], numerosImpar: number[]) =>{
    console.log(`
        Numeros Pares: ${numerosPar}
        Numeros Impar: ${ numerosImpar}
    `)
}

// obtenerParImpar(numbers, esPar, esImpar, darFormat);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map, forEach, filter, reduce

numbers.forEach(( value ) => {
    console.log(value);
});

const newArray = numbers.map(( numero ) => {
    if( numero % 2 === 0 ){
        return numero;
    }
})

const pares = numbers.filter( (numero) => numero % 2 === 0 );

const obtenerCalificaciones = (numeros: number[] ) => {
    let acumulador: number = 0;
    let promedio: number = 0;

    for( let i = 0; i < numeros.length; i++){
        acumulador += numeros[i];
    }

    promedio = acumulador / numeros.length;

    return promedio;

}

const obtenerCalificacionesReduce = numbers.reduce( (acumulador, currenValue ) => acumulador + currenValue, 0) / numbers.length;

const user = {
    nombre: 'carlos'
}












