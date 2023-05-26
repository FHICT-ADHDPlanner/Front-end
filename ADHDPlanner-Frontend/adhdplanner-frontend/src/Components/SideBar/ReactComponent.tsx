import React from 'react';
/*import TaskInput from './TaskInput/TaskInput';*/
function ReactComponent() {
    return (
        <div className='demo-app-sidebar'>
            <div className='demo-app-sidebar-section'>
                <h2>Instructions</h2>
                <ul>
                    <li>Select dates and you will be prompted to create a new event</li>
               {/*     <TaskInput />*/}
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>
        </div>
    )
}

export default ReactComponent;