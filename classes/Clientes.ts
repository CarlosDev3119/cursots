
import { IPersona } from "../app";
// import { data } from "../data/data";

export interface ICliente {
    cliente: IPersona;
    idCliente: number;
}

export class Clientes{
    data: ICliente[];

    constructor() {
        this.data = [];
    }

    set generarCliente( client: IPersona ) {

        const cliente: ICliente = {
            cliente: client,
            idCliente: new Date().getTime(),
        }

        this.data.push(cliente);
    }

}