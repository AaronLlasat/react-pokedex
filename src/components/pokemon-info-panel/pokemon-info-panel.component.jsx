import './pokemon-info-panel.scss';

const PokemonInfoPanel = () => {
    return (
        <aside className='aside-panel'>
            <div className="picture-container">
                <div className='aside-pokemon-img'></div>
            </div>

            <div className="info-container">
                <h2 className='aside-pokemon-name'></h2>
                <p>ID: <span className='aside-pokemon-id'></span></p>
                <p>Types: <span className='aside-pokemon-types'></span></p>
                <p>Height: <span className='aside-pokemon-height'></span></p>
                <p>Weight: <span className='aside-pokemon-weight'></span></p>
            </div>
            
        </aside>
    )
}


export default PokemonInfoPanel;