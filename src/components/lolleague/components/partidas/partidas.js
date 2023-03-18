import chavesPartidas from './games.json'
import data from '../equipes/components/teams.json'
import './partidas.css'

export default function Partidas(params) {

    function standardTimestamp(sec) {
        let mins = Math.floor(parseInt(sec) / 60)
        let hours = Math.floor(parseInt(mins) / 60)
        let days = Math.floor(parseInt(hours) / 24)
        mins = mins % 60
        hours = hours % 24
        let secs = Math.floor(parseInt(sec) % 60)
        if (secs < 10) secs = "0" + secs
        if (mins < 10) mins = "0" + mins
        if (hours < 10) hours = "0" + hours
        if (hours == "00" && days == 0) return `${mins}:${secs}`
        else if (days == 0) return `${hours}:${mins}:${secs}`
        else return `${days}:${hours}:${mins}:${secs}`
        // thanks to iaace-NA
        // https://github.com/iaace-NA
    }

    function callHideShow(matchId){
        document.getElementById(matchId).className = document.getElementById(matchId).className === "partidas-extrainfo-tables" ? "hide" : "partidas-extrainfo-tables"
    }


    return (
        <div className='partidas-container-mainbody'>
            {chavesPartidas &&
                chavesPartidas.reverse().map((partidas) => {
                    let bluelogo = data.find((team) => {return team.id === partidas.blue}).teamLogo
                    let redlogo = data.find((team) => {return team.id === partidas.red}).teamLogo
                    return (
                        <div key={partidas.matchId}>
                            <div className='partidas-matchday-containerbody' onClick={() => callHideShow(partidas.matchId)}>
                                <div className='partidas-blueteam-frag'>
                                    {partidas.bluewin &&
                                        <h4>W</h4>
                                    } {!partidas.bluewin &&
                                        <h4>L</h4>
                                    }
                                </div>
                                <div className='partidas-blueteam-containerbody'>

                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[4].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[3].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[2].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[1].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[0].skin + "_square.png")} />

                                </div>
                                <div className='partidas-info-containerbody'>
                                    <label>{data.map((team) => {if(team.id === partidas.blue){return team.teamName}})}</label>
                                    <div className='partidas-info-blueLogo' style={{backgroundImage: `url(${bluelogo})`}}/>
                                    <div className='partidas-info-labeltime'>
                                        <label>{standardTimestamp(partidas.gameDuration / 1000)}</label>
                                    </div>
                                    <div className='partidas-info-redLogo' style={{backgroundImage: `url(${redlogo})`}}/>
                                    <label>{data.map((team) => {if(team.id === partidas.red){return team.teamName}})}</label>
                                </div>
                                <div className='partidas-redteam-containerbody'>

                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[5].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[6].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[7].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[8].skin + "_square.png")} />
                                    <img src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[9].skin + "_square.png")} />

                                </div>
                                <div className='partidas-redteam-frag'>
                                    {!partidas.bluewin &&
                                        <h4>W</h4>
                                    } {partidas.bluewin &&
                                        <h4>L</h4>
                                    }
                                </div>
                            </div>
                            <div className='partidas-extrainfo-tables hide' id={partidas.matchId}>
                                <div className='partidas-extrainfo-visual-teams'>
                                    <div className='partidas-extrainfo-blueteam'>
                                        <div className='partidas-extrainfo-teamfull'>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/creep.png')}/>{parseInt(partidas.participants[0].minionsKilled) + parseInt(partidas.participants[1].minionsKilled) + parseInt(partidas.participants[2].minionsKilled) + parseInt(partidas.participants[3].minionsKilled) + parseInt(partidas.participants[4].minionsKilled) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/abates.png')}/>
                                                {parseInt(partidas.participants[0].championsKilled) + parseInt(partidas.participants[1].championsKilled) + parseInt(partidas.participants[2].championsKilled) + parseInt(partidas.participants[3].championsKilled) + parseInt(partidas.participants[4].championsKilled) }
                                                /
                                                {parseInt(partidas.participants[0].numDeaths) + parseInt(partidas.participants[1].numDeaths) + parseInt(partidas.participants[2].numDeaths) + parseInt(partidas.participants[3].numDeaths) + parseInt(partidas.participants[4].numDeaths) }
                                                /
                                                {parseInt(partidas.participants[0].assists) + parseInt(partidas.participants[1].assists) + parseInt(partidas.participants[2].assists) + parseInt(partidas.participants[3].assists) + parseInt(partidas.participants[4].assists) }
                                            </h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/gold.png')}/>{parseInt(partidas.participants[0].goldEarned) + parseInt(partidas.participants[1].goldEarned) + parseInt(partidas.participants[2].goldEarned) + parseInt(partidas.participants[3].goldEarned) + parseInt(partidas.participants[4].goldEarned) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/turret.png')}/>{parseInt(partidas.participants[5].friendlyTurretLost)}</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/platinng.png')}/>{parseInt(partidas.participants[0].barracksKilled) + parseInt(partidas.participants[1].barracksKilled) + parseInt(partidas.participants[2].barracksKilled) + parseInt(partidas.participants[3].barracksKilled) + parseInt(partidas.participants[4].barracksKilled)}</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/dragon.png')}/>{parseInt(partidas.participants[0].dragonKills) + parseInt(partidas.participants[1].dragonKills) + parseInt(partidas.participants[2].dragonKills) + parseInt(partidas.participants[3].dragonKills) + parseInt(partidas.participants[4].dragonKills) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/baron.png')}/>{parseInt(partidas.participants[0].baronKills) + parseInt(partidas.participants[1].baronKills) + parseInt(partidas.participants[2].baronKills) + parseInt(partidas.participants[3].baronKills) + parseInt(partidas.participants[4].baronKills) }</h4>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-names'>
                                            <p>Jogadores (Ordenado pela Posição dos campeões):</p>                                            
                                            <label>{partidas.participants[0].name} /|\ {partidas.participants[1].name} /|\ {partidas.participants[2].name} /|\ {partidas.participants[3].name} /|\ {partidas.participants[4].name}</label>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-player'>     
                                                                   
                                            <img className='partidas-extrainfo-blueteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[0].skin + "_square.png")} />
                                            
                                            <h4>{partidas.participants[0].minionsKilled}</h4>
                                            <h4>{partidas.participants[0].championsKilled}/{partidas.participants[0].numDeaths}/{partidas.participants[0].assists}</h4>
                                            <div className='partidas-extrainfo-blueteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item5 + ".png")} />
                                                <div className='partidas-extrainfo-blueteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[0].item6 + ".png")} />
                                                    <label>{partidas.participants[0].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-player'>                                    
                                            <img className='partidas-extrainfo-blueteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[1].skin + "_square.png")} />
                                            <h4>{partidas.participants[1].minionsKilled}</h4>
                                            <h4>{partidas.participants[1].championsKilled}/{partidas.participants[1].numDeaths}/{partidas.participants[1].assists}</h4>
                                            <div className='partidas-extrainfo-blueteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item5 + ".png")} />
                                                <div className='partidas-extrainfo-blueteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[1].item6 + ".png")} />
                                                    <label>{partidas.participants[0].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-player'>                                    
                                            <img className='partidas-extrainfo-blueteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[2].skin + "_square.png")} />
                                            <h4>{partidas.participants[2].minionsKilled}</h4>
                                            <h4>{partidas.participants[2].championsKilled}/{partidas.participants[2].numDeaths}/{partidas.participants[2].assists}</h4>
                                            <div className='partidas-extrainfo-blueteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item5 + ".png")} />
                                                <div className='partidas-extrainfo-blueteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[2].item6 + ".png")} />
                                                    <label>{partidas.participants[2].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-player'>                                    
                                            <img className='partidas-extrainfo-blueteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[3].skin + "_square.png")} />
                                            <h4>{partidas.participants[3].minionsKilled}</h4>
                                            <h4>{partidas.participants[3].championsKilled}/{partidas.participants[3].numDeaths}/{partidas.participants[3].assists}</h4>
                                            <div className='partidas-extrainfo-blueteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item5 + ".png")} />
                                                <div className='partidas-extrainfo-blueteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[3].item6 + ".png")} />
                                                    <label>{partidas.participants[3].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-blueteam-player'>                                    
                                            <img className='partidas-extrainfo-blueteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[4].skin + "_square.png")} />
                                            <h4>{partidas.participants[4].minionsKilled}</h4>
                                            <h4>{partidas.participants[4].championsKilled}/{partidas.participants[4].numDeaths}/{partidas.participants[4].assists}</h4>
                                            <div className='partidas-extrainfo-blueteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item5 + ".png")} />
                                                <div className='partidas-extrainfo-blueteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[4].item6 + ".png")} />
                                                    <label>{partidas.participants[4].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='partidas-extrainfo-redteam'>
                                        
                                        <div className='partidas-extrainfo-teamfull-red'>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/creep.png')}/>{parseInt(partidas.participants[5].minionsKilled) + parseInt(partidas.participants[6].minionsKilled) + parseInt(partidas.participants[7].minionsKilled) + parseInt(partidas.participants[8].minionsKilled) + parseInt(partidas.participants[9].minionsKilled) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/abates.png')}/>
                                                {parseInt(partidas.participants[5].championsKilled) + parseInt(partidas.participants[6].championsKilled) + parseInt(partidas.participants[7].championsKilled) + parseInt(partidas.participants[3].championsKilled) + parseInt(partidas.participants[9].championsKilled) }
                                                /
                                                {parseInt(partidas.participants[5].numDeaths) + parseInt(partidas.participants[6].numDeaths) + parseInt(partidas.participants[7].numDeaths) + parseInt(partidas.participants[8].numDeaths) + parseInt(partidas.participants[9].numDeaths) }
                                                /
                                                {parseInt(partidas.participants[5].assists) + parseInt(partidas.participants[6].assists) + parseInt(partidas.participants[7].assists) + parseInt(partidas.participants[8].assists) + parseInt(partidas.participants[9].assists) }
                                            </h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/gold.png')}/>{parseInt(partidas.participants[5].goldEarned) + parseInt(partidas.participants[6].goldEarned) + parseInt(partidas.participants[7].goldEarned) + parseInt(partidas.participants[8].goldEarned) + parseInt(partidas.participants[9].goldEarned) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/turret.png')}/>{parseInt(partidas.participants[0].friendlyTurretLost)}</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/platinng.png')}/>{parseInt(partidas.participants[5].barracksKilled) + parseInt(partidas.participants[6].barracksKilled) + parseInt(partidas.participants[7].barracksKilled) + parseInt(partidas.participants[8].barracksKilled) + parseInt(partidas.participants[9].barracksKilled)}</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/dragon.png')}/>{parseInt(partidas.participants[5].dragonKills) + parseInt(partidas.participants[6].dragonKills) + parseInt(partidas.participants[7].dragonKills) + parseInt(partidas.participants[8].dragonKills) + parseInt(partidas.participants[9].dragonKills) }</h4>
                                            <h4><img src={require('../../../../lol_assets/13.5.1/item/baron.png')}/>{parseInt(partidas.participants[5].baronKills) + parseInt(partidas.participants[6].baronKills) + parseInt(partidas.participants[7].baronKills) + parseInt(partidas.participants[8].baronKills) + parseInt(partidas.participants[9].baronKills) }</h4>
                                        </div>     
                                        <div className='partidas-extrainfo-redteam-names'>
                                            <p>Jogadores (Ordenado pela Posição dos campeões):</p>
                                            <label>{partidas.participants[5].name} /|\ {partidas.participants[6].name} /|\ {partidas.participants[7].name} /|\ {partidas.participants[8].name} /|\ {partidas.participants[9].name}</label>
                                        </div>                               
                                        <div className='partidas-extrainfo-redteam-player'>
                                            <img className='partidas-extrainfo-redteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[5].skin + "_square.png")} />
                                            <h4>{partidas.participants[5].minionsKilled}</h4>
                                            <h4>{partidas.participants[5].championsKilled}/{partidas.participants[5].numDeaths}/{partidas.participants[5].assists}</h4>
                                            <div className='partidas-extrainfo-redteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item5 + ".png")} />
                                                <div className='partidas-extrainfo-redteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[5].item6 + ".png")} />
                                                    <label>{partidas.participants[5].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-redteam-player'>                                    
                                            <img className='partidas-extrainfo-redteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[6].skin + "_square.png")} />
                                            <h4>{partidas.participants[6].minionsKilled}</h4>
                                            <h4>{partidas.participants[6].championsKilled}/{partidas.participants[6].numDeaths}/{partidas.participants[6].assists}</h4>
                                            <div className='partidas-extrainfo-redteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item5 + ".png")} />
                                                <div className='partidas-extrainfo-redteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[6].item6 + ".png")} />
                                                    <label>{partidas.participants[6].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-redteam-player'>                                    
                                            <img className='partidas-extrainfo-redteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[7].skin + "_square.png")} />
                                            <h4>{partidas.participants[7].minionsKilled}</h4>
                                            <h4>{partidas.participants[7].championsKilled}/{partidas.participants[7].numDeaths}/{partidas.participants[7].assists}</h4>
                                            <div className='partidas-extrainfo-redteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item5 + ".png")} />
                                                <div className='partidas-extrainfo-redteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[7].item6 + ".png")} />
                                                    <label>{partidas.participants[7].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-redteam-player'>                                    
                                            <img className='partidas-extrainfo-redteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[8].skin + "_square.png")} />
                                            <h4>{partidas.participants[8].minionsKilled}</h4>
                                            <h4>{partidas.participants[8].championsKilled}/{partidas.participants[8].numDeaths}/{partidas.participants[8].assists}</h4>
                                            <div className='partidas-extrainfo-redteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item5 + ".png")} />
                                                <div className='partidas-extrainfo-redteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[8].item6 + ".png")} />
                                                    <label>{partidas.participants[8].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='partidas-extrainfo-redteam-player'>                                    
                                            <img className='partidas-extrainfo-redteam-player-champ' src={require('../../../../lol_assets/13.5.1/champion/' + partidas.participants[9].skin + "_square.png")} />
                                            <h4>{partidas.participants[9].minionsKilled}</h4>
                                            <h4>{partidas.participants[9].championsKilled}/{partidas.participants[9].numDeaths}/{partidas.participants[9].assists}</h4>
                                            <div className='partidas-extrainfo-redteam-player-item'>
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item0 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item1 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item2 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item3 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item4 + ".png")} />
                                                <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item5 + ".png")} />
                                                <div className='partidas-extrainfo-redteam-player-item-vision'>
                                                    <img src={require('../../../../lol_assets/13.5.1/item/' + partidas.participants[9].item6 + ".png")} />
                                                    <label>{partidas.participants[9].visionScore}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}