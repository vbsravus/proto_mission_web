import './lolleague.css'

import Navbar from './components/navbar/navbar'
import Geral from './components/geral/geral'

export default function Lolleague(params) {
    return(
        <div className='lolleague-mainBody-container'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='lolleague-mainContent-container'>
                <Geral></Geral>
            </div>
        </div>
    )
}
