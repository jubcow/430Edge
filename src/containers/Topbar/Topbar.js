import React from 'react';
import './Topbar.css';

const Topbar = (props) => {

    return (
        <div className="Topbar">
            <h3>Welcome, {props.name}!</h3>
            <h1>The EDGE</h1>
        </div>
    );
}

export default Topbar;