import './lolleague.css'

import Navbar from './components/navbar/navbar'
import Geral from './components/geral/geral'

export default function Lolleague(params) {
    return(
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Geral></Geral>
            </div>
        </div>
    )
}
