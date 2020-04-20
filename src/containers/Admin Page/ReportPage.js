import React from 'react';

import "./AdminPage.css";
import jsCookie from "js-cookie";
import Button from 'react-bootstrap/Button';
import { PersonPlus,FilePost,Search } from 'react-bootstrap-icons';


class ReportPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: [],
                        adminName: null,
                }
        }

        componentDidMount() {
                let self = this;
                var loadedName = jsCookie.get("fullName");

                this.setState({
                        adimnName: loadedName
                });
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


			
                      </div>
                )

    }

}

    
           

export default ReportPage;
