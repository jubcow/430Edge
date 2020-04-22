import React from 'react';
import './CurrentTasks.css';

const CurrentTasks = (props) => {


    const taskList = () => {
        
        return (
            props.current.map(result => (
                <li key={result.id}>
                    <p>{result}</p>
                </li>
            ))
        );
    }

    return (
        <div className="currentTasks">
            <h3>Current Tasks</h3>
            {taskList()}
        </div>
    );
}

export default CurrentTasks;