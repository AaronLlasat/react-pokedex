import './pokedex-card.scss';

const PokedexCard = ({ name, id, types, image }) => {
    return (

        <div className='pokemon-container'>
            <div className='id-container'>
                <h1 className='pokemon-id'>{id}</h1>
            </div>

            <img src={image} alt='pokemon_pic' className='pokemon-picture' />
            <div className='text-container'>
                <h2 className='pokemon-name'>{name}</h2>
                <p className='pokemon-types'>{types.toString()}</p>
            </div>
        </div>
    )

}


export default PokedexCard;