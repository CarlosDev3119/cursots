

// // Single responsability unique

// interface IGalletas{
//     sabor: string;
//     decorar( decoracion: string): void;
// }


// class Galletas implements IGalletas {

//     public sabor: string;
//     protected forma: string;
//     private decoracion: string;

//     constructor(sabor: string, forma: string, decoracion: string) {
//         this.sabor = sabor;
//         this.forma = forma;
//         this.decoracion = decoracion;
//     }

//     decorar( decoracion: string){
//         this.decoracion = decoracion;
//     }

//     set cambiarSabor( sabor: string ){
//         this.sabor = sabor;
//     }
    
//     get obtenerGalleta(){

//         return `
//             La galleta tiene forma de: ${this.forma} 
//             Su sabor es: ${this.sabor}
//             con decoracion: ${this.decoracion}
//         `
//     }

// }

// const galletasMarias = new Galletas('vainilla', 'cuadrada', 'chispas de chocolate');

// galletasMarias.decorar('Bombon con mermelada');

// galletasMarias.cambiarSabor = 'chocolate';

// console.log(galletasMarias.obtenerGalleta);

interface IVeterinaria {
    cita: string;
    servicios: string[];
    horario: number;
    generarCita( fecha: string ): void;
}


class Animal {

    tipo: string;
    edad: number;

    constructor(tipo: string, edad: number) {
        this.tipo = tipo;
        this.edad = edad;
    }

}

class Veterinaria extends Animal implements IVeterinaria {

    cita: string;
    servicios: string[];
    horario: number;

    constructor(
        tipo: string, 
        edad: number, 
        horario: number
    ){

        super(tipo, edad);
        this.cita = '';
        this.servicios = ['baño', 'corte de pelo', 'anestecia'];
        this.horario = horario;
    }

    
    get obtenerServicios(){
        
        let serviciosDisponibles: string = '';
        
        this.servicios.forEach( servicio => {
            serviciosDisponibles += `${servicio}, `
        })
        
        serviciosDisponibles = serviciosDisponibles.substring(0, serviciosDisponibles.length - 2);
        
        return `Servicios disponibles: ${serviciosDisponibles}`;
    }
    
    set agregarServicio( servicio: string){
        this.servicios.push(servicio);
    }


    generarCita( fecha: string){
        this.cita = fecha;
    }

    generarCarnet( servicios: string[] ) {

        return `
            Tipo de Mascota: ${this.tipo}
            Edad de Mascota: ${this.edad}
            Horario de cita: ${this.horario}
            Fecha: ${this.cita}
            Servicios Contratados: ${this.servicios.filter(( servicioClase, i ) => servicioClase === servicios[i] )}
        `
    }

}


const veterinaria = new Veterinaria('Gato', 5 , new Date().getTime() );

const servicios = veterinaria.obtenerServicios;

veterinaria.generarCita( new Date().getDate().toString() + '-' + '06' )

const carnet = veterinaria.generarCarnet(['baño', 'corte de pelo']);

console.log(carnet);





// const response = this.servicios.filter(( servicioClase, i ) => servicioClase === servicios[i] );

// servicios.forEach( servicioCliente => {
    
//     if( this.servicios.includes( servicioCliente) ){
//         serviciosDisponibles += `${ servicioCliente }, `;
//     }

// })
