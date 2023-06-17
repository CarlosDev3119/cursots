

// // interface Generic<T> {
// //     primero: T;

// // }

// // const genericObject: Generic<number> = {
// //     primero: 19
// // };

// // console.log(genericObject.primero);



// interface InterfacePersona  {
//     nombre: string;
//     correo: string;
// }

// interface IEstudiante extends InterfacePersona {
//     curso: string;
//     cursoActual(): void;
// }
  

// class Persona implements InterfacePersona {

//     nombre: string;
//     correo: string;

//     constructor(nombre: string, correo: string){
//         this.nombre = nombre;
//         this.correo = correo;
//     }
// }


// class Estudiante extends Persona implements IEstudiante{

//     curso: string;

//     constructor( nombre: string, correo: string, curso: string){
//         super(nombre, correo);
//         this.curso = curso;
//     }

//     cursoActual(): void {
//         console.log(`Alumno: ${this.nombre} Curso: ${this.curso}, Correo del alumno: ${this.correo}`);
//     }
    


// }

// class Animal {
//     private nombre: string;
//     protected edad: number;
  
//     constructor(nombre: string, edad: number) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
  
//     protected emitirSonido(): void {
//       console.log("¡Haciendo sonidos!");
//     }
// }
  
// class Perro extends Animal {
    
//     constructor(nombre: string, edad: number) {
//       super(nombre, edad);
//     }
  
//     ladrar(): void {
//       console.log("¡Guau guau!");
//       this.emitirSonido();  
//     }


// }

// const perro = new Perro('Cooper', 10);
// perro.ladrar()

// const estudiante = new Estudiante('Carlos Ortega', 'carlos@gmail.com','Curso de TS');
// estudiante.cursoActual();