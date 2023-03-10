import './home.css'

export default function Home(params) {
    return(
        <div className="home-mainDiv-container">
            <div className='home-theaterVideo'>
                <div className='home-theaterShadow'></div>
                <video muted autoPlay loop >
                    <source src={require('./assets/video.webm')} type="video/webm"></source>
                </video>
            </div>
            <div className="home-headerTitleDiv-container">
                <div className="home-LogoDiv-container">
                    <img className='home-LogoIMG-tag' src={require('./assets/PrototypeMissionLogo.png')}/>
                    <div>

                        <h1>BEM-VINDO AO PROTOTYPE MISSION</h1>
                        <h4>O LAR DA COMPETIÇÃO</h4>
                    </div>
                </div>
            </div>
            <div className="home-bodyDiv-container">

            </div>
            <div className="home-bottomDiv-container">

            </div>
        </div>
    )
}