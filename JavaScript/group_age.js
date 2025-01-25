'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Completa la funcion 'groupByAge' a continuacion.
 *
 * La funcion recibe:
 *  - personas (Array<{nombre: string, edad: number}>): Un arreglo de objetos con las propiedades "nombre" y "edad".
 *
 * Devuelve:
 *  - Object: Un objeto donde las claves son los rangos de edad ("0-18", "19-35", "36-60", "60+") y los valores son arreglos de nombres.
 */

function groupByAge(personas) {
    const resultado = {
        "0-18": [],
        "19-35": [],
        "36-60": [],
        "60+": []
    };
    personas.forEach(persona => {
        if (persona.edad <= 18) {
            resultado["0-18"].push(persona.nombre);
        } else if (persona.edad <= 35) {
            resultado["19-35"].push(persona.nombre);
        } else if (persona.edad <= 60) {
            resultado["36-60"].push(persona.nombre);
        } else {
            resultado["60+"].push(persona.nombre);
        }
    });

    return resultado;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const personas = [];

    for (let i = 0; i < n; i++) {
        const [nombre, edad] = readLine().trim().split(' ');
        personas.push({ nombre, edad: parseInt(edad, 10) });
    }

    const result = groupByAge(personas);
  
    // Formatear el objeto en el formato esperado
    console.log(`0-18: ${result["0-18"].join(',')}`);
    console.log(`19-35: ${result["19-35"].join(',')}`);
    console.log(`36-60: ${result["36-60"].join(',')}`);
    console.log(`60+: ${result["60+"].join(',')}`);
}
