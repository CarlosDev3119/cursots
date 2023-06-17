
export interface IVeterinaria {
    cita: string;
    servicios: string[];
    horario: number;
    generarCita( fecha: string ): void;
    generarCarnet( servicios: string[] ): string;
}


export interface IGalletas{
    sabor: string;
    decorar( decoracion: string): void;
}


