import './teamscontainer.css'
import data from './teams.json'

export default function Teamscontainer(params){
    function callHideShow(id){
        for (let i = 0; i < data.length; i++) {
            document.getElementById(data[i].id).className = document.getElementById(data[i].id).className === "team-div-teamcontainer" ? "team-div-teamcontainer" : "team-div-teamcontainer"
        }
        document.getElementById(id).className = document.getElementById(id).className === "team-div-teamcontainer" ? "activatedBack" : "team-div-teamcontainer"
    }
    return(
        <div className="teamscontainers-mainbody">
            <div className='teamcontainers-mainbodymap'>
                {data &&
                    data.map((team) => {
                        
                        return (
                            <div key={team.id} id={team.id} onClick={() => {
                                    params.setIsTeam(team.id)
                                    callHideShow(team.id)
                                }
                            } className='team-div-teamcontainer' style={{backgroundImage: `url(${team.teamLogo})`}}>
                                <h3>{team.teamName}</h3>
                                <h5>{team.teamTag}</h5>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}