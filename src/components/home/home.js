import './home.css'

export default function Home(params) {
    return(
        <div className="home-mainDiv-container">
            <div className="home-headerTitleDiv-container">
                <div className="home-LogoDiv-container">
                    <img className='home-LogoIMG-tag' src={require('./assets/PrototypeMissionLogo.png')}/>
                    <h1>BEM-VINDO AO PROTOTYPE MISSION</h1>
                </div>
            </div>
            <div className="home-bodyDiv-container">

            </div>
            <div className="home-bottomDiv-container">

            </div>
        </div>
    )
}