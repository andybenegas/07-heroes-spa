import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';


describe('Pruebas en <PublicRoute />', () => { 

    test('Si no está autenticado, debe mostrar el children', () => {

        const contextValue = {
            logged: false
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Pública')).toBeTruthy();

        // screen.debug();
        
    });

    test('Debe navegar si está autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name: 'Andriu',
                id: 'ABC'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();
    });
});