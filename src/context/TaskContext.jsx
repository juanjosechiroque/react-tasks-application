import { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../tasks'
export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    const createTask = (task) => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task.title,
            description: task.description,
        }]);
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
