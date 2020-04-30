import React from 'react';

import "./AdminPage.css";
import jsCookie from "js-cookie";
import Button from 'react-bootstrap/Button';
import { PersonPlus,FilePost,Search } from 'react-bootstrap-icons';


class CreatePage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: [],
                        adminName: null,
			fullname : "",
			umwid : "",
			email : "",
			accType : ""
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
                                <li><a href="/create"><h2 className="blue"><PersonPlus size={45}/> Create Accounts</h2></a></li>
                                <li><a href="/view"><h2><Search size={45}/>View Accounts</h2></a></li>
                                <li><a href="/report"><h2><FilePost size={45}/> Generate Reports</h2></a></li>
                        </ul>

		<div className="location2">
			
                        <h1>Account Creation:</h1>
                        <form>
                        	<label>
                                	Full Name :
                                       	<input type="text" name="fullname" onChange={this.handleInputChange.bind(this)}/>
                                </label>
				<br></br>
				<label>
					UMW ID :
					<input type="text" name="umwid" onChange={this.handleInputChange.bind(this)}/>
				</label>
				<br></br>
				<label>
                                        Acc. Type :
                                        <input type="text" name="accType" onChange={this.handleInputChange.bind(this)}/>
                                </label>
				<br></br>
				<label>
                                        Email :
                                        <input type="text" name="email" onChange={this.handleInputChange.bind(this)}/>
                                </label>
				<br></br>
				<Button variant="dark" onClick={this.handleSubmit.bind(this)}>Register</Button>{' '}
                        </form>
				<br></br>
				
				<div className="result">
                                     <p> {this.state.message}</p>
                                     {this.state.password ? <h3> <br></br>the password is: {this.state.password}</h3> : null} 
                            </div>
		</div>
             	</div>
      
      )

    }

	handleInputChange(event) { //this will be called onChange for the text fields on account creation
		let self = this;
    		const target = event.target;
    		const name = target.name;
		const value = target.value;

		console.log("Name: "+ name + " --- Value: " + value); 
		//commenting out the below setstate and removing the () => from the onChanges allowed these to print normally.
    		self.setState({
      			[name] : value
    		});
		
		console.log("Fullname: " + this.state.fullname + " UMW ID: " + this.state.umwid);
		
  	}
	
         registerUser(userInfo){
		 const header = {'Accept' : "application/json", "Content-Type": "application/x-www-form-urlencoded"};
                const searchParams = new URLSearchParams(userInfo);

               return fetch(`http://35.192.57.209:8000/testCreate`,
                {method: "POST",
                headers: header,
                body: searchParams }).then(function(resp){
                        return resp.json();
                });

        }



	 async handleSubmit(event) {

                const user = await this.registerUser({fullname: this.state.fullname, umwid: this.state.umwid, accType: this.state.accType, email: this.state.email})
		console.log(user);
		this.setState(user);
    }

    }


    
           

export default CreatePage;
