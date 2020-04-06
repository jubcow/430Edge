import React from 'react';
//import StudentLayout from '../../hoc/Student Layout/StudentLayout';

import "./HomePage.css";
//import "./woodard.jpg";
var d;
var d2;
var testPrint = "testing123";

var p = fetch('http://35.192.57.209:8000/test').then((response) => {return response.json();}).then((data) => {
    	console.log(data);
	d = data;
  });

var p2 = fetch('http://35.192.57.209:8000/test').then((response) => {return response.text();}).then((data) => {
	console.log(data);
	d2 = data;
});
console.log("d data: "+d);
console.log("d2 data: "+d2);

class HomePage extends React.Component {

	state = {
		info: []
	}

	getInfo = _ => {
		fetch('http://35.192.57.209:8000/test')
			.then((response) => {return response.json();})
			.then((response) => this.setState({info: response.data}));
	}
/*
    constructor(props) {
    	super(props);
	this.state = {
            info: ''
        }
    }
*/
    render() {
	const{ info } = this.state;
        return (		
            <div className="HomePage">
        <ul>
                <center><div className="white"><h1>The EDGE Program</h1></div></center>
                <li><a href="/Login">Login</a></li>
                <li><a href="/About">About</a></li>
        </ul>
	<br></br><br></br><br></br><br></br><br></br><br></br>
	<center>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		<br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		<br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		<br></br>	
		{ JSON.stringify(this.info) }	{info} {this.info}	{testPrint}
		{d} {d2} {p[1]} {JSON.stringify(p)} {JSON.stringify(p[0])} {p2[0]} 
	</center>	
        </div>
        )
    }
}

export default HomePage;
