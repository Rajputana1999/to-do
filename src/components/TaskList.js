import React from "react";

export default function TaskList({tasks, handleDelete}){
    return (
        <ul>
        {tasks.map( 
            (task, idx) => <li key={idx}>
                                {task}
                                <button onClick={handleDelete}>X</button>
                            </li>)}
        </ul>
    );
}