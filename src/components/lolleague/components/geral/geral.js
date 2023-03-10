import './geral.css'
import { BsTwitch, BsDiscord, BsTwitter } from "react-icons/bs";
import WidgetBot from '@widgetbot/react-embed'

export default function Geral(){
    return(
        <div className='lolleague-geral-mainDiv-container'>
            <div className='lolleague-geral-inforDiv-container'>
                <p>ABOUT</p>
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
            <div className='lolleague-geral-nextMatch-container'>
                <p>NEXT MATCH</p>
                <label className='lolleague-geral-nextMatch-date'>04/09/2023</label>
                <div className='lolleague-geral-nextMatch-teams'>
                    <div className='lolleague-geral-nextMatch-redteam'>
                        <img src={require('../../assets/testimage1.png')}/>
                        <h4>Prototype Mission</h4>
                        
                    </div>
                    <div className='lolleague-geral-nextMatch-infoMid'>
                        <h1>VS</h1>
                        <h4>19:20</h4>
                    </div>
                    <div className='lolleague-geral-nextMatch-blueteam'>
                        <h4>Raky Gaming</h4>
                        <img src={require('../../assets/testimage2.png')}/>
                    </div>
                </div>
            </div>
            <div className='lolleague-geral-moderatorsDiv-container'>
                <div>
                <WidgetBot
                    server="1074484548806648000"
                    channel="1079171316411813890"
                    height={"30vh"}
                    width={"100%"}
                />
                {/* <iframe src="https://discord.com/widget?id=1074484548806648000&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
                </div>
            </div>
            <div className='lolleague-geral-melhoresJog-container'>
                

            </div>
            <div className='lolleague-geral-twitch-container'>
                

            </div>
            <div className='lolleague-geral-socialDiv-container'>
                <div>
                    <h3>ACOMPANHE O TORNEIO</h3>
                    <a onClick={() => {window.open('https://twitter.com/Proto_Mission', '_blank').focus()}}><BsTwitter className='lolleague-geral-svg-twitter'/></a>
                    <a onClick={() => {window.open('https://discord.gg/PhAyrf8Gqk', '_blank').focus()}}><BsDiscord className='lolleague-geral-svg-discord'/></a>
                    <a onClick={() => {window.open('https://twitch.tv/prototype_mission', '_blank').focus()}}><BsTwitch className='lolleague-geral-svg-twitch'/></a>
                </div>
            </div>
        </div>
    )
}