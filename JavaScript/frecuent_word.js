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
 * Completa la funcion 'findMostFrequentWords' a continuacion.
 *
 * La funcion recibe un parametro:
 *  - texto (string): Un texto en el cual encontrar las palabras mas frecuentes.
 *
 * Devuelve:
 *  - Array<string>: Un arreglo de palabras ordenadas alfabeticamente si hay empate.
 */

function findMostFrequentWords(texto) {
    texto = texto.toLowerCase();
    const palabras = texto.split(/\s+/);
    const contador = {};
    
    for (const palabra of palabras) {
        if (palabra in contador) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }
    let maxFrecuencia = 0;
    for (const palabra in contador) {
        if (contador[palabra] > maxFrecuencia) {
            maxFrecuencia = contador[palabra];
        }
    }
    const palabrasFrecuentes = [];
    for (const palabra in contador) {
        if (contador[palabra] === maxFrecuencia) {
            palabrasFrecuentes.push(palabra);
        }
    }
    palabrasFrecuentes.sort();
    
    return palabrasFrecuentes;
}


function main() {
    const texto = readLine();
    const result = findMostFrequentWords(texto);
    console.log(result.join('\n'));
}