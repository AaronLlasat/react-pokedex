import './pokedex.scss';
import PokedexCardList from "../../pokedex-card-list/pokedex-card-list.component"
import { useEffect, useState } from "react";
import { ReactComponent as Loader } from "../../../assets/Spinner-1s-200px.svg";
import Scroll from '../../scroll/scroll.component';
import PokemonInfoPanel from '../../pokemon-info-panel/pokemon-info-panel.component';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState({});
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
        gatherPokemonInfo(json.results);
    }


    const getStats = (stats) => {
        let statsArray = []
        stats.map(stats => {
            const statObject = {
                name: stats.stat.name,
                base_stat: stats.base_stat
            }
            statsArray.push(statObject);
        })
        return statsArray;
    }

    const getThisInfo = (info, path) => {
        let array = []
        info.map(object => {
            array.push(object[path].name)
        })
        return array;
    }

    const getAbout = async (id) => {
        let about = "";
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
            const data = await res.json();
            data.flavor_text_entries.map(entry => {
                if (entry.language.name === "en") {
                    about = entry.flavor_text;
                    return;
                }
            })
        } catch (error) {
            console.log(error)
        }


        return about;
    }

    const gatherPokemonInfo = (pokemonsJSON) => {
        let pokemonRepeated = false;
        pokemonsJSON.map(async pokemon => {
            try {
                const res = await fetch(pokemon.url);
                const json = await res.json();

                let indexPokemon = {
                    name: json.name,
                    id: json.id,
                    types: getThisInfo(json.types, "type"),
                    image: json.sprites.front_default,
                    weight: json.weight,
                    height: json.height,
                    abilities: getThisInfo(json.abilities, "ability"),
                    stats: getStats(json.stats),
                    about: await getAbout(json.id)
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
        setIsShown(current => !current);
        setSelectedPokemon(info);
    }


    return !pokemons.length
        ? <div className="loader-container"><Loader /></div>
        :
        (
            < div className='parent-container' >
              
                <section className='pokemon-info-panel'>
                    {isShown && 
                    <PokemonInfoPanel pokemonInfo={selectedPokemon} windowState={setIsShown}
                    />}
                </section>
               
                {/* {isShown && */}
                    <Scroll>
                        <section className='pokemons-section'>
                            <PokedexCardList pokemonList={pokemons} anotherChildToParent={getPokemonCardInfo}></PokedexCardList>
                        </section>
                    </Scroll>
                {/* } */}
            </div >
        )
}

export default Pokedex