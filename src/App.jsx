import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'

function App() {
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
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App
