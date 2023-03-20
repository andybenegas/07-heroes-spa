import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return ( alter_ego === characters )
        ? <></>
        : <p>{ characters }</p>;  
};

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div className="card">
            <div className="card__inner animate__animated animate__fadeIn">
                <div className="card_front">
                    <img src={ heroImageUrl } alt={ superhero } />
                </div>

                <div className={`${publisher==='DC Comics'? "card_back-dc":"card_back"}`}>
                    <h5>{ superhero }</h5>
                    <p>{alter_ego}</p>
                    {/* {
                        ( alter_ego !== characters ) && charactersByHero
                        ( alter_ego !== characters ) && <p>{ characters }</p>
                    } */}
                    <CharactersByHero characters={ characters } alter_ego={ alter_ego } />
                    <p>
                        <small>
                            { first_appearance }
                        </small>
                    </p>
                    <Link to={`/hero/${ id }`} className="">
                        Leer más...
                    </Link>
                </div>
            </div>
    </div>
  )
}
