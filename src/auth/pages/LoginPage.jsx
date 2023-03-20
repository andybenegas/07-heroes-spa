import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

  const {login} = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'
    login( 'Andrés Benegas' );

    navigate(lastPath, {
      replace: false
    });
  }

  return (
    <div>
      <button 
        className="button text"
        onClick={ onLogin }>
        Login
      </button>
      <hr />

    </div>
  )
}
