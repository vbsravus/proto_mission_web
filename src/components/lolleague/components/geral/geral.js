import { useRef } from 'react';

import './geral.css'
import { BsTwitch, BsDiscord, BsTwitter } from "react-icons/bs";
import WidgetBot from '@widgetbot/react-embed'
import { TwitchPlayer, TwitchChat } from 'react-twitch-embed';
import { useState } from 'react';

export default function Geral(){
    const [isOnline, setIsOnline] = useState(null)

    return(
        <div className='lolleague-geral-dividerC'>
            <div className='lolleague-geral-mainDiv-container'>
                <div className='lolleague-geral-nextMatch-container'>
                    {/* <p>NEXT MATCH</p> */}
                    <p className='lolleague-geral-nextMatch-date'>04/09/2023</p>
                    <div className='lolleague-geral-nextMatch-teams'>
                        <div className='lolleague-geral-nextMatch-blueteam'>
                            <img src={require('../../assets/testimage1.png')}/>
                            <text>Prototype Mission Belunga Edition</text>
                            
                        </div>
                        <div className='lolleague-geral-nextMatch-infoMid'>
                            <text className='lolleague-geral-nextMatch-VS'>VS</text>
                            <text>19:20</text>
                        </div>
                        <div className='lolleague-geral-nextMatch-redteam'>
                            <text>Raky Gaming</text>
                            <img src={require('../../assets/testimage2.png')}/>
                        </div>
                    </div>
                </div>

                {/* <div className='lolleague-geral-melhoresJog-container'>
                    <p>PLAYER RANK</p>
                    <div>
                        <label><label><img src={require('../../assets/testimage1.png')}/>Ravus</label><label>10.00</label></label>
                        <label><label><img src={require('../../assets/testimage1.png')}/>Ensabuado</label><label>10.00</label></label>
                        <label><label><img src={require('../../assets/testimage2.png')}/>Cosmo</label><label>9.94</label></label>
                        <label><label><img src={require('../../assets/testimage1.png')}/>Degel</label><label>9.70</label></label>
                        <label><label><img src={require('../../assets/testimage2.png')}/>Shiro</label><label>9.14</label></label>
                        <label><label><img src={require('../../assets/testimage1.png')}/>Neyal</label><label>7.70</label></label>
                    </div>
                </div> */}
                <div className='lolleague-geral-twitch-container'>
                    <TwitchPlayer
                        autoplay
                        muted
                        onCaptions={function noRefCheck(){}}
                        onEnded={function noRefCheck(){}}
                        onOffline={function triggerOffline(){}}
                        onOnline={function triggerOnline(){}}
                        onPause={function noRefCheck(){}}
                        onPlay={function noRefCheck(){}}
                        onPlaybackBlocked={function noRefCheck(){}}
                        onPlaying={function noRefCheck(){}}
                        onReady={function noRefCheck(){}}
                        onSeek={function noRefCheck(){}}
                        channel="lec"
                        width={"70vw"}
                        height={"71vh"}
                    />

                </div>
            </div>
            <div className='lolleague-geral-chat-container'>
                <div className='lolleague-geral-inforDiv-container'>
                    <p>ABOUT</p>
                    <div className='lolleague-geral-inforDiv-name'>
                        <h2>ThriveLeague BR</h2>
                        <h4>1ª Edição</h4>
                    </div>
                    <div className='lolleague-geral-inforDiv-extra'>
                    </div>
                </div>
                <div className='lolleague-geral-moderatorsDiv-container'>
                        <TwitchChat 
                            channel="prototype_mission" 
                            height={"100%"}
                            width={"100%"}
                        />
                        {/* <WidgetBot
                            server="1074484548806648000"
                            channel="1079171316411813890"
                            height={"73vh"}
                            width={"100%"}
                        /> */}
                        {/* <iframe src="https://discord.com/widget?id=1074484548806648000&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
                </div>

            </div>
        </div>
    )
}