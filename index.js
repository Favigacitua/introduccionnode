import operaciones from './operaciones.js'; 

const { registrar, leer } = operaciones;

const argumentos = process.argv.slice(2); 
const operacion = argumentos[0]; 

if (operacion === 'registrar') {
    
    const [ , nombre, edad, animal, color, enfermedad ] = argumentos;
    registrar(nombre, edad, animal, color, enfermedad); 
    
} else if (operacion === 'leer') {
    leer(); 
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}