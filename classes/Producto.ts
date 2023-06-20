export class Producto {

    nombreProducto: string;
    descripcion: string;
    problema: string;

    constructor(
        nombreProducto: string,
        descripcion: string,
        problema: string
    ){
        this.nombreProducto = nombreProducto;
        this.descripcion = descripcion;
        this.problema = problema;
    }

}