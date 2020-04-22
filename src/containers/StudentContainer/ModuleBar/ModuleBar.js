import React from 'react';
import "./ModuleBar.css";
import ModuleProgess from '../../../components/StudentComponents/ModuleProgress/ModuleProgress';
import ProgressTree from '../../../components/StudentComponents/Progress Tree/ProgressTree';


const ModuleBar = (props) => {
    // total of all module progess divided by 100 to get overall percentage
    var progress = (props.exploreProgress + props.developProgress + props.growProgress + props.executeProgress) / 100;

    return (
        <div className="ModuleBar">
            <h1>Module Progress</h1>
            
            <div className="ProgressCircles">
                <ModuleProgess name="Explore" percentage={props.exploreProgress} />
                <ModuleProgess name="Develop" percentage={props.developProgress} />
                <ModuleProgess name="Grow" percentage={props.growProgress} />
                <ModuleProgess name="Execute" percentage={props.executeProgress} />

                <ProgressTree totalProgress={progress}/>
            </div>
        </div>
    )
}

export default ModuleBar;