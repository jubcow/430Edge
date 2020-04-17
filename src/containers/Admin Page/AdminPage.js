import React from 'react';

import "./AdminPage.css";

class AdminPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: [],
			fullname : "",
			umwid : "",
			email : "",
			accType : ""
                }
        }

        componentDidMount() {
                let self = this;
                fetch('http://35.192.57.209:8000/submissions', {
                        method: 'GET'
                        }).then(function(response) {
                        if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        }
                        return response.json();
                        }).then(function(data) {
                        self.setState({info: data});
                        }).catch(err => {
                        console.log('caught it!',err);
                        })
        }
	render() {
                return (
                <div className="AdminPage">
			<div className="row">
                                <div className ="column" style={{backgroundColor : '#aaa'}}>
					{this.state.info.map(info => <div>{info.UMWID}</div>)}
					
				</div>
				<div className ="column" style={{backgroundColor : '#bbb'}}>
					{this.state.info.map(info => <div>{info.Fullname}</div>)}
					
				</div>
				<div className ="column" style={{backgroundColor : '#ccc'}}>
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

			<br></br>
                        Testing Account Creation:
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
                               	<input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
                        </form>

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

	handleSubmit(event) {
                const header = {'Accept' : "application/json", "Content-Type": "application/x-www-form-urlencoded"};
                const searchParams = new URLSearchParams({fullname: this.state.fullname, umwid: this.state.umwid, accType: this.state.accType, email: this.state.email});

                return fetch(`http://35.192.57.209:8000/testCreate`,
                {method: "POST",
                headers: header,
                body: searchParams }).then(function(resp){
                        return resp.json();
                });
  	}
}

export default AdminPage;
