import React from "react";

export default function NewTask({value, addNewTask, handleChange}){
    return (
    <form onSubmit={addNewTask}>
        <input 
            type="text" 
            name="title"
            value={value} 
            placeholder="New Task" 
            onChange={handleChange}
        />
    </form>
    );

}