import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from './components/TaskList';

export default function App(){
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addNewTask = (event) => {
        // console.log(event);
        event.preventDefault()
        if (newTask.length < 1) return;
        setTasks( (prevTasks) => [newTask, ...prevTasks]);
        setNewTask('');
    };

    const handleChange = ({target}) => {
        setNewTask(target.value);
    };

    const handleDelete = (key) => {
        setTasks( (prevTasks)=> 
            prevTasks.filter( (ele, idx) => idx!==key));
    };

    return (
        <>
        <NewTask 
            value={newTask} 
            addNewTask={addNewTask} 
            handleChange={handleChange}
        />
        <TaskList tasks={tasks} handleDelete={handleDelete}/>
        </>
    );
}