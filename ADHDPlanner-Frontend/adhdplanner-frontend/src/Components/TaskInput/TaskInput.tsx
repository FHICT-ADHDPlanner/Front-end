import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//import Modal from '@mui/material/Modal';
import React from 'react';
import { Modal } from 'react-bootstrap';
//import Modal from 'react-modal';

interface Task {
    name: string;
    isComplete: boolean;
    duration: number;
    description: string;
    dueDate: Date;
}

const TaskInput = () => {
    const { isAuthenticated } = useAuth0();
    const [task, setTask] = useState<Task>({
        name: '',
        isComplete: false,
        duration: 0,
        description: '',
        dueDate: new Date(),
    });
    const [open, setOpen] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask(prevTask => ({ ...prevTask, [name]: value }));
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setTask(prevTask => ({ ...prevTask, [name]: checked }));
    }

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setTask(prevTask => ({ ...prevTask, dueDate: date }));
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task); // do something with the task object
    }

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        isAuthenticated ? (
            <view>
                <button onClick={handleOpen}>Open modal</button>
                {/*<Modal*/}
                {/*    open={open}*/}
                {/*    onClose={handleClose}*/}
                {/*>*/}
                {/*    <div></div>*/}
                {/*<Box>*/}
                <Modal
                    show={open}
                    
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            Create new task
                        </Modal.Header>
                        <form onSubmit={handleSubmit}>
                        <Modal.Body>
                        
                            <label>
                                Name:
                            </label><br />
                            <input type="text" name="name" value={task.name} onChange={handleChange} />
                            <br />
                            <label>
                                Duration:                                
                            </label><br />
                            <input type="number" name="duration" value={task.duration} onChange={handleChange} />
                            <br />
                            <label>
                                Description:                                
                            </label><br />
                            <textarea name="description" value={task.description} onChange={handleChange} />
                            <br />
                            <label>
                                Due Date:                                
                            </label><br />
                            <input type="date" name="dueDate" value={task.dueDate.toISOString().substr(0, 10)} onChange={e => handleDateChange(new Date(e.target.value))} />
                                <br />

                            </Modal.Body>
                            <Modal.Footer>
                                <button type="submit">Submit</button>
                            </Modal.Footer>
                        </form>
                    {/*</Box>*/}
                        {/*</Modal>*/}
                    </Modal.Dialog>
                </Modal>
            </view>
        ) : <div></div>
    )
}

export default TaskInput;