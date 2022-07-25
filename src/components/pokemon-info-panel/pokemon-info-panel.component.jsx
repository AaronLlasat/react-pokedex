import './pokemon-info-panel.scss';

const PokemonInfoPanel = () => {
    return (
        <aside className='aside-panel'>

            <div className="first-info-container">
                <h1 className='aside-pokemon-id'></h1>
                <h2 className='aside-pokemon-name'></h2>

            </div>

            <div className="picture-container">
                <div className='aside-pokemon-img'></div>
            </div>

            <div className="second-info-container">
                <p>About: <br /> <span className='aside-pokemon-about'></span></p>
                <p>Types: <br /><span className='aside-pokemon-types'></span></p>
                <p>Height: <br /> <span className='aside-pokemon-height'></span></p>
                <p>Weight: <br /><span className='aside-pokemon-weight'></span></p>
                <p>Abilities: <br /><span className='aside-pokemon-abilities'></span></p>
                <p>Stats:<br /><span className='aside-pokemon-stats'></span></p>
            </div>

        </aside>
    )
}


export default PokemonInfoPanel;