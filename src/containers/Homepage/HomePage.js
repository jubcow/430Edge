import React from 'react';
import StudentLayout from '../../hoc/Student Layout/StudentLayout';

import "./HomePage.css";
//import "./woodard.jpg";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
		<body>
            <div id="parent">
        <ul>
                <center><div class="white"><h1>The EDGE Program</h1></div></center>
                <li><a href="/Login">Login</a></li>
                <li><a href="/About">About</a></li>
        </ul>
	<br></br><br></br><br></br><br></br><br></br><br></br>
	<center>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		<br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		<br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</center>
        
	
        </div>
	</body>
        )
    }
}

export default HomePage;
