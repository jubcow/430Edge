import React from 'react';
import "./StudentLayout.css";
import Sidebar from '../../containers/Sidebar/Sidebar';

// layout wrapper for student pages
const StudentLayout = (props) => {
    return (
        <div className="Layout">
            <h1>Layout</h1>
            <Sidebar />
            <div className="PageContents">
                {props.children}
            </div>
        </div>
    )
}

export default StudentLayout;