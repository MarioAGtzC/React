const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");

import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('debe de retornar un héroe por id', () => {
        const idTest = 1;
        const heroeTest = getHeroeById(idTest);

        const heroeDataTest = heroes.find(heroe => heroe.id === idTest );

        expect(heroeTest).toEqual(heroeDataTest);
    })
    test('debe de retornar undefined si héroe no existe', () => {
        const idTest = 10;
        const heroeTest = getHeroeById(idTest);

        expect(heroeTest).toBe(undefined);
    })
    test('debe de retornar un arreglo con los héroes de DC', () => {
        const ownerTest = 'DC';
        const heroesTest = getHeroesByOwner(ownerTest);

        const heroesDataTest = heroes.filter(heroe => heroe.owner === ownerTest );

        expect(heroesTest).toEqual(heroesDataTest);
    })
    test('debe de retornar un arreglo con los héroes de Marvel', () => {
        const ownerTest = 'Marvel';
        const heroesTest = getHeroesByOwner(ownerTest);

        expect(heroesTest.length).toBe(2);
    })
})
