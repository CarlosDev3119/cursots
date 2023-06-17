import { IVeterinaria } from "../interfaces/interfaces";
import { Animal } from "./Animal";

export class Veterinaria extends Animal implements IVeterinaria {

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

// const response = this.servicios.filter(( servicioClase, i ) => servicioClase === servicios[i] );

// servicios.forEach( servicioCliente => {
    
//     if( this.servicios.includes( servicioCliente) ){
//         serviciosDisponibles += `${ servicioCliente }, `;
//     }

// })

