import './pokedex-card.scss';
// import {} from '../../assets/types';
import PokemonType from '../pokemon-type/pokemon-type-component';
import { useEffect } from 'react';


const PokedexCard = ({ pokemonInfo, childToParent }) => {
    const allTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire',
        'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

    const matchTypes = (typeIndex) => {
        let index = 0;
        allTypes.map((type, i) => {
            if (type === pokemonInfo.types[typeIndex]) {
                index = i;
                return;
            }
        })
        return index;
    }

    const importPokemonSVG = (r) => {
        return r.keys().map(r);
    };

    const allData = importPokemonSVG(
        require.context("./types", false, /\.svg$/)
    )

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
    let pokemonTypeOne = "";
    let pokemonTypeTwo = "";
    if (pokemonInfo.types.length === 2) {
        pokemonTypeOne = pokemonInfo.types[0];
        pokemonTypeTwo = pokemonInfo.types[1];
        pokemonCardGradient = `linear-gradient(rgba(var(--${pokemonTypeOne}), 0.5) 25%, rgba(var(--${pokemonTypeTwo}), 0.7) 90%)`

    } else {
        pokemonTypeOne = pokemonInfo.types[0];
        pokemonCardGradient = `linear-gradient(rgba(var(--${pokemonTypeOne}), 0.6) 100%, rgba(var(--${pokemonTypeOne}), 0.6) 90%)`
    }

    return (

        <div className='pokemon-container' onClick={() => childToParent(passInfoOnClick())} style={{ background: pokemonCardGradient }}>
            <div className='id-container'>
                <h1 className='pokemon-id'>{formatIDNumber(pokemonInfo.id)}</h1>
            </div>

            <img src={pokemonInfo.image} alt='pokemon_pic' className='pokemon-picture' />
            <div className='text-container'>
                <h2 className='pokemon-name'>{pokemonInfo.name}</h2>
            </div>
            <div className='pokemon-types-container'>
                <div className="pokemon-type-one" style={{ backgroundColor: `rgba(var(--${pokemonTypeOne}))`, backgroundImage: `url("types/${pokemonTypeOne}.svg")` }}>
                    <img src={allData[matchTypes(0)]} style={{ width: "20px", height: "20px" }}></img>
                </div>
                {pokemonTypeTwo !== "" &&
                    <div className="pokemon-type-two" style={{ backgroundColor: `rgba(var(--${pokemonTypeTwo}))`, backgroundImage: `url("types/${pokemonTypeTwo}.svg")` }}>
                       <img src={allData[matchTypes(1)]} style={{ width: "20px", height: "20px" }}></img>
                    </div>
                }

            </div>
        </div>


    )

}


export default PokedexCard;