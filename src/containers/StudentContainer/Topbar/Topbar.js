import React from 'react';
import './Topbar.css';
import Button from 'react-bootstrap/Button';

const Topbar = (props) => {

    return (
        <div className="Topbar">
            <h3>Welcome, {props.name}!</h3>
            <h1>The EDGE</h1>
            <Button href="./logout" variant="dark" size="lg" className="button">Logout</Button>
           
        </div>
    );
}

export default Topbar;