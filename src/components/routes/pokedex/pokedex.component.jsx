import './pokedex.scss';
import PokedexCardList from "../../pokedex-card-list/pokedex-card-list.component"
import { useEffect, useState } from "react";
import { ReactComponent as Loader } from "../../../assets/Spinner-1s-200px.svg";
import Scroll from '../../scroll/scroll.component';
import PokemonInfoPanel from '../../pokemon-info-panel/pokemon-info-panel.component';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const filteredPokemons = []

    useEffect(() => {
        try {
            !pokemons.length
                ? fetchPokemon()
                : console.log("Already fetched:", pokemons)

        } catch (error) {
            console.log(error);
        }


    }, [])

    const fetchPokemon = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const json = await res.json();
        // console.log("JSON FETCH", json.results);
        gatherPokemonInfo(json.results);
    }


    const createTypes = (types) => {
        let typesArray = []
        types.map(type => {
            typesArray.push(type.type.name)
        })
        return typesArray;
    }

    const gatherPokemonInfo = (pokemonsJSON) => {
        let pokemonRepeated = false;
        // console.log("POKEMONS PRE 2 FETCH", pokemonsJSON)
        pokemonsJSON.map(async pokemon => {
            try {
                const res = await fetch(pokemon.url);
                const json = await res.json();

                let indexPokemon = {
                    name: json.name,
                    id: json.id,
                    types: createTypes(json.types),
                    image: json.sprites.front_default,
                    weight: json.weight,
                    height: json.height,

                }

                filteredPokemons.map(pokemon => {
                    if (pokemon.name === indexPokemon.name) {
                        pokemonRepeated = true;
                        return;
                    }
                })

                if (!pokemonRepeated) {
                    filteredPokemons.push(indexPokemon);
                } else {
                    pokemonRepeated = false
                }

                if (filteredPokemons.length === 151) {
                    filteredPokemons.sort((a, b) => {
                        return a.id - b.id;
                    })
                    setPokemons(filteredPokemons);
                }
            } catch (error) {
                console.log(error);
            }

        })

    }

    const getPokemonCardInfo = (info) => {
        for (const key in info) {
            let element = document.getElementsByClassName(`aside-pokemon-${key}`);
            key === "img"
                ?element[0].style.backgroundImage = `url(${info[key]})`
                : element[0].innerHTML = info[key];
        }
    }


    return !pokemons.length
        ? <div className="loader-container"><Loader /></div>
        :
        (
            < div className='parent-container' >
                <PokemonInfoPanel />
                <Scroll>
                    <section className='pokemons-section'>
                        <PokedexCardList pokemonList={pokemons} anotherChildToParent={getPokemonCardInfo}></PokedexCardList>
                    </section>
                </Scroll>
            </div >
        )
}

export default Pokedex