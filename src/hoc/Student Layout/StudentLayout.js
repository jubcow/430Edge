import React from 'react';
import "./StudentLayout.css";
import Topbar from '../../containers/StudentContainer/Topbar/Topbar';
import ModuleBar from '../../containers/StudentContainer/ModuleBar/ModuleBar';
import Calendar from '../../components/Calendar/Calendar';
import RecentActivity from '../../components/StudentComponents/RecentActivity/RecentActivity';
import CurrentTasks from '../../components/StudentComponents/CurrentTasks/CurrentTasks';

// layout wrapper for student pages
// TODO maybe use bootstrap for the grid system
const StudentLayout = (props) => {
    

    return (
        <div className="StudentLayout" class="container-fluid">

            <Topbar name={props.name} />
            <div className="row">

                <ModuleBar 
                    exploreProgress={props.modules.exploreProgress}
                    developProgress={props.modules.developProgress}
                    growProgress={props.modules.growProgress} 
                    executeProgress={props.modules.executeProgress} />
            </div>
            <div className="row">
                <div className="column">
                    <CurrentTasks current={props.current} />
                </div>
                <div className="column">
                    <RecentActivity recent={props.recent} />
                </div>
            </div>
        </div>
    )
}

export default StudentLayout;