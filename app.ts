import { Producto, Taller } from "./classes";


const laptop = new Producto( 'Asus TUF', 'Laptop color gris de 16 gb de ram con una tarjeta grafica 3080 y 1tb de almcenamiento ssd', 'El sistema operativo necesita un formateo');
const taller = new Taller( laptop );

taller.agregarServicios('Instalacion de windows');
taller.agregarServicios('Formateo de windows');
taller.agregarServicios('Cambio de memoria o ampliacion');

console.log(taller.mostrarServicios());

console.log(taller.repararProducto());








