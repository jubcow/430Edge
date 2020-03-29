import React from 'react';
import "./Sidebar.css";
import ModuleProgess from '../../components/ModuleProgress/ModuleProgress';
import ProgressTree from '../../components/Progress Tree/ProgressTree';


const Sidebar = (props) => {
    // filler variables for right now
    // likely will be passed from student page props
    var exploreProgress = 90;
    var developProgress = 40;
    var growProgress = 5;
    var executeProgress = 0;
    // total of all module progess divided by 100 to get overall percentage
    var progress = (exploreProgress + developProgress + growProgress + executeProgress) / 100;

    return (
        <div className="Sidebar">
            
            <h1>EDGE Progress</h1>

            <ModuleProgess name="Explore" percentage={85} />
            <ModuleProgess name="Develop" percentage={24} />
            <ModuleProgess name="Grow" percentage={5} />
            <ModuleProgess name="Execute" percentage={0} />

            <ProgressTree totalProgress={progress}/>
        </div>
    )
}

export default Sidebar;