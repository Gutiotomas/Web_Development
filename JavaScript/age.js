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
 * Completa la funcion 'getAdults' a continuacion.
 *
 * La funcion recibe un parametro:
 *  - personas (Array<{nombre: string, edad: number}>)
 *
 * Devuelve:
 *  - Array<string> (nombres de las personas mayores de edad)
 */

function getAdults(personas) {
    let adults = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad >= 18) {
            adults.push(personas[i].nombre);
        }
    }
    return adults;
}

function main() {
    const n = parseInt(readLine()); // Numero de personas
    const personas = [];

    for (let i = 0; i < n; i++) {
        const [nombre, edad] = readLine().split(' ');
        personas.push({ nombre, edad: parseInt(edad) });
    }

    const result = getAdults(personas);
    console.log(result.join('\n'));
}