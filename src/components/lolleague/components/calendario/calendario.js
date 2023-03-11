
import moment from 'moment'
import 'moment-timezone'
import './calendario.css'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import allLocales from '@fullcalendar/core/locales-all'

export default function Geral(){
    moment.tz.setDefault('America/Sao_Paulo')

    const events = [
        {
            title: 'Round 1: PRO vs RAKY',
            start: new Date('2023-09-04T19:20:00'),
        },
        {
            title: 'Round 2: RAKY vs PRO',
            start: new Date('2023-09-04T20:20:00'),
        },
        {
            title: 'Round 3: IXS vs VBS',
            start: new Date('2023-09-04T21:20:00'),
        },
        {
            title: 'Round 4: VBS vs IXS',
            start: new Date('2023-09-04T22:20:00'),
        },
        {
            title: 'Round 5: PRO vs RAKY',
            start: new Date('2023-09-05T19:20:00'),
        },
        {
            title: 'Round 6: RAKY vs PRO',
            start: new Date('2023-09-05T20:20:00'),
        },
        {
            title: 'Round 7: IXS vs VBS',
            start: new Date('2023-09-05T21:20:00'),
        },
        {
            title: 'Round 8: VBS vs IXS',
            start: new Date('2023-09-05T22:20:00'),
        }
      ]
    return(
        <div className='lolleague-calendar-mainbody' style={{paddingTop: "2vh",paddingBottom: "8vh", paddingLeft: "6vw", paddingRight: "6vw"}}>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin ]}
                initialView="dayGridMonth"
                events={events}
                locales={allLocales}
                locale={'pt'}
                editable={false}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
            />
        </div>
    )
}