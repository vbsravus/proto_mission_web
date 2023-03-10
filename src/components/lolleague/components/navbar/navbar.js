import './navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar-mainDiv-container'>
            <div className='navbar-thDiv-container'>
                <img className='navbar-thIMG-tag' src={require('../../assets/TH.png')}/>
                <h2>Thrive League BR</h2>
            </div>
            <div className='navbar-navigationDiv-container'>
                <h2>GERAL</h2>
                <h2>EQUIPES</h2>
                <h2>CALENDÁRIO</h2>
                <h2>PARTIDAS</h2>
            </div>
        </nav>
    )
}