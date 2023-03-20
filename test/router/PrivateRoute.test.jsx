import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el <PrivateRoute />', () => {

    test('Si está autenticado, debe mostrar el children', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Andriu'
            }
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=spiderman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=spiderman");

        // screen.debug();
        
    });
 })