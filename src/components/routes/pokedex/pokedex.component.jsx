import PokedexCardList from "../../pokedex-card-list/pokedex-card-list.component";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";



const Pokedex = ({ name, types, image }) => {
    const [pokemons, setPokemons] = useState([]);
    const filteredPokemons = []

    useEffect(() => {
        try {
            const fetchPokemon = async () => {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const json = await res.json();
                // console.log("JSON FETCH", json.results);
                gatherPokemonInfo(json.results);
            }
            fetchPokemon();

        } catch (error) {
            console.log(error);
        }


    }, [])

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
                    image: json.sprites.front_default
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

                if (filteredPokemons.length===151) {
                    filteredPokemons.sort((a,b) =>{
                        return a.id - b.id;
                    })
                    setPokemons(filteredPokemons);
                }
            } catch (error) {
                console.log(error);
            }

        })

    }


    return !pokemons.length
        ? <h1>Loading</h1>
        :
        (< div >
            <PokedexCardList pokemonList={pokemons}></PokedexCardList>
        </div >
        )
}

export default Pokedex