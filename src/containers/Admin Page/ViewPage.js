import React from 'react';

import "./AdminPage.css";
import jsCookie from "js-cookie";
import Button from 'react-bootstrap/Button';
import { PersonPlus,FilePost,Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

class ViewPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: [],
                        adminName: null,
			search: []
                }
        }

        componentDidMount() {
                var loadedName = jsCookie.get("fullName");

                this.setState({
                        adminName: loadedName
                });
        }

async handleUpdate(evt){
     this.setState({search: evt.target.value});
  }

async handleSearch(evt) {
        fetch('http://35.192.57.209:8000/searches?search={evt}', {
                        method: 'GET'
                        }).then(function(response) {
                        if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        }
                        return response.json();
                        }).then(function(data) {
                        this.setState({info: data});
                        }).catch(err => {
                        console.log('caught it!',err);
                        })

}


	render() {
                return (
                    <div className="AdminPage">
                        <ul>
                                <center><div className="white"><h1>Admin</h1></div></center>
                                <a href="/admin" className="white"> <h3 className="location"> Admin Home </h3> </a>
                                <div className="white"><h2>Welcome {this.state.adminName} </h2> </div>
                        <a href="./logout" className="buttonLocation"><Button variant="primary" size="sm" className="buttonLocation">Logout</Button>{' '}</a>

                                </ul>

                        <ul className="sidebar">
                                <li><a href="/create"><h2><PersonPlus size={45}/> Create Accounts</h2></a></li>
                                <li><a href="/view"><h2 className="blue"><Search size={45}/>View Accounts</h2></a></li>
                                <li><a href="/report"><h2><FilePost size={45}/> Generate Reports</h2></a></li>
                        </ul>
			<div className="location2">
			<Form.Group className="form width">
  <Form.Control size="lg" type="text"  value={this.state.search} onChange={this.handleUpdate.bind(this)} placeholder="Search Students" required/>
			</Form.Group>
		        <Button variant="dark" onClick={this.handleSearch.bind(this)} className="buttonLocation2 buttonStyle2">Search</Button>{' '}		
			</div>

			
                      </div>
                )

    }

}

    
           

export default ViewPage;
