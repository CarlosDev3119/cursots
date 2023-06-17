
import { Galletas, Veterinaria } from "./classes";


const galletasMarias = new Galletas('vainilla', 'cuadrada', 'chispas de chocolate');

galletasMarias.decorar('Bombon con mermelada');

galletasMarias.cambiarSabor = 'chocolate';

console.log(galletasMarias.obtenerGalleta);



const veterinaria = new Veterinaria('Gato', 5 , new Date().getTime() );

veterinaria.obtenerServicios;

veterinaria.generarCita( new Date().getDate().toString() + '-' + '06' )

const carnet = veterinaria.generarCarnet(['baño', 'corte de pelo']);

console.log(carnet);





