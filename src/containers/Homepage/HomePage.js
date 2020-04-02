import React from 'react';
import StudentLayout from '../../hoc/Student Layout/StudentLayout';

import "./HomePage.css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="parent">
        <ul>
                <center><div class="white"><h1>The EDGE Program</h1></div></center>
                <li><a href="/Login">Login</a></li>
                <li><a href="/About">About</a></li>
        </ul>
        <div class="bgColor">
              <br></br>
        </div>
        </div>
        )
    }
}

export default HomePage;