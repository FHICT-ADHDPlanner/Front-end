import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const events = [
    { title: 'Meeting', start: new Date() }
]

export function DemoApp() {
    return (
            <div>
                <h1>Demo App</h1>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    weekends={false}
                    events={events}
                    eventContent={renderEventContent}
               //     themeSystem: 'bootstrap5'
                />
            </div>
    )
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
export default DemoApp;