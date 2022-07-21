import './pokedex-card.scss';

const PokedexCard = ({name, id, types, image}) => {
    return (
        
        <div className='pokemon-container'>
            <h1>{id}</h1>
            <img src={image} alt='pokemon_pic' />
            <div>
                <h2>{name}</h2>
                <p>{types.toString()}</p>
            </div>
        </div>
    )

}


export default PokedexCard;