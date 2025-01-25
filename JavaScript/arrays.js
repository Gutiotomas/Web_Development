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
 * Completa la funcion 'mergeArrays' a continuacion.
 *
 * La funcion recibe los siguientes parametros:
 *  - arr1 (Array<number>): Primer arreglo de numeros
 *  - arr2 (Array<number>): Segundo arreglo de numeros
 *
 * Devuelve:
 *  - Array<number>: Un unico arreglo combinado, ordenado y sin duplicados
 */

function mergeArrays(arr1, arr2) {
    const merged = arr1.concat(arr2);

    const uniqueArray = merged.filter((num, index) => merged.indexOf(num) === index);

    return uniqueArray.sort((a, b) => a - b);
}

function main() {
    // Leer los arreglos desde la entrada
    const arr1 = readLine()
        .replace(/\s+/g, '') // Quitar espacios adicionales
        .split(',')
        .filter(x => x !== '') // Filtrar valores vacios
        .map(arrTemp => parseInt(arrTemp, 10));

    const arr2 = readLine()
        .replace(/\s+/g, '') // Quitar espacios adicionales
        .split(',')
        .filter(x => x !== '') // Filtrar valores vacios
        .map(arrTemp => parseInt(arrTemp, 10));

    const result = mergeArrays(arr1, arr2);

    // Imprimir el resultado como Hackerrank espera (un arreglo formateado)
    console.log(`[${result.join(', ')}]`);
}