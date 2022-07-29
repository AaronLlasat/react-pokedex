import './pokedex-card.scss';
// import {} from '../../assets/types';
import PokemonType from '../pokemon-type/pokemon-type-component';
import { useEffect } from 'react';


const PokedexCard = ({ pokemonInfo, childToParent }) => {

    const importAll = (r) => {
        return r.keys().map(r);
    };

    const allData = importAll(
        require.context("./types", false, /\.svg$/)
    )
    
    useEffect(()=> {

    })

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
                {/* <p className='pokemon-types'>{pokemonInfo.types.toString()}</p> */}

                {
                    //console.log(pokemonInfo.moves)
                    // pokemonObject.types.map((type, i) => {
                    //     return <PokemonType key={i} type={type}>{type}</PokemonType>
                    // })
                }
            </div>
            <div className='pokemon-types-container'>
                <div className="pokemon-type-one" style={{ backgroundColor: `rgba(var(--${pokemonTypeOne}))`, backgroundImage: `url("types/${pokemonTypeOne}.svg");` }}>
                    {/* <b>{pokemonTypeOne.charAt(0).toUpperCase()}</b> */}
                </div>
                <div style={{width:"100px", height:"100px", backgroundColor:"red"}}>
                    <img src={allData[0]} style={{width:"100px", height:"100px"}}></img>
                </div>
                {pokemonTypeTwo !== "" &&
                    <div className="pokemon-type-two" style={{ backgroundColor: `rgba(var(--${pokemonTypeTwo}))`, backgroundImage: `url("types/${pokemonTypeTwo}.svg");` }}>
                        <b>{pokemonTypeTwo.charAt(0).toUpperCase()}</b>
                    </div>
                }

            </div>
        </div>


    )

}


export default PokedexCard;