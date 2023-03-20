import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div>
        <div>
          <form onSubmit={ onSearchSubmit } aria-label="form">
            <input
              className='input-box'
              type="text"
              placeholder="Search a Hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            
            <button className="button">
              Search
            </button>

            <h1>Results</h1>

          </form>
        </div>

        <div className='container'>
          
          {/* <hr /> */}

          {/* {
            ( q === '' )
              ? <div className="alert alert-primary"> Search a Hero </div>
              : ( heroes.length === 0 ) && <div className="alert alert-danger"> No Hero with <b>{ q }</b> </div>
          } */}

          <div className=" hero-title animate__animated animate__fadeIn" 
              style={{ display: showSearch ? '' : 'none' }}>
            <h1>Search a Hero</h1>
          </div>

          <div className="hero-title animate__animated animate__fadeIn" 
              style={{ display: showError ? '' : 'none' }}>
            <h1>No Hero with { q }</h1>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }
        </div>
      </div>
    </>
  )
}
