const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Héroe async', (done) => {
        const idTest = 1;
        getHeroeByIdAsync(idTest)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });
    test('debe de obtener un error si el héroe por id no existe', (done) => {
        const idTest = 10;
        getHeroeByIdAsync(idTest)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done();
            });
    });
});
