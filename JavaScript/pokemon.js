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
 * Completa la funcion 'managePokemonCenter' a continuacion.
 *
 * La funcion recibe:
 *  - pokemonList (Array<object>): Lista de Pokemon con sus propiedades.
 *
 * Devuelve:
 *  - object: Un objeto con los Pokemon clasificados como totalmente recuperados o parcialmente recuperados.
 */
function managePokemonCenter(pokemonList) {
    const recovery = {
        fullyRecovered: [],
        partiallyRecovered: []
    };

    pokemonList.forEach(pokemon => {
        if (pokemon.currentHP === pokemon.maxHP) {
            return;
        }

        if (pokemon.status.length === 0) {
            pokemon.currentHP = pokemon.maxHP;
            recovery.fullyRecovered.push(pokemon.name);
        } else {
            const hpToRecover = Math.floor((pokemon.maxHP - pokemon.currentHP) / 2);
            pokemon.currentHP += hpToRecover;
            recovery.partiallyRecovered.push(pokemon.name);
        }

        pokemon.status = [];
    });

    return recovery;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const pokemonList = [];

    for (let i = 0; i < n; i++) {
        const line = readLine().trim().split(' | ');
        const name = line[0];
        const currentHP = parseInt(line[1], 10);
        const maxHP = parseInt(line[2], 10);
        const status = line[3] ? line[3].split(',') : [];

        pokemonList.push({ name, currentHP, maxHP, status });
    }

    const result = managePokemonCenter(pokemonList);

    // Imprimir las listas en el main
    console.log(`fullyRecovered: ${result.fullyRecovered.join(' ')}`);
    console.log(`partiallyRecovered: ${result.partiallyRecovered.join(' ')}`);
}
