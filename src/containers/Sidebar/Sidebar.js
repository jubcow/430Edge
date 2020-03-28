import React from 'react';
import "./Sidebar.css";
import ProgressTree from '../../components/Progress Tree/ProgressTree';

const Sidebar = (props) => {

    return (
        <div className="Sidebar">
            <h1>Sidebar</h1>
            <ProgressTree />
        </div>
    )
}

export default Sidebar;