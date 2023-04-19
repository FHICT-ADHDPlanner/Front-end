import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import './CalendarComponent.css' 

const events = [
    { title: 'Meeting', start: new Date() }
]

class CalendarComponent extends React.Component {
    render() {
        return (
            <div className= "calendar-wrapper">
            <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
                    headerToolbar={{
                        left: 'prev,next,today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView="dayGridMonth"
                    events={events}
                    themeSystem='bootstrap5'
                    showNonCurrentDates={false}
                    height='100vh'
                />
            </div>
        )
    }
}

// a custom render function
function renderEventContent(eventInfo: { timeText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; event: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined } }) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

export default CalendarComponent;