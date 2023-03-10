import './geral.css'
import { BsTwitch, BsDiscord, BsTwitter } from "react-icons/bs";

export default function Geral(){
    return(
        <div className='lolleague-geral-mainDiv-container'>
            <div  className='lolleague-geral-inforDiv-container'>
                <p>SOBRE</p>
                <div className='lolleague-geral-inforDiv-name'>
                    <h2>ThriveLeague BR</h2>
                    <h4>1ª Edição</h4>
                </div>
                <div className='lolleague-geral-inforDiv-extra'>
                    <h3>10 Equipes</h3>
                    <h3>3 Fases: Mata-Mata - Grupos - Eliminatória</h3>
                    <h3>Duração: 4 Semanas (1 Mês)</h3>
                </div>
            </div>
            <div className='lolleague-geral-melhoresJog-container'>
                

            </div>
            <div className='lolleague-geral-socialDiv-container'>
                <div>
                    <h3>ACOMPANHE O TORNEIO</h3>
                    <a onClick={() => {window.open('https://twitter.com/Proto_Mission', '_blank').focus()}}><BsTwitter className='lolleague-geral-svg-twitter'/></a>
                    <a onClick={() => {window.open('https://discord.gg/PhAyrf8Gqk', '_blank').focus()}}><BsDiscord className='lolleague-geral-svg-discord'/></a>
                    <a onClick={() => {window.open('https://twitch.tv/prototype_mission', '_blank').focus()}}><BsTwitch className='lolleague-geral-svg-twitch'/></a>
                </div>
            </div>
            <div className='lolleague-geral-moderatorsDiv-container'>
                <div>
                    <h3>ORGANIZADORES</h3>
                </div>
                <div>
                    <div>
                        <img/><h5>Ravus#5104 - Golstar</h5>
                    </div>
                    <div>
                        <img/><h5>Ensabuado#9280 - Ensabuado</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}