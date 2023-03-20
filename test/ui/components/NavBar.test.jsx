import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';
import { PrivateRoute } from '../../../src/router/PrivateRoute';
import { NavBar } from '../../../src/ui/components/NavBar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <NavBar />', () => {
    
    const contextValue = {
        logged: true,
        user: {
            name: 'Andrés Benegas'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Debe mostrarse el nombre en el NavBar', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                        <NavBar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Andrés Benegas') ).toBeTruthy();

        screen.debug();
        
    });

    test('Debe llamar el logout y el navigate cuando se hace click en el botón', () => {
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                        <NavBar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true});

    });
});

