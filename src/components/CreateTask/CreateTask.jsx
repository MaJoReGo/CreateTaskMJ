import React, { useState } from 'react';
import './CreateTask.css'

export const CreateTask = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showPendingTasks, setShowPendingTasks] = useState(true); // Cambiado a true inicialmente
    const [showArchivedTasks, setShowArchivedTasks] = useState(false);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { description: newTask, archived: false }]);
            setNewTask('');
        }
    };

    const handleShowPendingTasks = () => {
        setShowPendingTasks(true);
        setShowArchivedTasks(false);
    };

    const handleShowArchivedTasks = () => {
        setShowArchivedTasks(true);
        setShowPendingTasks(false);
    };

    const handleArchiveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].archived = true;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <>
            <input value={newTask} onChange={handleInputChange} placeholder='Ingrese la tarea' type="text"/>
            <button onClick={handleAddTask}>Crear tarea</button>
            <div>
                <button class="ButtonShowPendingTasks" onClick={handleShowPendingTasks}>Ver tareas pendientes</button>
                <button class="ButtonShowArchivedTasks" onClick={handleShowArchivedTasks}>Ver tareas archivadas</button>
                <button class="ButtonShowArchivedTasks" onClick={() => setShowArchivedTasks(false)}>Ver tareas</button>
            </div>
            {showPendingTasks && tasks.map((task, index) => (
                <div key={index}>
                    <h2>{task.description}</h2>
                    <button onClick={() => handleArchiveTask(index)}>Archivar</button>
                    <button onClick={() => handleDeleteTask(index)}>Borrar</button>
                </div>
            ))}
            {showArchivedTasks && tasks.map((task, index) => (
                task.archived && // Solo mostramos las tareas archivadas
                <div key={index}>
                    <h2>{task.description}</h2>
                </div>
            ))}
        </>
    );
};
