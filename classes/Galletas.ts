import { IGalletas } from "../interfaces/interfaces";

export class Galletas implements IGalletas {

    public sabor: string;
    protected forma: string;
    private decoracion: string;

    constructor(sabor: string, forma: string, decoracion: string) {
        this.sabor = sabor;
        this.forma = forma;
        this.decoracion = decoracion;
    }

    decorar( decoracion: string){
        this.decoracion = decoracion;
    }

    set cambiarSabor( sabor: string ){
        this.sabor = sabor;
    }
    
    get obtenerGalleta(){

        return `
            La galleta tiene forma de: ${this.forma} 
            Su sabor es: ${this.sabor}
            con decoracion: ${this.decoracion}
        `
    }

}