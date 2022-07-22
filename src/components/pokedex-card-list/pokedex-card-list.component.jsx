import PokedexCard from "../pokedex-card/pokedex-card.component";
import './pokedex-card-list.scss';
import { useState } from "react";

const PokedexCardList = ({ pokemonList, anotherChildToParent}) => {
    const [data, setData] = useState('');
  
    const childToParent = (childdata) => {
      setData(childdata);
      passInfoToPokedex(childdata)
    }

    const passInfoToPokedex = (childdata) => {
        anotherChildToParent(childdata);
      }

    return (
        <div className="pokemons-container">
            {          
                pokemonList.map((pokemon, i)=> {
                    return <PokedexCard key={i} pokemonInfo={pokemon} childToParent={childToParent}/>
                })
            }
        </div>
    )
}


export default PokedexCardList;