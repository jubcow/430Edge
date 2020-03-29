import React from 'react';
import './ModuleProgress.css';
import VisibilitySensor from 'react-visibility-sensor';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ModuleProgress = (props) => {

    return (
        // TODO circular progress bar with module name in center
        <div className="ModuleProgress">
            <VisibilitySensor>
                {({ isVisible }) => {
                    const percentage = isVisible? props.percentage : 0;
                    return (
                        <CircularProgressbar 
                            value={percentage} 
                            text={props.name} 
                        />
                    );
                }}
            </VisibilitySensor>
        </div>
    )
}

export default ModuleProgress;