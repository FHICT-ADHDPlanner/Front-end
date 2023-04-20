import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import './CalendarComponent.css' 
import { EventClickArg, EventInput } from '@fullcalendar/core';
import { Modal } from 'react-bootstrap';
import { Task, GetTasks, GetTask } from '../../API/TaskAPI';

let events: EventInput[] = []

function CalendarComponent() {

    const [clickedEvent, setClickedEvent] = React.useState<Task | undefined>(undefined);
    

    React.useEffect(() => {
        loadEvents()
    })

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
                    eventClick={eventClicked}
                />
                <Modal show={clickedEvent !== undefined}>
                    <Modal.Dialog>
                        <Modal.Header>
                        Task Name
                        </Modal.Header>
                        <Modal.Body>


                        </Modal.Body>
                    </Modal.Dialog>




                </Modal>
            </div>
        )
}

// a custom render function
async function loadEvents()
{
    console.log("Test")
    let tasks = await GetTasks();
    console.log(tasks);
    tasks.forEach((value) => {
        events.push({
            id: value.id.toString(),
            title: value.name,
            start: value.dueDate
        })
    })
}

function eventClicked(eventClick: EventClickArg)
{
    console.log(eventClick)
}



export default CalendarComponent;