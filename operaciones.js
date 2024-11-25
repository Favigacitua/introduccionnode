
import { readFileSync, writeFileSync } from 'fs';

const registrar = (nombre,edad,animal, color, enfermedad) => {
    const citas = JSON.parse(readFileSync('citas.json', 'utf-8'));

    const nuevaCita = { nombre, edad, animal, color, enfermedad};
    
    citas.push(nuevaCita)

    writeFileSync('citas.json', JSON.stringify(citas, null, 2));

    console.log('cita registrada con exito.')

}

const leer = () => {
   
    const citas = JSON.parse(readFileSync('citas.json', 'utf8'));

   
    console.log('Citas registradas:');
    console.log(citas);
};

export default { registrar,leer};

