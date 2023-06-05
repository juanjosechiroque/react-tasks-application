import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext);

    const handleClick = (e) => {
        e.preventDefault();
        createTask({ title, description });
        setTitle("");
        setDescription("");
    }

    return (
        <form>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder='Escribe tu tarea' />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button onClick={handleClick}>Guardar</button>
        </form>
    )
}

export default TaskForm