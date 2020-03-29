import React from 'react';
import "./StudentLayout.css";
import Topbar from '../../containers/Topbar/Topbar';
import ModuleBar from '../../containers/ModuleBar/ModuleBar';

// layout wrapper for student pages
const StudentLayout = (props) => {
    return (
        <div className="StudentLayout">
            <Topbar name={props.name} />
            
            <ModuleBar />
            <div className="PageContents">
                {props.children}
            </div>
        </div>
    )
}

export default StudentLayout;