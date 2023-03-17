import './lolleague.css'
import { useEffect, useState } from 'react'


import Navbar from './components/navbar/navbar'
import Geral from './components/geral/geral'
import Regulamento from './components/regulamento/regulamento'
import Calendario from './components/calendario/calendario'
import Partidas from './components/partidas/partidas'

export default function Lolleague(params) {
    const [isGeral, setIsGeral] = useState(true)
    const [isEquipes, setIsEquipes] = useState(false)
    const [isRegulamento, setIsRegulamento] = useState(false)
    const [isCalendario, setIsCalendario] = useState(false)
    const [isResultados, setIsResultados] = useState(false)


    return(
        <div className='lolleague-mainBody-container'>
            <div>
                <Navbar 
                    isGeral={isGeral}
                    setIsGeral={setIsGeral}
                    isEquipes={isEquipes}
                    setIsEquipes={setIsEquipes}
                    isRegulamento={isRegulamento}
                    setIsRegulamento={setIsRegulamento}
                    isCalendario={isCalendario}
                    setIsCalendario={setIsCalendario}
                    isResultados={isResultados}
                    setIsResultados={setIsResultados}
                ></Navbar>
            </div>
            <div className='lolleague-mainContent-container'>
                { isGeral &&

                    <Geral></Geral>
                } {isRegulamento && 
                    <Regulamento></Regulamento>
                } {isCalendario &&
                    <Calendario></Calendario>                    
                } {
                    isResultados &&
                    <Partidas></Partidas>
                }
            </div>
        </div>
    )
}
