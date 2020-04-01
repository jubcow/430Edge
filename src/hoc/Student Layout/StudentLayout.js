import React from 'react';
import "./StudentLayout.css";
import Topbar from '../../containers/StudentContainer/Topbar/Topbar';
import ModuleBar from '../../containers/StudentContainer/ModuleBar/ModuleBar';
import Calendar from '../../components/Calendar/Calendar';

// layout wrapper for student pages
// TODO maybe use bootstrap for the grid system
const StudentLayout = (props) => {


    return (
        <div className="StudentLayout">
            <Topbar name={props.name} />
            <ModuleBar />
            <Calendar />
            <div className="PageContents">
                {props.children}
            </div>

        </div>
    )
}

export default StudentLayout;