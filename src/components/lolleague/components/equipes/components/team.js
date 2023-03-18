import { useState } from "react"
import { BsTwitch, BsDiscord, BsTwitter } from "react-icons/bs";

export default function Team(params){

    const [isGeral, setIsGeral] = useState(true)
    const [isJogadores, setIsJogadores] = useState(false)
    const [isReservas, setIsReservas] = useState(false)
    const [isDesempenho, setIsDesempenho] = useState(false)
    const [isResultados, setIsResultados] = useState(false)

    const falsefyState = () => {
        setIsGeral(false)
        setIsJogadores(false)
        setIsReservas(false)
        setIsDesempenho(false)
        setIsResultados(false)
    }

    return(
        <div className="team-mainbody-file">
            <div className="team-background-top">
                <img className="team-background-image" src={params.background}/>
                <img className="team-logo-image" src={params.logo}/>
                <h3 className="team-name-back">{params.name}</h3>
            </div>
            <nav className="team-navbar-maincontainer">
                <label onClick={() => {falsefyState();setIsGeral(true)}}>Geral</label>
                <label onClick={() => {falsefyState();setIsJogadores(true)}}>Jogadores</label>
                <label onClick={() => {falsefyState();setIsReservas(true)}}>Reservas</label>
                <label onClick={() => {falsefyState();setIsDesempenho(true)}}>Desempenho</label>
                <label onClick={() => {falsefyState();setIsResultados(true)}}>Resultados</label>
            </nav>
            {isGeral &&
                <div className="isGeral-team-mainbody">
                    <div className="isGeral-team-status">
                        <div>
                            <h3>BEST PLAYER</h3>
                            <h4>{params.players[0].summoner} - {params.players[0].lane}</h4>
                        </div>
                        <div>
                            <h3>TOTAL SCORE</h3>
                            <h4>{parseInt(params.score[0].vic) + parseInt(params.score[1].vic) + parseInt(params.score[2].vic)}
                            W/
                            {parseInt(params.score[0].los) + parseInt(params.score[1].los) + parseInt(params.score[2].los)}L - {(parseInt(params.score[0].vic) + parseInt(params.score[1].vic) + parseInt(params.score[2].vic)) / (
                                parseInt(params.score[0].vic) + parseInt(params.score[1].vic) + parseInt(params.score[2].vic) + parseInt(params.score[0].los) + parseInt(params.score[1].los) + parseInt(params.score[2].los)
                            ) * 100}% Winrate</h4>
                        </div>
                        <div>
                            <h3>STAFF</h3>
                            <h4>{params.staff[0]} - Owner</h4>
                            <h4>{params.staff[1]} - Manager</h4>
                            <h4>{params.staff[2]} - H. Coach</h4>
                            <h4>{params.staff[3]} - A. Coach</h4>
                        </div>
                    </div>
                    <div className="isGeral-team-socialmedia">
                        <h3>MAIS DE {params.name}</h3>
                        <div>
                            <a onClick={() => {window.open(params.discord, '_blank').focus()}}><BsDiscord className='bottomBar-svg-discord'/></a>
                            <a onClick={() => {window.open(params.twitter, '_blank').focus()}}><BsTwitter className='bottomBar-svg-twitter'/></a>
                        </div>
                    </div>
                </div>
            }
            {isJogadores &&
                <div className="isJogadores-maincontainer">
                    {
                        params.players.map((player) => {
                            return(
                                <div className="isJogadores-player-container">
                                    <div className="isJogadores-player-lane">
                                        <img src={require('../../../../../lol_assets/lanes/Position_Gold-' + player.lane + '.png')}/>
                                    </div>
                                    <div>
                                        <label>{player.summoner}</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {isReservas &&
                <div className="isJogadores-maincontainer">
                    {
                        params.reserve.map((player) => {
                            if(player.summoner !== null){

                                return(
                                    <div className="isJogadores-player-container">
                                        <div className="isJogadores-player-lane">
                                            <img src={require('../../../../../lol_assets/lanes/Position_Gold-' + player.lane + '.png')}/>
                                        </div>
                                        <div>
                                            <label>{player.summoner}</label>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div></div>
                                )
                            }
                        })
                    }
                </div>
            }
            {isDesempenho &&
                <div>

                </div>
            }
            {isResultados &&
                <div>

                </div>
            }
        </div>
    )
}