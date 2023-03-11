import './navbar.css'

export default function Navbar(params){
    return(
        <nav className='navbar-mainDiv-container'>
            <div className='navbar-thDiv-container'>
                {/* <img className='navbar-thIMG-tag' src={require('../../assets/TH.png')}/> */}
                <h2>Thrive League BR</h2>
            </div>
            <div className='navbar-navigationDiv-container'>
                { params.isGeral &&
                    <h3 className='active'>INTERATIVA</h3>
                }
                { !params.isGeral &&
                    <h3 onClick={() => {
                        params.setIsGeral(true)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>INTERATIVA</h3>
                }
                { params.isEquipes &&
                    <h3 className='active'>EQUIPES</h3>
                }
                { !params.isEquipes &&
                    <h3 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(true)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>EQUIPES</h3>
                }
                { params.isRegulamento &&
                    <h3 className='active'>REGULAMENTO</h3>
                }
                { !params.isRegulamento &&
                    <h3 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(true)
                        params.setIsCalendario(false)
                        params.setIsResultados(false)
                    }} className=''>REGULAMENTO</h3>
                }
                { params.isCalendario &&
                    <h3 className='active'>CALENDÁRIO</h3>
                }
                { !params.isCalendario &&
                    <h3 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(true)
                        params.setIsResultados(false)
                    }} className=''>CALENDÁRIO</h3>
                }
                { params.isResultados &&
                    <h3 className='active'>RESULTADOS</h3>
                }
                { !params.isResultados &&
                    <h3 onClick={() => {
                        params.setIsGeral(false)
                        params.setIsEquipes(false)
                        params.setIsRegulamento(false)
                        params.setIsCalendario(false)
                        params.setIsResultados(true)
                    }} className=''>RESULTADOS</h3>
                }
            </div>
        </nav>
    )
}