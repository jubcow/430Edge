import React from 'react';
import "./Sidebar.css";
import ProgressTree from '../../components/Progress Tree/ProgressTree';

const Sidebar = (props) => {
    var progress = 99;

    return (
        <div className="Sidebar">
            <h1>Sidebar</h1>
            <ProgressTree totalProgress={progress}/>
        </div>
    )
}

export default Sidebar;