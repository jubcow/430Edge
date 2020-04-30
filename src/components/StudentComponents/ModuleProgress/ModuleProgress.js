import React from 'react';
import './ModuleProgress.css';
import VisibilitySensor from 'react-visibility-sensor';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ModuleProgress = (props) => {

    const getStyle = () => {
        var style;
        switch (props.name) {
            case "Explore":
                return "red";
            case "Develop":
                return "blue";
            case "Grow":
                return "green";
            case "Execute":
                return "gold"
        }
    }

    return (
        <div className="ModuleProgress">
            <VisibilitySensor>
                {({ isVisible }) => {
                    const percentage = isVisible? props.percentage : 0;
                    return (
                        <CircularProgressbar 
                            value={percentage} 
                            text={props.name}
                            styles={buildStyles({
                                pathColor: getStyle()
                            })}
                        />
                    );
                }}
            </VisibilitySensor>
        </div>
    )
}

export default ModuleProgress;