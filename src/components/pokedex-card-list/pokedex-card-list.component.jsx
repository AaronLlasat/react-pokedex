import PokedexCard from "../pokedex-card/pokedex-card.component";
import './pokedex-card-list.scss';

const PokedexCardList = ({ pokemonList }) => {
    return (
        <div className="pokemons-container">
            {          
                pokemonList.map((pokemon, i)=> {
                    return <PokedexCard key={i} id={pokemon.id}name={pokemon.name} types={pokemon.types} image={pokemon.image}/>
                })
            }
        </div>
    )
}


export default PokedexCardList;