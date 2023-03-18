import { useEffect, useState } from 'react';
import './navigation_bottombar.css'
import { BsTwitch, BsDiscord, BsTwitter } from "react-icons/bs";

export default function NavBottomBar() {

    const [server_timerH, setServer_timerH] = useState(``)
    const [server_timerM, setServer_timerM] = useState(``)
    const [server_timerS, setServer_timerS] = useState(``)

    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date();
          setServer_timerH(now.getHours().toString().padStart(2, "0"));
          setServer_timerM(now.getMinutes().toString().padStart(2, "0"));
          setServer_timerS(now.getSeconds().toString().padStart(2, "0"));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="bottomBar-mainDiv-container">
            <div className="bottomBar-LogoDiv-container" onClick={() => window.location.href = '/'}>
                <img className='bottomBar-LogoIMG-tag' src={require('./assets/PrototypeMissionLogo.png')}/>
            </div>
            <div className="bottomBar-bodyDiv-container">
                <div className='bottomBar-navigation-ThriveLeagueBR'  onClick={() => window.location.href = '/br/thrive'}>

                    <img className='bottomBar-thIMG-tag' src={require('./assets/TH.png')}/>
                    <p>Thrive BR</p>
                </div>
                <div className='bottomBar-navigation-ThriveLeagueNA'>

                    <img className='bottomBar-thIMG-tag' src={require('./assets/TH.png')}/>
                    <p>Thrive NA</p>
                </div>
            </div>
            <div className="bottomBar-social-container">
                <div className='bottomBar-social-twitter'>
                    <a onClick={() => {window.open('https://twitter.com/Proto_Mission', '_blank').focus()}}><BsTwitter className='bottomBar-svg-twitter'/></a>
                </div>
                <div className='bottomBar-social-discord'>
                    <a onClick={() => {window.open('https://discord.gg/PhAyrf8Gqk', '_blank').focus()}}><BsDiscord className='bottomBar-svg-discord'/></a>
                </div>
                <div className='bottomBar-social-twitch'>
                    <a onClick={() => {window.open('https://twitch.tv/prototype_mission', '_blank').focus()}}><BsTwitch className='bottomBar-svg-twitch'/></a>
                </div>
                <div className='bottomBar-social-timer'>
                    <h3>{server_timerH}:{server_timerM}:{server_timerS}</h3>
                </div>
            </div>
        </div>
    )
}