import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

interface Task {
    name: string;
    isComplete: boolean;
    duration: number;
    description: string;
    dueDate: Date;
}

function TaskInput() {
    const { isAuthenticated } = useAuth0();
    const [task, setTask] = useState<Task>({
        name: '',
        isComplete: false,
        duration: 0,
        description: '',
        dueDate: new Date(),
    });

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

    return (
        isAuthenticated ? (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={task.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Is Complete:
                <input type="checkbox" name="isComplete" checked={task.isComplete} onChange={handleCheckboxChange} />
            </label>
            <br />
            <label>
                Duration:
                <input type="number" name="duration" value={task.duration} onChange={handleChange} />
            </label>
            <br />
            <label>
                Description:
                <textarea name="description" value={task.description} onChange={handleChange} />
            </label>
            <br />
            <label>
                Due Date:
                <input type="date" name="dueDate" value={task.dueDate.toISOString().substr(0, 10)} onChange={e => handleDateChange(new Date(e.target.value))} />
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>) :
            <label>Please log in</label>
    );
}

export default TaskInput;