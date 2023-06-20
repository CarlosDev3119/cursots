export interface ITaller {
    servicios: string[];
    mostrarServicios():( string[] | string );
    agregarServicios( servicio: string ): void;
    repararProducto(): string;
}
