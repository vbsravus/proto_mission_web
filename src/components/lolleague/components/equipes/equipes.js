import './equipes.css'
import Teamscontainer from './components/teamscontainer'
import Phasenavbar from './components/phasenavbar'
import Team from './components/team'
import { useEffect, useState } from 'react'
import data from './components/teams.json'

export default function Equipes(params){
    const [isTeam, setIsTeam] = useState(0)
    return(
        <div className='equipes-mainbody-container'>
            <div className='equipes-teamcontainer-mainfile'>
                <Teamscontainer setIsTeam={setIsTeam}></Teamscontainer>
            </div>
            <div className="equipes-phasenavbar-mainbody">
                <Phasenavbar></Phasenavbar>
                <div className='equipes-showinfo-mainbody'>
                    <Team name={data[isTeam].teamName} 
                    tag={data[isTeam].teamTag} 
                    logo={data[isTeam].teamLogo} 
                    background={data[isTeam].teamBack} 
                    staff={data[isTeam].staff} 
                    players={data[isTeam].players} 
                    reserve={data[isTeam].reserve} 
                    score={data[isTeam].score} 
                    twitter={data[isTeam].teamTwitter} 
                    discord={data[isTeam].teamDiscord} ></Team>
                </div>
            </div>
        </div>
    )
}