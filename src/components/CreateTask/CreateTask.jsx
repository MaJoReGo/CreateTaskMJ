import React, { useState } from 'react';

export const CreateTask = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <>
         <input value={newTask} onChange={handleInputChange} placeholder='Ingrese la tarea' type="text"/>
            <button onClick={handleAddTask}>Crear tarea</button>
            {tasks.map((task, index) => (
                <div key={index}>
                <h2>{task}</h2>
                </div>
            ))}
        </>
    );
};
