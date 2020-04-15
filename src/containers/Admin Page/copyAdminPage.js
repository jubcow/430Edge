import React from 'react';

import "./AdminPage.css";

class AdminPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        info: []
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
                                <div class ="column" style={{backgroundColor : '#aaa'}}>
					{this.state.info.map(info => <div>{info.UMWID}</div>)}
					
				</div>
				<div class ="column" style={{backgroundColor : '#bbb'}}>
					{this.state.info.map(info => <div>{info.Fullname}</div>)}
					
				</div>
				<div class ="column" style={{backgroundColor : '#ccc'}}>
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
		/*
		fetch(str, {
                        method: 'GET',
			mode: 'cors',
			headers: {'Content-Type':'application/json'},
			
                        }).then(function(response) { return response.json();
                        if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        }
			})
		*/
		
		fetch('http://35.192.57.209:8000/approve', {
  			method: 'POST', // or 'PUT'
			mode: 'no-cors', // cors,
  			headers: {
    				'Content-Type': 'application/json'},
  			body: id,
			name: "task"
		})
					
	}	
}

export default AdminPage;
