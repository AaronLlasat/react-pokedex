import './pokedex-card.scss';
// import {} from '../../assets/types';
import PokemonType from '../pokemon-type/pokemon-type-component';

const PokedexCard = ({ pokemonInfo, childToParent }) => {

    let pokemonObject = {
        name: pokemonInfo.name,
        id: pokemonInfo.id,
        about: pokemonInfo.about,
        img: pokemonInfo.image,
        types: pokemonInfo.types,
        height: pokemonInfo.height,
        weight: pokemonInfo.weight,
        abilities: pokemonInfo.abilities,
        stats: pokemonInfo.stats
    }


    const passInfoOnClick = () => {
        return pokemonObject;
    }

    const formatIDNumber = (id) => {
        const IDlen = id.toString().length;

        switch (IDlen) {
            case 1:
                pokemonObject.id = "#00" + pokemonObject.id;
                return pokemonObject.id;
            case 2:
                pokemonObject.id = "#0" + pokemonObject.id;
                return "#0" + id;
            case 3:
                pokemonObject.id = "#" + pokemonObject.id;
                return "#" + id;
            default:
                break;
        }

    }

    let pokemonCardGradient = ""
    if (pokemonInfo.types.length === 2) {
        pokemonCardGradient = `linear-gradient(rgba(var(--${pokemonInfo.types[0]}), 0.5) 25%, rgba(var(--${pokemonInfo.types[1]}), 0.7) 90%)`
    } else {
        pokemonCardGradient = `linear-gradient(rgba(var(--${pokemonInfo.types[0]}), 0.6) 100%, rgba(var(--${pokemonInfo.types[0]}), 0.6) 90%)`
    }

    return (

        <div className='pokemon-container' onClick={() => childToParent(passInfoOnClick())} style={{ background: pokemonCardGradient}}>
            <div className='id-container'>
                <h1 className='pokemon-id'>{formatIDNumber(pokemonInfo.id)}</h1>
            </div>

            <img src={pokemonInfo.image} alt='pokemon_pic' className='pokemon-picture' />
            <div className='text-container'>
                <h2 className='pokemon-name'>{pokemonInfo.name}</h2>
                <p className='pokemon-types'>{pokemonInfo.types.toString()}</p>
                {
                    //console.log(pokemonInfo.moves)
                    // pokemonObject.types.map((type, i) => {
                    //     return <PokemonType key={i} type={type}>{type}</PokemonType>
                    // })
                }
            </div>
        </div>


    )

}


export default PokedexCard;