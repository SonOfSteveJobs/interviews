import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const onChangeTodo = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        }

        setTasks([...tasks, newTask])
        setTask('')
    }

    const onToggleTask = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed }
            }

            return task;
        })

        setTasks(newTasks);
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
    }

    return (
        <div>
            <h1>Todo list</h1>

            <input
                type="text"
                value={task}
                onChange={onChangeTodo}
            />

            <button onClick={addTask}>Add todo</button>
            <ul>
                {tasks.map((taskItem) => (
                    <li key={taskItem.id}>
                        <input
                            type="checkbox"
                            onChange={() => onToggleTask(taskItem.id)}
                        />
                        {taskItem.text}
                        <button
                            onClick={() => deleteTask(taskItem.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}