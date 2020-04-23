import React from 'react';

import "./AdminPage.css";
import jsCookie from "js-cookie";
import Button from 'react-bootstrap/Button';
import { PersonPlus,FilePost,Search } from 'react-bootstrap-icons';
import {Bar} from 'react-chartjs-2';

class ReportPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: [],
			infoTasks: [],
                        adminName: null,
			chartStateAlt: {
                       		labels: ['Tasks', 'Unsubmitted', 'Submitted'],
                        	datasets: [
                        	{
                                	label: 'TaskData',
                                	backgroundColor: 'rgba(75,192,192,1)',
                                	borderColor: 'rgba(0,0,0,1)',
                                	borderWidth: 2,
                                	data: []
                        	}
                        	]
                	}
        	}
	}
	printStuff(){
		console.log("test");
	}
	
        componentDidMount() {
                let self = this;
                var loadedName = jsCookie.get("fullName");

                this.setState({
                        adminName: loadedName,
                });

		var testData;
		fetch('http://35.192.57.209:8000/reportUsers', {
                        method: 'GET'
                        }).then(function(response) {
                        	if (response.status >= 400) {
                        		throw new Error("Bad response from server");
                        	}
                        	return response.json();
                        }).then(function(data) {
				//console.log(data);
                        	self.setState({info: data});
                        }).catch(err => {
                        	console.log('caught it!',err);
                        })

		/*
		fetch('http://35.192.57.209:8000/reportTasks', {
                        method: 'GET'
                        }).then(function(response) {
                                if (response.status >= 400) {
                                        throw new Error("Bad response from server");
                                }
                                return response.json();
                        }).then(function(data) {
                                //console.log(data);
				testData = data;
				console.log(testData);
				console.log(data);
				console.log(data[0].taskTotal);
                                self.setState({infoTasks: data});
                        }).catch(err => {
                                console.log('caught it!',err);
                        })
		*/

		fetch('http://35.192.57.209:8000/reportTasks', {
                        method: 'GET'
                        }).then(function(response) {
                                if (response.status >= 400) {
                                        throw new Error("Bad response from server");
                                }
                                return response.json();
                        }).then(function(data) {
                                //console.log(data);
                                //console.log(data[0].taskTotal);
                                self.setState({
					chartStateAlt: {
                                		labels: ['Tasks', 'Unsubmitted', 'Submitted'],
                                		datasets: [
                                		{
                                        		label: 'TaskData',
                                        		backgroundColor: 'rgba(75,192,192,1)',
                                        		borderColor: 'rgba(0,0,0,1)',
                                        		borderWidth: 2,
                                        		data: [data[0].taskTotal,data[0].taskUnsubmitted,data[0].taskSubmitted]
                                		}
                                		]
                        		}	
				});
                        })

        }

	render() {
                return (
                    <div className="AdminPage">
                        <ul>
                                <center><div className="white"><h1>Admin</h1></div></center>
                                <a href="/admin" className="white"> <h3 className="location"> Admin Home </h3> </a>
                                <div className="white"><h2>Welcome {this.state.adminName} </h2> </div>
                        <a href="./logout" className="buttonLocation"><Button variant="primary" size="lg" className="buttonLocation">Logout</Button>{' '}</a>

                                </ul>

                        <ul className="sidebar">
                                <li><a href="/create"><h2><PersonPlus size={45}/> Create Accounts</h2></a></li>
                                <li><a href="/view"><h2><Search size={45}/>View Accounts</h2></a></li>
                                <li><a href="/report"><h2 className="blue"><FilePost size={45}/> Generate Reports</h2></a></li>
                        </ul>	
		
			<div className="row location3">
			Total Students: {this.state.info.map(info => <div>{info.numUsers}</div>)}

			<Bar
          			data={this.state.chartStateAlt}
				width={1000}
				height={500}
          			options={{
            				title:{
              					display:true,
              					text:'Task Data',
              					fontSize:20
            				},
            				legend:{
              					display:true,
              					position:'right'
            				}
          			}}
        		/>

			</div>

                      </div>
                )

    }

}

    
           

export default ReportPage;
