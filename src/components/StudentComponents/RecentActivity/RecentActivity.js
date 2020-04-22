import React from 'react';
import './RecentActivity.css';

const RecentActivity = (props) => {
    
    const taskList = () => {
        
        return (
            props.recent.map(result => (
                <li key={result.id}>
                    <p>{result}</p>
                </li>
            ))
        );
    }

    return (
        <div className="recentActivity">
            <h3>Recent Activity</h3>
            {taskList()}
        </div>
    )
}

export default RecentActivity;