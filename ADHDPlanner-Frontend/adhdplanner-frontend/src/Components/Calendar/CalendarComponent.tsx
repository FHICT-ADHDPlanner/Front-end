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
import { INITIAL_EVENTS } from './InitialEvents';
import { useAuth0 } from "@auth0/auth0-react";

let events: EventInput[] = []

function CalendarComponent() {

    const [clickedEvent, setClickedEvent] = React.useState<Task | undefined>(undefined);
    const [events, setEvents] = React.useState<{ id: string, title: string, start: Date }[]>([]);
    const { isAuthenticated } = useAuth0();


    React.useEffect(() => {
        console.log("Test");
        loadTasks();
        console.log("Test5");
    })

    async function loadTasks() {
        console.log("Test2");
        let tasks = await GetTasks();
        console.log("Test3");
        console.log(tasks);

        let _events: { id: string, title: string, start: Date }[] = [];

        tasks.forEach((value) => {
            _events.push({
                id: value.id.toString(),
                title: value.name,
                start: value.dueDate
            })
        })
        console.log("Test4");
        console.log(_events);
        setEvents(_events);
    }

    return (
        isAuthenticated ? (
            <div className="calendar-wrapper">
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
        ) : (
            <div>
                <h1>Please log in</h1>
            </div>
        )
    )
}



function eventClicked(eventClick: EventClickArg) {
    console.log(eventClick)
}



export default CalendarComponent;