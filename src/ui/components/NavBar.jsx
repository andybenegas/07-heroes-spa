import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';



export const NavBar = () => {
    
    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar container">
            
            <Link 
                className="logo" 
                to="/"
            >
                Super Heroes
            </Link>

            <input type="checkbox" id='toggler' />
            <label htmlFor="toggler"><i className='ri-menu-line'></i></label>

            <div className="menu">
                <div className="list">

                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        <p className='icon1'>Marvel</p>
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        <p className='icon1'>DC</p>
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className='menu'>
                <ul className='list'>
                    <span>
                        { user?.name }  
                    </span>

                    <button
                        onClick={ onLogout }
                        className='button text-button'
                    >
                        Logout

                    </button>
                </ul>
            </div>
        </nav>
    )
}