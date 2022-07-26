import './pokemon-info-panel.scss';

const PokemonInfoPanel = ({ pokemonInfo, windowState }) => {
    const { name, id, img, about, types, height, weight, abilities, stats } = pokemonInfo;
    let formatedStats = ""
    stats.map(stat => {
        formatedStats = formatedStats + "\n" + stat.name + "(" + stat.base_stat + ")"
    })

    const closeWindow = () => {
        return false;
    }

    return (
        <div className='info-panel-parent-container'>
            <aside className='aside-panel'>

                <div className="first-info-container">
                    <h1 className='aside-pokemon-id'>{id}</h1>
                    <h2 className='aside-pokemon-name' style={{ "textTransform": "capitalize" }}>{name}</h2>
                    <div className="picture-container">
                        <div className='aside-pokemon-img' style={{ backgroundImage: `url(${img})` }}></div>
                    </div>

                    <div className="info-section">
                        <p>Types</p>
                        <div className='aside-pokemon-types info-div'>{types.toString()}</div>
                    </div>

                    <div className="info-section">
                        <p>Height</p>
                        <div className='aside-pokemon-height info-div'>{height}</div>
                    </div>

                    <div className="info-section">
                        <p>Weight</p>
                        <div className='aside-pokemon-weight info-div'>{weight}</div>
                    </div>

                </div>

                <div className="second-info-container">

                    <div className='info-section'>
                        <p>About</p>
                        <div className='aside-pokemon-about info-div'>{about}</div>
                    </div>
                    <div className="info-section">
                        <p>Abilities</p>
                        <div className='aside-pokemon-abilities info-div'>{abilities.toString()}</div>
                    </div>
                    <div className="info-section">
                        <p>Stats</p>
                        <div className='aside-pokemon-stats info-div'>{formatedStats}</div>
                    </div>

                </div>
                <div className='close-button-container' onClick={() => windowState(closeWindow())}>
                    <div className='close-button'>X</div>
                </div>

            </aside>
        </div>
    )
}


export default PokemonInfoPanel;