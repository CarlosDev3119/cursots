

import { Cafeteria } from "./classes/Cafeteria";
import { Clientes } from "./classes/Clientes";

export interface IPersona {
    nombre: string,
    mesa: number;
}

const persona: IPersona = {
    nombre: 'Diego',
    mesa: 1
}

const persona2: IPersona = {
    nombre: 'Carlos',
    mesa: 2
}

const cliente = new Clientes();
const cafeteria = new Cafeteria();
cliente.generarCliente = persona;
cliente.generarCliente = persona2;

console.log(cliente.data)

console.log( cafeteria.mostrarMenu() );

export type Pedido = {
    [key: string]: any[]
}

const pedido: Pedido = {
    bebidas:[1, 2],
    alimentos: [3, 4]
}

cafeteria.levantarPedido(pedido, cliente.data[0]);

let pedidoCliente = cafeteria.mostrarPedido();

console.log(pedidoCliente)

cafeteria.cancelarPedido();

