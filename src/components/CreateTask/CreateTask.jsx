import React, { useState } from 'react';
import './CreateTask.css';

export const CreateTask = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [showPendingTasks, setShowPendingTasks] = useState(true);
    const [showArchivedTasks, setShowArchivedTasks] = useState(false);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { description: newTask, archived: false, taskDescription }]);
            setNewTask('');
            setTaskDescription('');
        }
    };

    const handleShowPendingTasks = () => {
        setShowPendingTasks(true);
        setShowArchivedTasks(false);
    };

    const handleShowArchivedTasks = () => {
        setShowArchivedTasks(true);
        setShowPendingTasks(true); // Mostrar también las tareas pendientes
    };

    const handleShowAllTasks = () => {
        setShowPendingTasks(true);
        setShowArchivedTasks(true);
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
            <div className="ButtonConter">
                <button className="ButtonShowPendingTasks" onClick={handleShowPendingTasks}>Ver tareas pendientes</button>
                <button className="ButtonShowArchivedTasks" onClick={handleShowArchivedTasks}>Ver tareas archivadas</button>
                <button className="ButtonShowAllTasks" onClick={handleShowAllTasks}>Ver todas las tareas</button>
            </div>
            <input value={newTask} onChange={handleInputChange} placeholder='Ingrese el título de la tarea' type="text"/>
            <input value={taskDescription} onChange={handleDescriptionChange} placeholder='Ingrese la descripción de la tarea' type="text"/>
            <button onClick={handleAddTask}>Crear tarea</button>
            
            {showPendingTasks && tasks.map((task, index) => (
                <div key={index}>
                    <h2>{task.description}</h2>
                    <p>{task.taskDescription}</p>
                    <button onClick={() => handleArchiveTask(index)}>Archivar</button>
                    <button onClick={() => handleDeleteTask(index)}>Borrar</button>
                </div>
            ))}
            {showArchivedTasks && tasks.map((task, index) => (
                task.archived &&
                <div key={index}>
                    <h2 className="ArchivedTask">{task.description}</h2>
                    <p className="ArchivedTask">{task.taskDescription}</p>
                </div>
            ))}
        </>
    );
};

