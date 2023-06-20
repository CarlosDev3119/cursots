
import { ITaller } from "../interfaces/interfaces";
import { Producto } from "./Producto";

export class Taller implements ITaller {

    servicios: string[];
    producto: Producto;

    constructor(
        producto: Producto
    ){
        this.producto  = producto;
        this.servicios = [];
    }

    mostrarServicios(){
        let longitud = this.servicios.length;
        return (this.servicios !== undefined && longitud > 0 ) ? this.servicios : 'No existen servicios';
    }

    agregarServicios( servicio: string){
        this.servicios.push(servicio);
    }

    repararProducto(){

        return `
            El producto: ${this.producto.nombreProducto}, 
            descripcion: ${this.producto.descripcion} con el problema registrado: '${this.producto.problema}' Se ha reparado 
        `

    }

}




















//     constructor(
//         nombreProducto: string,
//         descripcion: string,
//         problema: string
//     ){
//         super(nombreProducto, descripcion, problema);
//         this.servicios = [];
//     }

//     mostrarServicios(){
//         let longitud = this.servicios.length;
//         return (this.servicios !== undefined && longitud > 0 ) ? this.servicios : 'No existen servicios';
//     }

//     agregarServicios( servicio: string){
//         this.servicios.push(servicio);
//     }

//     repararProducto(){

//         return `
//             El producto: ${this.nombreProducto} con el problema registrado: '${this.problema}' Se ha reparado 
//         `

//     }

// }