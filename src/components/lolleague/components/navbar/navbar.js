import { useState } from 'react'
import './navbar.css'

export default function Navbar(params){
    const [isGeral, setIsGeral] = useState(true)
    const [isEquipes, setIsEquipes] = useState(false)
    const [isRegulamento, setIsRegulamento] = useState(false)
    const [isCalendario, setIsCalendario] = useState(false)
    const [isResultados, setIsResultados] = useState(false)



    return(
        <nav className='navbar-mainDiv-container'>
            <div className='navbar-thDiv-container'>
                <img className='navbar-thIMG-tag' src={require('../../assets/TH.png')}/>
                <h2>Thrive League BR</h2>
            </div>
            <div className='navbar-navigationDiv-container'>
                { isGeral &&
                    <h2 className='active'>GERAL</h2>
                }
                { !isGeral &&
                    <h2 className=''>GERAL</h2>
                }
                { isEquipes &&
                    <h2 className='active'>EQUIPES</h2>
                }
                { !isEquipes &&
                    <h2 className=''>EQUIPES</h2>
                }
                { isRegulamento &&
                    <h2 className='active'>REGULAMENTO</h2>
                }
                { !isRegulamento &&
                    <h2 className=''>REGULAMENTO</h2>
                }
                { isCalendario &&
                    <h2 className='active'>CALENDÁRIO</h2>
                }
                { !isCalendario &&
                    <h2 className=''>CALENDÁRIO</h2>
                }
                { isResultados &&
                    <h2 className='active'>RESULTADOS</h2>
                }
                { !isResultados &&
                    <h2 className=''>RESULTADOS</h2>
                }
            </div>
        </nav>
    )
}