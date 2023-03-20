import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo( () => getHeroById( id ), [ id ] );
  const onNavigateBack = () => {

    // hero.publisher === 'DC Comics' ? navigate('/dc') : navigate('/marvel');

    // if (hero.publisher === 'DC Comics') {
    //   navigate('/dc');
    // } else {
    //   navigate('/marvel')
    // }

    navigate(-1);
  }

  if ( !hero ) {
    return <Navigate to='/marvel' />
  }
 
  return (
    <div className={`${hero.publisher === 'DC Comics' ? 'herodc' : 'hero' }`}>
      <div>
        <img 
          src={`/assets/heroes/${ id }.jpg`} 
          alt={ hero.superhero }
          className='animate__animated animate__fadeInLeft' 
        />
      </div>

      <div className='hero-title hero-info'>
        <h1 className={`${hero.publisher === 'DC Comics' ? 'dc__title' : 'blog-post__title' }`}>{ hero.superhero }</h1>
        <ul>
          <li><b>Alter Ego:</b> { hero.alter_ego } </li>
          <li><b>Publisher:</b> { hero.publisher } </li>
          <li><b>First Appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h4> Characters </h4>
        <p>{ hero.characters }</p>

        <h5>History</h5>
        <p className='text'>{hero.history}</p>

        <button 
          className="button"
          onClick={ onNavigateBack }
        >
          Back
        </button>

      </div>
    </div>
    
  )
}
