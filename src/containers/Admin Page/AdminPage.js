import React from 'react';

import "./AdminPage.css";

import jsCookie from "js-cookie";
import Button from 'react-bootstrap/Button';
import { PersonPlus,FilePost,Search } from 'react-bootstrap-icons';

class AdminPage extends React.Component {
        constructor(props) {
                super(props);
		 this.state = {
			   info: [],
         		   adminName: ''
        	 }
        }

        componentDidMount() {
                let self = this;
		var loadedName = jsCookie.get("fullName");;
		console.log("this is the fullname1: " + jsCookie.get("fullName"));	
		self.setState({
			adminName: loadedName			

		});
		console.log("the loaded name is: " + loadedName);

                fetch('http://35.192.57.209:8000/submissions', {
                        method: 'GET'
                        }).then(function(response) {
                        if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        }
                        return response.json();
                        }).then(function(data) {
			console.log(data);
                        self.setState({info: data});
                        }).catch(err => {
                        console.log('caught it!',err);
                        })
        }
	render() {
                return (
                <div className="AdminPage">
        		<ul>
				{console.log(this.state.adminName)}
                		<center><div className="white"><h1>Admin</h1></div></center>
				<a href="/admin" className="white"> <h3 className="location blue"> Admin Home </h3> </a>
				<div className="white"><h2>Welcome {this.state.adminName} </h2> </div>
        		<a href="./logout" className="buttonLocation"><Button variant="primary" size="lg" className="buttonLocation">Logout</Button>{' '}</a>

				</ul>			

			<ul className="sidebar">
				<li><a href="./create"><h2><PersonPlus size={45}/> Create Accounts</h2></a></li>
				<li><a href="./view"><h2><Search size={45}/>View Accounts</h2></a></li>
				<li><a href="./report"><h2><FilePost size={45}/> Generate Reports</h2></a></li>
			</ul>



		 <div className="row location3">
				<center><h1> Task Table </h1></center>
                                <div className ="column" style={{backgroundColor : '#5da9c9'}}>
					{this.state.info.map(info => <div>{info.UMWID}</div>)}
					
				</div>
				<div className ="column" style={{backgroundColor : '#6db3cf'}}>
					{this.state.info.map(info => <div>{info.Fullname}</div>)}
					
				</div>
				<div className ="column" style={{backgroundColor : '#5da9c9'}}>
					{this.state.info.map(info => <div>
		
						<form onSubmit={this.onFormSubmit}>
						<label>
							{info.TaskName}
							<input 
								type="checkbox"
								name="task"
								onChange={this.onTaskChange.bind(this)}
								value={info.TaskID}
							/>
							</label>			
						</form>
						</div>)}
				</div>
			</div>
		</div>

		)
	}	

onTaskChange(e){
		const val = e.target.checked;
		const id = e.target.value;
		var str = "http://35.192.57.209:8000/approve";

		console.log(id)
		const header = {'Accept' : "application/json", "Content-Type": "application/x-www-form-urlencoded"};
        	const searchParams = new URLSearchParams({var1: id});

        	return fetch(`http://35.192.57.209:8000/approve`,
        	{method: "POST",
         	headers: header,
         	body: searchParams }).then(function(resp){
             		return resp.json();
         	});
	}	
		

}

export default AdminPage;
