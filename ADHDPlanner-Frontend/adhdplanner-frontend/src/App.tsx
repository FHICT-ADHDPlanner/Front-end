import React from 'react';
import './App.css';
import NavBar from './Components/Nav-Bar/Nav-Bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetTasks } from './API/TaskAPI'
import TaskInput from './Components/TaskInput/TaskInput';
import CalendarComponent from './Components/Calendar/CalendarComponent';

const App = () => {
    GetTasks()
    return (
        <div className="App">
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin="anonymous"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="anonymous"></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
            <NavBar />
            <TaskInput />
            <CalendarComponent/>
        </div>
    );
};

export default App;
