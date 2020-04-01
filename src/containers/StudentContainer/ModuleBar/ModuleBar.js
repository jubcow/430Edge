import React from 'react';
import "./ModuleBar.css";
import ModuleProgess from '../../../components/StudentComponents/ModuleProgress/ModuleProgress';
import ProgressTree from '../../../components/StudentComponents/Progress Tree/ProgressTree';


const ModuleBar = (props) => {
    // filler variables for right now
    // likely will be passed from student page props
    var exploreProgress = 100;
    var developProgress = 40;
    var growProgress = 15;
    var executeProgress = 5;
    // total of all module progess divided by 100 to get overall percentage
    var progress = (exploreProgress + developProgress + growProgress + executeProgress) / 100;

    return (
        <div className="ModuleBar">
            <h1>Module Progress</h1>
            
            <div className="ProgressCircles">
                <ModuleProgess name="Explore" percentage={exploreProgress} />
                <ModuleProgess name="Develop" percentage={developProgress} />
                <ModuleProgess name="Grow" percentage={growProgress} />
                <ModuleProgess name="Execute" percentage={executeProgress} />

                <ProgressTree totalProgress={progress}/>
            </div>
        </div>
    )
}

export default ModuleBar;