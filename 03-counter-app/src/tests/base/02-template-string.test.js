import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Mario', () => {
        const nombre = 'Mario';

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre);
    })
    test('getSaludo debe de retornar Hola Alberto si no hay argumento en el nombre', () => {
        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Alberto');
    })
})