import { ReactComponent as Logo } from './types/bug.svg'
// import {grass} from "./types/"; 


const PokemonType = ({ type }) => {


    console.log(type)
    return (
        <>
            <div className='type-div' style={{width:"20px", height:"20px", backgroundColor:"red", backgroundImage:`url(${type}.svg)`, backgroundSize:"contain"}}></div>
        </>
    )
}

export default PokemonType;