import './navbar.css'

export default function Navbar(params){
    return(
        <nav className='navbar-mainDiv-container'>
            <div className='navbar-thDiv-container'>
                <img className='navbar-thIMG-tag' src={require('../../assets/TH.png')}/>
                <h2>Thrive League BR</h2>
            </div>
            <div className='navbar-navigationDiv-container'>
                { params.isGeral &&
                    <h2 className='active'>INTERATIVA</h2>
                }
                { !params.isGeral &&
                    <h2 onClick={() => {
                        params.setIsGeral(true)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>INTERATIVA</h2>
                }
                { params.isEquipes &&
                    <h2 className='active'>EQUIPES</h2>
                }
                { !params.isEquipes &&
                    <h2 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(true)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>EQUIPES</h2>
                }
                { params.isRegulamento &&
                    <h2 className='active'>REGULAMENTO</h2>
                }
                { !params.isRegulamento &&
                    <h2 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(true)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>REGULAMENTO</h2>
                }
                { params.isCalendario &&
                    <h2 className='active'>CALENDÁRIO</h2>
                }
                { !params.isCalendario &&
                    <h2 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(true)
                        params.setIsResultados(false)
                    }} className=''>CALENDÁRIO</h2>
                }
                { params.isResultados &&
                    <h2 className='active'>RESULTADOS</h2>
                }
                { !params.isResultados &&
                    <h2 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(true)
                    }} className=''>RESULTADOS</h2>
                }
            </div>
        </nav>
    )
}