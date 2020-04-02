import React from 'react';
import './Topbar.css';

const Topbar = (props) => {

    return (
        <div className="Topbar">
            <h3>Welcome, {props.name}!</h3>
            <h1>The EDGE</h1>
            <a href="./logout" className="buttonLocation style">Logout</a>
           
        </div>
    );
}

export default Topbar;