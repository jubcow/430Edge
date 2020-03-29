import React from 'react';
import "./StudentLayout.css";
import Topbar from '../../containers/Topbar/Topbar';
import ModuleBar from '../../containers/ModuleBar/ModuleBar';
import Calendar from '../../components/Calendar/Calendar';

// layout wrapper for student pages
// TODO maybe use bootstrap for the grid system
const StudentLayout = (props) => {


    return (
        <div className="StudentLayout">
            <Topbar name={props.name} />
            <ModuleBar />
            <Calendar />
            {/* Recent activity */}
            {/* Current Tasks */ }
            <div className="PageContents">
                {props.children}
            </div>

        </div>
    )
}

export default StudentLayout;