import './pokemon-info-panel.scss';
import { useEffect } from 'react';

const PokemonInfoPanel = ({ pokemonInfo, windowState }) => {
    let { name, id, img, about, types, height, weight, abilities, stats } = pokemonInfo;
    let formatedStats = "";
    let formatedAbilities = "";
    let pokemonAsideGradient = ""
    height = `${height / 10}m`;
    weight = `${weight / 10}kg`;

    const closeWindow = () => {
        return false;
    }

    useEffect(() => {
        formatData();
    }, [])

    const formatData = () => {
        let statsSymbolsArray = ["❤", "⚔", "🛡", "✪", "🛡️", "👣"]

        let statsDiv = document.getElementsByClassName("aside-pokemon-stats");
        statsDiv[0].innerHTML = "";
        stats.map((stat, i) => {
            if (i === 1 || i === 3) {
                statsDiv[0].innerHTML = statsDiv[0].innerHTML + `${statsSymbolsArray[i]} ${stat.name}(${stat.base_stat})` + "<br/>"
            } else {
                statsDiv[0].innerHTML = statsDiv[0].innerHTML + `${statsSymbolsArray[i]} ${stat.name}(${stat.base_stat}) `
            }
        })

        let abilitiesDiv = document.getElementsByClassName("aside-pokemon-abilities");
        abilitiesDiv[0].innerHTML = "";
        abilities.map(ability => {
            abilitiesDiv[0].innerHTML = abilitiesDiv[0].innerHTML + `<b>✦${ability.name}: <b>`
            abilitiesDiv[0].innerHTML = abilitiesDiv[0].innerHTML + `${ability.description}` + "<br/>"
        })
    }

    if (pokemonInfo.types.length === 2) {
        pokemonAsideGradient = `linear-gradient(rgba(var(--${pokemonInfo.types[0]}), 0.5) 25%, rgba(var(--${pokemonInfo.types[1]}), 0.7) 90%)`
    } else {
        pokemonAsideGradient = `linear-gradient(rgba(var(--${pokemonInfo.types[0]}), 0.6) 100%, rgba(var(--${pokemonInfo.types[0]}), 0.6) 90%)`
    }


    return (
        <div className='info-panel-parent-container'>
            <aside className='aside-panel' style={{ background: pokemonAsideGradient }}>

                <div className="first-info-container">
                    <div className="info-section">
                        <h1 className='aside-pokemon-id'>{id}</h1>
                        <h2 className='aside-pokemon-name' style={{ "textTransform": "capitalize" }}>{name}</h2>
                        <div className="picture-container">
                            <div className='aside-pokemon-img' style={{ backgroundImage: `url(${img})` }}></div>
                        </div>
                    </div>
                    <div className="misc-info">
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


                </div>

                <div className="second-info-container">

                    <div className='info-section'>
                        <p>About</p>
                        <div className='aside-pokemon-about info-div'>{about}</div>
                    </div>
                    <div className="info-section">
                        <p>Abilities</p>
                        <div className='aside-pokemon-abilities info-div' style={{ "textTransform": "capitalize" }}>{formatedAbilities}</div>
                    </div>
                    <div className="info-section">
                        <p>Stats</p>
                        <div className='aside-pokemon-stats info-div' style={{ "textTransform": "uppercase" }}>{formatedStats}</div>
                    </div>

                </div>
                <div className='close-button-container' >
                    <div className='close-button' onClick={() => windowState(closeWindow())}>X</div>
                </div>

            </aside>
        </div>
    )
}


export default PokemonInfoPanel;