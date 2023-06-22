import { Pedido } from "../app";

type Bebida = { [key: number]: string }
type Alimento = { [key: number]: string }

type Menu = {
    bebidas: Bebida[];
    alimentos: Alimento[];
}


export class Cafeteria {

    menu: Menu;
    pedidoCliente: any;

    constructor(){
        this.menu = {
            bebidas: [
                {1: 'Coca cola'},
                {2: 'Fanta'},
                {3: 'Frappuchino'},
                {4: 'Te helado'},
                {5: 'Coca cola'}
            ],
            alimentos: [
                {1: 'Crepas'},
                {2: 'HotCakes'},
                {3: 'Empanadas'},
                {4: 'Alitas'},
                {5: 'Boneless'}
            ]
        };

        this.pedidoCliente = []
    }

    mostrarMenu(){
        return this.menu;
    }

    levantarPedido( pedido: Pedido, cliente: any ){
        this.pedidoCliente.push(cliente);
        if( Object.keys(pedido).length >= 1){

            Object.keys(pedido).forEach( (key, j) => {
                
                if( key === 'alimentos'){
                    pedido.alimentos.forEach( val => {
                        this.pedidoCliente.push(this.menu.alimentos[val]);
                    })
                }

                if( key === 'bebidas'){
                    pedido.alimentos.forEach( val => {
                        this.pedidoCliente.push(this.menu.bebidas[val]);
                    })
                }

            });
            
        }else{

            return 'No Hay datos en el pedido';
        }

    }

    cancelarPedido(){
        this.pedidoCliente = [];
    }

    mostrarPedido(){
        return this.pedidoCliente;
    }



}